import { Component, OnInit } from '@angular/core';
import { StudentData } from '../../models/student-data';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css'],
})
export class ViewDetailsComponent implements OnInit {
  message: String = '';
  inputfield: String = '';
  constructor(private dataService: DataService) {
    // let data = sessionStorage.getItem('data');
    // this.studentDetails = data; // ? JSON.parse(data) : null;
    dataService
      .getStudentData()
      .subscribe((student) => (this.studentDetails = student));
  }
  ngOnInit(): void {
    this.dataService.currentMessage$.subscribe((msg) => (this.message = msg));
  }
  studentDetails: StudentData = {
    fullName: '',
    phone: '',
    email: '',
    address: '',
    marks: 0,
    school: '',
  };

  sendMessage() {
    this.dataService.setMessage(this.inputfield);
  }
}
