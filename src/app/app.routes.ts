import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

export const routes: Routes = [
    {
        path : '',
        component : HeaderComponent
    },
    {
        path : 'app-student',
        component : StudentComponent
    }, 
    {
        path : 'app-teacher',
        component : TeacherComponent
    }
];
