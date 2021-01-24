import { Injectable } from '@angular/core';
import { Job } from '../models/job.model';
import { v4 as uuidv4 } from 'uuid';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const startingJobList: Job[] = [
  {
    id: uuidv4(),
    jobRole: 'Web Developer',
    companyName: 'Pathrise',
    postedDate: Date.now(),
  },
  {
    id: uuidv4(),
    jobRole: 'Web Developer',
    companyName: 'Airbnb',
    postedDate: Date.now() - 7200000,
  },
  {
    id: uuidv4(),
    jobRole: 'Software Engineer',
    companyName: 'Google',
    postedDate: Date.now() - 18100000,
  },
  {
    id: uuidv4(),
    jobRole: 'Web Developer',
    companyName: 'Facebook',
    postedDate: Date.now() - 318100000,
  },
];

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private jobs$: BehaviorSubject<Job[]>;

  constructor() {
    this.getJobsFromLocalStorage();
  }

  // Get the current value of the Behavior Subject
  protected get jobs(): Job[] {
    return this.jobs$.getValue();
  }

  // If the user has already visited the app, use whatever is in localStorage
  // If this is the first time a user visits, pre-load with some dummy data
  private getJobsFromLocalStorage(): void {
    const jobs = localStorage.getItem('jobs');

    if (jobs) {
      this.jobs$ = new BehaviorSubject<Job[]>(JSON.parse(jobs));
    } else {
      this.jobs$ = new BehaviorSubject<Job[]>(startingJobList);
      localStorage.setItem('jobs', JSON.stringify(startingJobList));
    }
  }

  // Get all jobs sorted by posting date ascending
  public getJobs(): Observable<Job[]> {
    return this.jobs$.pipe(
      map((jobs) => {
        return jobs.sort((job1, job2) => {
          return job2.postedDate - job1.postedDate;
        });
      })
    );
  }

  public createJob(job: Job): void {
    const newJob = {
      id: uuidv4(),
      postedDate: Date.now(),
      ...job,
    };

    this.jobs.push(newJob);
    localStorage.setItem('jobs', JSON.stringify(this.jobs));
    this.jobs$.next(this.jobs);
  }

  public deleteJob(jobId: string): void {
    const jobToRemove = this.jobs.findIndex((job) => job.id === jobId);
    this.jobs.splice(jobToRemove, 1);
    localStorage.setItem('jobs', JSON.stringify(this.jobs));
    this.jobs$.next(this.jobs);
  }
}
