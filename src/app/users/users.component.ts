import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonService } from '../common.service';

declare  var $:any;
@Component({
  selector: 'app-users',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  userForm: any;
  users: any;

  constructor(public fb:FormBuilder,private service:CommonService){
    this.userForm = this.fb.group({
      id:0,
      Name:[""],
      Email:[""],
      Mobile:[""],
      Age:[""],
    })
  }
  ngOnInit(): void { // is is equal to document.ready in jquery or onload function in js
      this.GetAllUsers();
  }
  SubmitForm(){
    // debugger;
    // console.log(this.userForm.value);
    var type = this.userForm.value.id == null ? 'Add' : 'Update';
    //console.log(this.userForm.value);
    this.service.AddUpdateUser(this.userForm.value,type).subscribe(data=>{
      if(type == 'Add')
        alert("Data Added Successfully On Json Server!😊");
      else{
        alert("Data Updated Successfully On Json Server!✌");
      }
      this.userForm.reset();
      this.GetAllUsers();
      //console.log(data);
    })
  }
  GetAllUsers() {
    this.service.GetAllUsers().subscribe(data => {
        // debugger;
        // console.log("users", data);
        this.users = data;
      },
      error => {
        console.error("Error fetching users:", error);
      }
    );
  }
  DeleteUserById(ID:any) {
    this.service.DeleteUserById(ID).subscribe(
      data => {
        alert("User Deleted Successfully!👍");
        this.GetAllUsers();
      },
      error => {
        console.error("Error fetching users:", error);
      }
    );
  }
  GetUserById(ID:any) {
   // debugger;
    alert("Get User Detail Sucessfully!");
    this.service.GetUserById(ID).subscribe(data => {
        // console.log("User Details"+data);
        // alert(data.id);
        // alert(data.ID);
        //  $("#home").addClass('show');
        //  $("#home").addClass('active');
        //  $("#profile").removeClass('show');
        //  $("#profile").removeClass('active');
          this.userForm.patchValue({
            id: data.id,
            Name : data.Name,
            Email : data.Email,
            Mobile : data.Mobile,
            Age : data.Age
          })
        console.log(this.userForm);
      },
      error => {
        console.error("Error fetching users:", error);
      }
    );
  }
}
