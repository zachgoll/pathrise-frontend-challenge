import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-delete-job-modal',
  templateUrl: './delete-job-modal.component.html',
  styleUrls: ['./delete-job-modal.component.css'],
})
export class DeleteJobModalComponent implements OnInit {
  jobId: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    public dialogRef: MatDialogRef<DeleteJobModalComponent>,
    private dataService: DataService
  ) {
    this.jobId = data.jobId;
  }

  ngOnInit(): void {}

  cancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dataService.deleteJob(this.jobId);
    this.dialogRef.close();
  }
}
