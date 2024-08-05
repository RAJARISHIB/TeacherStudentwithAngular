import { Component } from '@angular/core';
import { StoreService } from '../store.service';
import database from '../../assets/db.json'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})

export class StudentComponent {
  constructor(private store : StoreService){}
  Studentname : string = this.store.StudentName
  studentdata = database
}