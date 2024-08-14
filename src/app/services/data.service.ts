import { Injectable } from '@angular/core';
import { StudentData } from '../models/student-data';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private messageSource = new BehaviorSubject<String>('first');
  currentMessage$ = this.messageSource.asObservable();

  private studentData: StudentData = {
    fullName: '',
    phone: '',
    email: '',
    address: '',
    marks: 0,
    school: '',
  };

  private API_URL = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getStudentData(): Observable<StudentData> {
    // return this.studentData;
    return this.http
      .get<any>(this.API_URL + '/data')
      .pipe(map((response) => response.data));
  }

  setStudentData(formData: StudentData): void {
    this.studentData = formData;
    console.log(this.studentData);
  }

  setMessage(newMessage: String) {
    this.messageSource.next(newMessage);
  }
}
