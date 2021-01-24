import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaterialComponentsModule } from './shared/material-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JobCardComponent } from './components/job-card/job-card.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { HeaderComponent } from './components/header/header.component';
import { ColorService } from './services/color.service';
import { HttpClientModule } from '@angular/common/http';
import { NewJobModalComponent } from './components/header/new-job-modal/new-job-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteJobModalComponent } from './components/job-card/delete-job-modal/delete-job-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    JobCardComponent,
    WishlistComponent,
    HeaderComponent,
    NewJobModalComponent,
    DeleteJobModalComponent,
  ],
  imports: [
    BrowserModule,
    MaterialComponentsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ColorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
