import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Job } from 'src/app/models/job.model';
import { DataService } from 'src/app/services/data.service';
import { NewJobModalComponent } from './new-job-modal/new-job-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  jobs$: Observable<Job[]>;

  constructor(private dataService: DataService, public modal: MatDialog) {}

  ngOnInit(): void {
    this.jobs$ = this.dataService.getJobs();
  }

  addJob(): void {
    const modalConfig: MatDialogConfig = {
      width: 'auto',
    };

    const modalRef = this.modal.open(NewJobModalComponent, modalConfig);
  }
}
