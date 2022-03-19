import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-dialog-message",
  templateUrl: "./dialog-message.component.html",
  styleUrls: ["./dialog-message.component.css"],
})
export class DialogMessageComponent implements OnInit {

  title: string;
  message: string;

  constructor(
    public dialogRef: MatDialogRef<DialogMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.title = this.data['title'];
    this.message = this.data['message'];
  }
}
