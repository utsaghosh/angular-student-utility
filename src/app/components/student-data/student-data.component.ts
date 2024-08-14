import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentData } from '../../models/student-data';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css'],
})
export class StudentDataComponent implements OnInit {
  studentDataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.studentDataForm = this.fb.group(
      {
        fullName: ['', Validators.required],
        phone: [null, [Validators.required, Validators.pattern(/[0-9]{10}/)]],
        email: ['', [Validators.required, Validators.email]],
        address: ['', Validators.required],
        marks: [
          null,
          [Validators.required, Validators.min(0), Validators.max(100)],
        ],
        school: ['', Validators.required],
      },
      { updateOn: 'change' }
    );
  }

  public get form(): { [key: string]: AbstractControl } {
    return this.studentDataForm.controls;
  }

  onReset() {
    this.studentDataForm.reset();
    alert('Form reset');
  }

  onSubmit() {
    if (this.studentDataForm.valid) {
      let studentData: StudentData = this.studentDataForm.value;
      alert('Form submitted');
      this.studentDataForm.reset();
      // sessionStorage.setItem('data', JSON.stringify(studentData));
      this.dataService.setStudentData(studentData);
      this.router.navigate(['/details']);
    }
  }
}
