import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Profile Editor';
  subtitle:string = 'User Information';
  formUser:User[]= [{name:'Abha',age:30,favoriteColor:'pink'}];

 displayEdit:boolean=false;

 toggleEdit():void{
  this.displayEdit= !this.displayEdit;
 }

 saveChanges(data: NgForm)
 {
  this.formUser[0].name= data.controls["name"].value;
   this.formUser[0].favoriteColor=data.controls["favoritecolor"].value;
   this.formUser[0].age=data.controls["age"].value;

 }
}
