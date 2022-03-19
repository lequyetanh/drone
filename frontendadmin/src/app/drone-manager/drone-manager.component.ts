import { Component, OnInit } from "@angular/core";
import { DialogAddNewDroneComponent } from "../dialog/dialog-add-new-drone/dialog-add-new-drone.component";
import { DialogService } from "../service/dialog-service";
import { MatDialog } from "@angular/material/dialog";
import { DialogListDroneComponent } from "../dialog/dialog-list-drone/dialog-list-drone.component";
import { WebSocketAPI } from "../service/websocketAPI-service";
import { Drone } from "../entitys/drone-entity";
import { DialogMessageComponent } from "../dialog/dialog-message/dialog-message.component";
import * as SockJS from "sockjs-client";
// import { Stomp } from "stompjs";
import * as Stomp from 'stompjs';
declare const Microsoft;
import { DroneService } from './../service/drone-service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-drone-manager",
  templateUrl: "./drone-manager.component.html",
  styleUrls: ["./drone-manager.component.css"],
})
export class DroneManagerComponent implements OnInit {
  droneSelected;

  webSocketEndPoint: string = "http://localhost:8080/chat-websocket";
  topic: string = "/chat/sendMessage";
  stompClient: any;

  isConnected: boolean = false;

  isClickForSetUp: boolean;

  checkMission: any;

  battery: Number;

  map = null;
  location_data = [];
  pin_data = [];
  list_mission = [];
  check_mission = 0;
  string_mission = "";
  count_mission = 0;
  current_loc = null;
  current_pin = null;

  speed: number = 5;
  altitudeSetting: number = 10;
  latPoint;
  longPoint;
  commander: Boolean = false;


  idUser;
  user;
  droneFree;
  distance; 

  currentPositionAllDrone = [];
  

  constructor(
    private droneService: DroneService,
    private webSocket: WebSocketAPI,
    private route: ActivatedRoute,  
    private dialog?: MatDialog,
  ) {
    this.route.paramMap.subscribe(paramMap => {
      this.idUser = paramMap.get('id');
     });
  }

  ngOnInit() {
    this.getAllDroneFree();
    this.getUserFromId(this.idUser);
  }

  getAllDroneFree(){
    this.droneService.getAllDroneFree().subscribe(data=> {
      this.droneFree = data;
      console.log(this.droneFree)
    })
  }

  getUserFromId(idUser){
    this.droneService.getUserFromId(idUser).subscribe(data => {
      this.user = data[0]
    })
  }

  confirm(){

    this.currentPositionAllDrone = this.webSocket.currentPositionAllDrone;
    for(let i=0; i<this.currentPositionAllDrone.length; i++){
      if(this.currentPositionAllDrone[i].drone_name == this.droneSelected.drone_name){
        this.webSocket.currentPositionAllDrone[i].status = 'busy'
      }
    }

    this.droneSelected.status = 'busy';
    this.droneSelected.idUser = this.idUser;
    this.droneSelected.package = this.user.package;
    this.droneService.updateDroneFromId(this.droneSelected.id, this.droneSelected).subscribe();

    this.user.idDrone = this.droneSelected.id;
    this.user.checkOut = 3;
    this.droneService.updateUserFromId(this.user.id, this.user).subscribe();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getMap();
      this.getUserPosition({lat: this.user.position[0], lon: this.user.position[1]}, this.user.name)
      this.createFirstLocation({lat: "21.006554", lon:"105.842895"}, '')
      this.distance = this.getDistance(Number(this.user.position[0]), Number(this.user.position[1]), 21.006554, 105.842895)
    }, 2000);
  }

  getDistance(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // this.deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return Math.round(d*1000) + "(m)";
  }

  deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  getMap() {
    this.map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), {
      credentials:
        "Ak8NEUZH_tdLjbHdrvVc67kl7CMZq7N96NLz4V0RgShkFCqipiH4oHtAjDDzjzPy",
    });
  }

  getLocation() {
    if (!this.checkBeforCallAPI()) {
      return;
    }
    this.commander = true;
    this.clearMission();
    this.locations = [];
    this.map.entities.removeAt(0);
    this.stompClient.send("/app/getLocation", {}, JSON.stringify(this.droneSelected.port));
    this.status = " Getting Location...";
  }

  getUserPosition(position, title){
    this.currentLatitude = Number(position.lat);
    this.currentLongitude = Number(position.lon);

    this.current_loc = new Microsoft.Maps.Location(
      this.currentLatitude,
      this.currentLongitude
    );
  
    this.current_pin = new Microsoft.Maps.Pushpin(this.current_loc, {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><circle cx="9" cy="9" r="7" stroke="green" stroke-width="4" fill="yellow" /></svg>',
      anchor: new Microsoft.Maps.Point(9, 9),
      title: title
    });
    this.locations.push(this.current_loc);
    this.map.entities.push(this.current_pin);
    this.map.setView({ center: this.current_loc, zoom: 15 });
  }

  _connect() {
    const _this = this;
    let socket = new SockJS(_this.webSocketEndPoint);
    _this.stompClient = Stomp.over(socket);
    _this.stompClient.connect(
      {},
      function (frame) {

        _this.stompClient.subscribe("/chat/location", function (data) {
          if(_this.droneSelected.port == JSON.parse(data.body).port.toString()){
            _this.createFirstLocation(JSON.parse(data.body), _this.droneSelected.drone_name);
          }
        });

        _this.stompClient.subscribe('/chat/sendMessage', function (data) {
          let local = JSON.parse(data.body);
          if(_this.droneSelected.port == JSON.parse(data.body).port.toString()){
            _this.distance = _this.getDistance(Number(_this.user.position[0]), Number(_this.user.position[1]), Number(local.lat), Number(local.lon))
            if(Number(local.lat).toFixed(4) == Number(_this.droneSelected.position[0]).toFixed(4) && Number(local.lon).toFixed(4) == Number(_this.droneSelected.position[1]).toFixed(4)){
              _this.droneSelected.status = 'free';
              _this.droneService.updateDroneFromId(_this.droneSelected.id, _this.droneSelected).subscribe();
            }

            
            _this.createTextNode(JSON.parse(data.body));
          }


        });

        _this.stompClient.reconnect_delay = 2000;
      },
      _this.errorCallBack
    );
  }

  errorCallBack(error) {
    setTimeout(() => {
      this._connect();
    }, 5000);
  }

  locations = [];
  currentLatitude;
  currentLongitude;

  createFirstLocation(loca, title) {
    console.log("create first localtion")
    this.currentLatitude = Number(loca.lat);
    this.currentLongitude = Number(loca.lon);

    this.current_loc = new Microsoft.Maps.Location(
      this.currentLatitude,
      this.currentLongitude
    );
  
    this.current_pin = new Microsoft.Maps.Pushpin(this.current_loc, {
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><circle cx="9" cy="9" r="7" stroke="green" stroke-width="4" fill="yellow" /></svg>',
      anchor: new Microsoft.Maps.Point(9, 9),
      title: title
    });
    this.locations.push(this.current_loc);
    this.map.entities.push(this.current_pin);
    this.map.setView({ center: this.current_loc, zoom: 15 });
    this.status = "Success.";
  }
  altitude;
  status: string;
  isMoveUp: boolean = true;

  lastLocation = {};

  createTextNode(loca) {
    let lat = Number(loca.lat);
    let lon = Number(loca.lon);
    let alt = Number(loca.alt);
    this.battery = Number(loca.battery) * 100;
    if(lat== 0 && lon == 0){
      return;
    }
    if (this.isMoveUp && (!loca.alt || alt < this.altitudeSetting - 0.3)) {
      this.status = "Start Flying...";
    } else if (
      alt > this.altitudeSetting - 0.3
    ) {
      this.isMoveUp = false;
      this.status = "Moving..";
    } else if (alt > 0 && alt < this.altitudeSetting - 0.3) {
      this.status = "Landing...";
    } else {
      this.isMoveUp = true;
      this.status = " Sussess.";
      this.unfollow();
      this.currentLatitude = lat;
      this.currentLongitude = lon;
      this.current_loc = new Microsoft.Maps.Location(
        this.currentLatitude,
        this.currentLongitude
      );
      this.current_pin = new Microsoft.Maps.Pushpin(this.current_loc, {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><circle cx="9" cy="9" r="7" stroke="green" stroke-width="4" fill="yellow" /></svg>',
        anchor: new Microsoft.Maps.Point(9, 9),
      });
    }
    if (this.lastLocation["lat"] !== lat || this.lastLocation["lat"] !== lon) {
      this.lastLocation = { lat, lon };
    } else {
      return;
    }

    this.altitude = alt;
    if (loca.alt != null && loca.lat !== 0) {
      var locat = new Microsoft.Maps.Location(lat, lon);
      this.location_data.push(locat);

      var pin = new Microsoft.Maps.Pushpin(locat, {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"><circle cx="8" cy="8" r="5" stroke="orange" stroke-width="4" fill="white" /></svg>',
        anchor: new Microsoft.Maps.Point(8, 8),
      });
      this.pin_data.push(pin);
    }

    if (this.location_data.length != 0) {
      var line = new Microsoft.Maps.Polyline(this.location_data);
      this.map.entities.push(line);
      this.pin_data.forEach((item) => {
        this.map.entities.push(item);
      });
    }
  }

  executeMissonNorl() {
    if (!this.checkBeforCallAPI()) {
      return;
    }
    this.commander = true;
    this.stompClient.send("/app/missionnorl", {}, JSON.stringify(this.droneSelected.port));
    this.location_data = [];
    this.pin_data = [];
      this.follow();
  }

  executeMisson() {
    if (!this.checkBeforCallAPI()) {
      return;
    }
    this.commander = true;
    this.stompClient.send("/app/mission", {}, JSON.stringify(this.droneSelected.port));
    this.location_data = [];
    this.pin_data = [];
      this.follow();

    
  }

  connect() {
    this._connect();
    this.isConnected = true;
  }

  disconnect() {
    this._disconnect();
    this.isConnected = false;
  }

  _disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
  }

  sendMessage() {
    this._send("");
  }

  /**
   * Send message to sever via web socket
   * @param {*} message
   */
  _send(message) {
    this.stompClient.send("/app/send", {}, JSON.stringify(message));
  }

  isCreateMissionByType: boolean = false;

  startCreateMissionByType() {
    this.isCreateMissionByType = true;
    this.list_mission = [...this.locations];
    this.latPoint = this.user.position[0];
    this.longPoint = this.user.position[1];
    this.addToMission();
  }

  addToMission() {
    console.log(this.latPoint, this.longPoint)
    if (this.latPoint != "" && this.longPoint != "") {
      this.count_mission++;
      var locat = new Microsoft.Maps.Location(this.latPoint, this.longPoint);
      var pin = new Microsoft.Maps.Pushpin(locat, {
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"><circle cx="8" cy="8" r="5" stroke="red" stroke-width="4" fill="yellow" /></svg>',
        anchor: new Microsoft.Maps.Point(8, 8),
        title: "" + this.count_mission,
      });
      this.map.entities.push(pin);
      this.list_mission.push(locat);
      var line = new Microsoft.Maps.Polyline(this.list_mission, {
        strokeColor: "yellow",
      });
      this.map.entities.push(line);
    } else {
      this.showMessage("Error", "Latitude and Longitude must be not emty.");
    }
  }

  startCreateMissionByClick() {
    if (!this.droneSelected) {
      this.showMessage("Error", "Please select Device.");
      return;
    }
    if (!this.current_loc) {
      this.showMessage("Error", "Please get location of current device.");
      return;
    }

    this.isClickForSetUp = true;
    this.list_mission = [...this.locations];
    const _this = this;
    this.checkMission = Microsoft.Maps.Events.addHandler(
      this.map,
      "click",
      function (e) {
        _this.count_mission++;
        var pin = new Microsoft.Maps.Pushpin(e.location, {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"><circle cx="8" cy="8" r="5" stroke="red" stroke-width="4" fill="yellow" /></svg>',
          anchor: new Microsoft.Maps.Point(8, 8),
          title: "" + _this.count_mission,
        });
        _this.map.entities.push(pin);
        _this.list_mission.push(e.location);
        var line = new Microsoft.Maps.Polyline(_this.list_mission, {
          strokeColor: "yellow",
        });
        _this.map.entities.push(line);
      }
    );
  }

  stopClick() {
    this.isClickForSetUp = false;
    Microsoft.Maps.Events.removeHandler(this.checkMission);
  }

  clearMission() {
    this.location_data = [];
    this.pin_data = [];
    this.list_mission = [];
    this.check_mission = 0;
    this.string_mission = "";
    this.count_mission = 0;
    this.locations = [];
    this.removePushpin();
    this.map.entities.removeAt(0);
    this.map.entities.push(this.current_pin);
    this.locations.push(this.current_loc);
    this.stompClient.send("/app/clearmission", {}, JSON.stringify(this.droneSelected.port));
  }

  removePushpin() {
    for (var i = this.map.entities.getLength() - 1; i >= 1; i--) {
      var pushpin = this.map.entities.get(i);
      if (
        pushpin instanceof Microsoft.Maps.Pushpin ||
        pushpin instanceof Microsoft.Maps.Polyline
      ) {
        this.map.entities.removeAt(i);
      }
    }

  }

  id;
  isFollowing: boolean = true;
  

  follow() {
    this.isFollowing = true;
    this.id = setInterval(() => {
      this.stompClient.send("/app/send", {}, JSON.stringify(this.droneSelected.port));
    }, 4000);
  }

  unfollow() {
    this.isFollowing = false;
    clearInterval(this.id);
  }

  sendMission() {
    this.stopClick();
    this.sendClear();
    this.latPoint = ''
    this.longPoint = '';
    this.isCreateMissionByType = false;
    this.lastLocation = {};
    const _this = this;
    if (this.list_mission.length != 0) {
      if (this.altitudeSetting && this.speed) {
        let dataAltAndSpeed = {
          strAltsp: `${this.altitudeSetting},${this.speed}`,
          strPort: this.droneSelected.port,
        };
        this.stompClient.send(
          "/app/uploadaltsp",
          {},
          JSON.stringify(dataAltAndSpeed)
        );
      }
      this.list_mission.forEach(function (item, index, array) {
        if (index != 0) {
          _this.uploadMission(item);
        }
      });
    } else {
      this.showMessage("Error", "Please set up a misson.");
    }
  }

  sendClear() {
    this.battery = 100;
    this.stompClient.send("/app/cleardata", {}, JSON.stringify(this.droneSelected.port));
    this.location_data = [];
    this.pin_data = [];
    this.removePushpin();
    this.map.entities.push(this.current_pin);
    const _this = this;
    this.list_mission.forEach(function (item, index, array) {
      if (index != 0) {
        var pins = new Microsoft.Maps.Pushpin(item, {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"><circle cx="8" cy="8" r="5" stroke="red" stroke-width="4" fill="yellow" /></svg>',
          anchor: new Microsoft.Maps.Point(8, 8),
          title: "" + index,
        });
        _this.map.entities.push(pins);
      }
    });
    var line = new Microsoft.Maps.Polyline(this.list_mission, {
      strokeColor: "yellow",
    });
    this.map.entities.push(line);
    this.check_mission = 0;
  }

  uploadMission(loca) {
    this.string_mission = this.string_mission + loca.longitude + "," + loca.latitude + "\n";
    console.log(this.string_mission)
    this.check_mission++;
    if (this.check_mission == this.count_mission) {
      var stringMission = {
        strMission: this.string_mission,
        strPort: this.droneSelected.port,
      };
      console.log(this.droneSelected.port)
      this.stompClient.send(
        "/app/uploadmission",
        {},
        JSON.stringify(stringMission)
      );
    }
  }

  addNewDrone() {
    const dialogRef = this.dialog.open(DialogAddNewDroneComponent, {});

    dialogRef.afterClosed().subscribe((result) => {});
  }

  viewListDrone(isSelect: boolean) {
    const dialogRef = this.dialog.open(DialogListDroneComponent, {
      data: { isSelect: isSelect },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.droneSelected = result;
      this.webSocket.currentPositionAllDrone[1].status = 'returning';
      console.log('fuckkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
      console.log(this.webSocket.currentPositionAllDrone)
    });
  }

  showMessage(title: string, message: string) {
    const dialogRef = this.dialog.open(DialogMessageComponent, {
      data: { title: title, message: message },
    });
  }

  checkBeforCallAPI(): boolean {
    if (!this.droneSelected) {
      this.showMessage("Error", "Please select Device.");
      return false;
    }
    if (!this.isConnected) {
      this.showMessage("Error", "Please connect to server.");
      return false;
    }
    return true;
  }
}
