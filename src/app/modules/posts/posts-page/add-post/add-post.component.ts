import { Post } from "./../../../../shared/models/post";
import { Component, OnInit, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.component.html",
  styleUrls: ["./add-post.component.scss"],
})
export class AddPostComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Post
  ) {}

  ngOnInit() {}

  onCancel() {
    this.dialogRef.close();
  }
}
