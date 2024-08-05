import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Note: 'styleUrl' should be 'styleUrls'
})

export class HeaderComponent {
  selected: "student" | "teacher" | null = null;
  TeacherName: string = '';
  StudentName: string = '';
  date : string= '';
  constructor(private router: Router, private store: StoreService) {}

  ShowInput(type: "student" | "teacher") {
    this.selected = type;
  }
 
  StudentClick(): void {
    this.store.getStudentName(this.StudentName);
    this.router.navigate(['/app-student']);
  }

  TeacherClick(): void {
    this.store.getTeacherName(this.TeacherName);
    this.router.navigate(['/app-teacher']);
  }

  changetitle() {
    (document.getElementById('title')!).innerHTML = "You touched this";
  }
  ngOnInit(): void {
    this.date = new Date().toDateString();
  }
}