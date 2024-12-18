import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
//import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UsersComponent,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CRUD';
}
