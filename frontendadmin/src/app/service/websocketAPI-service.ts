import * as Stomp from 'stompjs';
import * as SockJS from "sockjs-client";
import { DroneManagerComponent } from "../drone-manager/drone-manager.component";
import { OnInit } from "@angular/core";

export class WebSocketAPI {
  webSocketEndPoint: string = "http://localhost:8080/chat-websocket";
  topic: string = "/chat/sendMessage";
  stompClient: any;
  appComponent: DroneManagerComponent;
  id;
  currentPositionAllDrone = [
    {
      id: 1,
      drone_name: "Drone 1",
      current_position: [],
      initial_position: ["21.006554", "105.842895"],
      status: 'free',
      port: "udp://:14540",
      start: false,
    },
    {
      id: 2,
      drone_name: "Drone 2",
      current_position: [],
      initial_position: ["21.006554", "105.842895"],
      status: 'free',
      port: "udp://:14541",
      start: false,
    },
    {
      id: 3,
      drone_name: "Drone 3",
      current_position: [],
      initial_position: ["21.006554", "105.842895"],
      status: 'free',
      port: "udp://:14542",
      start: false,
    },
  ];
  constructor() {
    setTimeout(() => {
      this._connect()
    }, 1000);

    setInterval(() => {
      for(let i=0; i<this.currentPositionAllDrone.length; i++){
        this.stompClient.send("/app/send", {}, JSON.stringify(this.currentPositionAllDrone[i].port));
      }
    }, 4000);

  }


  _connect() {
    const _this = this;
    let socket = new SockJS(_this.webSocketEndPoint);
    _this.stompClient = Stomp.over(socket);
    _this.stompClient.connect(
      {},
      function (frame) {

        _this.stompClient.subscribe("/chat/location", function (data) {
          _this.updateCurrentLocation(JSON.parse(data.body))
        });

        _this.stompClient.subscribe("/chat/sendMessage", function (data) {
          _this.updateCurrentLocation(JSON.parse(data.body));
        });
        _this.stompClient.reconnect_delay = 2000;
      },
      this.errorCallBack
    );
  }

  updateCurrentLocation(data){
    console.log(data.port)
    for(let i=0; i<this.currentPositionAllDrone.length; i++){
      if(this.currentPositionAllDrone[i].port == data.port){
        this.currentPositionAllDrone[i].current_position = [data.lat, data.lon];
        this.currentPositionAllDrone[i].start = true;
      }
    }
    console.log(this.currentPositionAllDrone)
  }

  _disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    console.log("Disconnected");
  }

  errorCallBack(error) {
    console.log("errorCallBack -> " + error);
    setTimeout(() => {
      this._connect();
    }, 5000);
  }

  /**
   * Send message to sever via web socket
   * @param {*} message
   */
  _send(message) {
    console.log("calling logout api via web socket");
    this.stompClient.send("/app/send", {}, JSON.stringify(message));
  }

  onMessageReceived(message) {
    console.log("Message Recieved from Server :: " + message);
  }


}
