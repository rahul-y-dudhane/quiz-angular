import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  
    userName: string ;

  constructor(private userService: UserService,public dialog: MatDialog,private router: Router) {
    userService.getAllUsers().subscribe((data) => {
      
    })
   }

  ngOnInit() {
  }

  openDialog(section: string): void {
    const dialogRef = this.dialog.open(UserDetailsDialogComponent, {
       width: '600px',
      data: {userName : this.userName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.router.navigate([`/test/${section}/${result}`]);
      }
      
    }); 
  }

}


@Component({
  selector: 'app-user-details-dialog',
  templateUrl: './user-details-dialog.component.html'
})
export class UserDetailsDialogComponent{

  constructor( public dialogRef: MatDialogRef<UserDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data : {userName:string}) {
      // console.log(data);
      
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
