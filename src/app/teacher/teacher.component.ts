import { Component } from '@angular/core';
import { StoreService } from '../store.service';
import database from '../../assets/db.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'] 
})
export class TeacherComponent {
  constructor(private store: StoreService) {}

  TeacherName: string = this.store.TeacherName;
  StudentList = database; 
}
