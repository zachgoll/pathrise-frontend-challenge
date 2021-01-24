import { Job } from './job.model';

export interface Wishlist {
  jobs: Job[];
  lastUpdate: number;
}
