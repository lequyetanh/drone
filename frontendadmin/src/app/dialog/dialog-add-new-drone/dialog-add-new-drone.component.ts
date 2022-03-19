import { Component, OnInit, Inject } from "@angular/core";

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Constant } from "src/app/config/constants";
import { Drone } from "src/app/entitys/drone-entity";
import { DroneService } from "src/app/service/drone-service";
import { DialogMessageComponent } from "../dialog-message/dialog-message.component";

@Component({
  selector: "app-dialog-add-new-drone",
  templateUrl: "./dialog-add-new-drone.component.html",
  styleUrls: ["./dialog-add-new-drone.component.css"],
})
export class DialogAddNewDroneComponent implements OnInit {
  drone: Drone;

  constructor(
    public dialogRef: MatDialogRef<DialogAddNewDroneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private droneService: DroneService,
    public dialog?: MatDialog
  ) {}

  ngOnInit() {
    if (this.data) {
      this.drone = this.data.drone;
    } else {
      this.drone = new Drone();
    }
  }

  saveDrone() {
    // if (!this.validateEntity()) {
    //   return;
    // }
    this.droneService.createDrone(this.drone).subscribe((data) => {
      this.dialogRef.close(data);
    });
  }

  validateEntity(): boolean {
    if (
      !this.drone.droneName ||
      this.drone.droneName.length == 0 ||
      this.drone.droneName.length > Constant.MAX_LENGTH_DRONE_NAME
    ) {
      this.dialog.open(DialogMessageComponent, {
        data: {
          title: "Error",
          message: "Length of name must be contain 0 - 16 character.",
        },
      });
      return false;
    } else if (!this.drone.manufacturerId) {
      const dialogRef = this.dialog.open(DialogMessageComponent, {
        data: {
          title: "Error",
          message: "Please select manufacturer.",
        },
      });
      return false;
    } else if (
      !this.drone.serialNo ||
      this.drone.serialNo.length == 0 ||
      this.drone.serialNo.length > Constant.MAX_LENGTH_DRONE_SERIAL_NO
    ) {
      this.dialog.open(DialogMessageComponent, {
        data: {
          title: "Error",
          message: "Length of serial no must be contain 0 - 9 character.",
        },
      });
      return false;
    } else if (
      !this.drone.maxWeightPackageDelivery ||
      isNaN(this.drone.maxWeightPackageDelivery)
    ) {
      const dialogRef = this.dialog.open(DialogMessageComponent, {
        data: {
          title: "Error",
          message: "Please enter max weight package delivery.",
        },
      });
      return false;
    } else if (!this.drone.maxSpeed || isNaN(this.drone.maxSpeed)) {
      const dialogRef = this.dialog.open(DialogMessageComponent, {
        data: {
          title: "Error",
          message: "Please enter max speed.",
        },
      });
      return false;
    } else if (!this.drone.maxHeight || isNaN(this.drone.maxHeight)) {
      const dialogRef = this.dialog.open(DialogMessageComponent, {
        data: {
          title: "Error",
          message: "Please enter max height.",
        },
      });
      return false;
    }
    return true;
  }
}
