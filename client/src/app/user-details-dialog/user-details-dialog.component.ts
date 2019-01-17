import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-user-details-dialog',
  templateUrl: './user-details-dialog.component.html',
  styleUrls: ['./user-details-dialog.component.scss']
})
export class UserDetailsDialogComponent{

  constructor( public dialogRef: MatDialogRef<UserDetailsDialogComponent>,@Inject(MAT_DIALOG_DATA) public data : {userName:string}) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
