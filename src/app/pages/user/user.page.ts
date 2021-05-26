import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/classes/user';
import { TimeTracker } from 'src/app/decorators/timeTracker.decorator';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})

@TimeTracker("user")
export class UserPage implements OnInit {

  // userForm: FormGroup;
  users: Array<User> = new Array<User>();
  storageStatus: any ;

  userForm = this.formBuilder.group({
    id: [null],
    username: [''],
    email: [''],
    password: [''],
  })

  constructor(
    private userService: UserService,
    public formBuilder: FormBuilder,
    private toast: ToastController,) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  ionViewWillEnter(){
    this.ngOnInit();
  }

  saveUser() {
    this.userService.addUser(this.userForm.value).subscribe(async data => {
      console.log(data);
      let toast = await this.toast.create({
        message: 'Person created',
        duration: 2500
      });
      toast.present();
      this.userService.getAllUsers().subscribe(data => {
        console.log(data);
        this.users = data;
      });
    })
  }

  deleteUser(id: any) {
    this.userService.deleteUser(id).subscribe(async data => {
      console.log(data);
      let toast = await this.toast.create({
        message: 'Person deleted',
        duration: 2500
      });
      toast.present();
      this.userService.getAllUsers().subscribe(data => {
        console.log(data);
        this.users = data;
      });
    })
  }

}
