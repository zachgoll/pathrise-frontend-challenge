import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { interval } from 'rxjs';
import { Color } from 'src/app/models/color.model';
import { Job } from 'src/app/models/job.model';
import { ColorService } from 'src/app/services/color.service';
import { DeleteJobModalComponent } from './delete-job-modal/delete-job-modal.component';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css'],
})
export class JobCardComponent implements OnInit {
  @Input() job: Job;

  color: Color;
  displayTime: string;
  logoUrl: string;
  isHovering: boolean;

  constructor(private colorService: ColorService, public modal: MatDialog) {}

  ngOnInit(): void {
    this.color = this.colorService.getColors();
    this.displayTime = this.formatDateString(this.job.postedDate);

    this.logoUrl = `https://logo.clearbit.com/${this.job.companyName}.com`;

    // Pseudo cron-job to update posted times
    interval(60000).subscribe(() => {
      this.displayTime = this.formatDateString(this.job.postedDate);
    });
  }

  private formatDateString(timestamp: number): string {
    const now = Date.now();
    const diff = now - timestamp;

    const seconds = diff / 1000;
    const minutes = diff / 60000;
    const hours = diff / 3600000;
    const days = diff / 86400000;

    // Display differently based on time.  Always round up in case it was posted 0 minutes ago
    if (seconds < 60) {
      return 'posted just now';
    } else if (minutes < 60) {
      return `posted ${Math.ceil(minutes)} minutes ago`;
    } else if (hours < 24) {
      return `posted ${Math.ceil(hours)} hours ago`;
    } else {
      return `posted ${Math.ceil(days)} days ago`;
    }
  }

  // If the Clearbit api doesn't find a logo, put a placeholder in
  public handleLogoError(err): void {
    this.logoUrl = 'https://via.placeholder.com/150';
  }

  public openModal(jobId: string): void {
    const modalConfig: MatDialogConfig = {
      width: 'auto',
      data: { jobId },
    };

    const modalRef = this.modal.open(DeleteJobModalComponent, modalConfig);
  }
}
