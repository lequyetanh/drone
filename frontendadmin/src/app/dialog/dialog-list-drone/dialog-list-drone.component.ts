import { Component, Inject, OnInit } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Drone } from "src/app/entitys/drone-entity";
import { DroneService } from "src/app/service/drone-service";
import { DialogAddNewDroneComponent } from "../dialog-add-new-drone/dialog-add-new-drone.component";

@Component({
  selector: "app-dialog-list-drone",
  templateUrl: "./dialog-list-drone.component.html",
  styleUrls: ["./dialog-list-drone.component.css"],
})
export class DialogListDroneComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogListDroneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private droneService: DroneService,
    public dialog?: MatDialog
  ) {}

  isSelectDrone: boolean;
  listDrone:any = [];
  droneSelected: Drone;
  listDroneSelected:any = [];
  idListDroneSelected: any = [];

  ngOnInit() {
    this.isSelectDrone = this.data["isSelect"];
    console.log(this.isSelectDrone)
    this.droneService.getAllDroneFree().subscribe(allDroneFree=> {
      if(this.data['status'] == "allDrone"){
        this.droneService.getListDrone().subscribe(allDrone=> {
          // console.log(data)
          this.listDrone = allDrone;
          // console.log(this.listDrone)
        })
      }
      else{
        // console.log(data)
        this.listDrone = allDroneFree;
        // console.log(this.listDrone)
      }
    })
  }

  selectDrone(drone: Drone) {
    this.droneSelected = drone;
  }

  selectListDrone(drone: Drone) {
    this.listDroneSelected.push(drone);
    this.idListDroneSelected.push(drone.id);
  }

  sendDrone() {
    this.dialogRef.close(this.droneSelected);
  }

  sendListDrone() {
    this.dialogRef.close(this.listDroneSelected);
  }


  deleteDrone() {
    if (!this.droneSelected) {
      return;
    }
    this.droneService.deleteDrone(this.droneSelected.id).subscribe(() => {
      this.listDrone = this.listDrone.filter(
        (data) => data.id != this.droneSelected.id
      );
      this.droneSelected = undefined;
    });
  }

  editDrone() {
    if (!this.droneSelected) {
      return;
    }
    const dialogRef = this.dialog.open(DialogAddNewDroneComponent, {
      data: { drone: this.droneSelected },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && this.listDrone.every((data) => data.id != result.id)) {
        this.listDrone.push(result);
      }
    });
  }
}
