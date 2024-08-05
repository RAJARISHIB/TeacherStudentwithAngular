import { Injectable } from '@angular/core';
import { Http2SecureServer, Http2ServerRequest } from 'node:http2';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  TeacherName : string = ''
  StudentName : string = ''

  constructor() {}


  getTeacherName(Name : string){
    this.TeacherName = Name
  }
  
  getStudentName(Name : string){
    this.StudentName = Name
  }

}