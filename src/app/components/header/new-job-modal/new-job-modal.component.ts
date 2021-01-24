import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-job-modal',
  templateUrl: './new-job-modal.component.html',
  styleUrls: ['./new-job-modal.component.css'],
})
export class NewJobModalComponent implements OnInit {
  newJobForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<NewJobModalComponent>,
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.newJobForm = this.formBuilder.group({
      role: ['', Validators.required],
      company: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (!this.newJobForm.valid) {
      return;
    }

    this.dataService.createJob({
      jobRole: this.newJobForm.controls.role.value,
      companyName: this.newJobForm.controls.company.value,
    });

    this.dialogRef.close();
  }
}
