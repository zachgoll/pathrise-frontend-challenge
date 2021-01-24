import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialogModule,
  MatDialogRef,
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogConfig,
} from '@angular/material/dialog';

// re-export for services access
export { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogConfig };

@NgModule({
  imports: [
    FlexLayoutModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
  ],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
  ],
})
export class MaterialComponentsModule {}
