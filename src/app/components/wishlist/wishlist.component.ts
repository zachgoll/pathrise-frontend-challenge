import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/models/job.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  jobs: Job[];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }

  deleteJob(jobId: string): void {
    this.dataService.deleteJob(jobId);
  }
}
