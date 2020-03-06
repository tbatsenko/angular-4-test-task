import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
// import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { EditPhotoCardComponent } from './edit-photo-card/edit-photo-card.component'
import { ProjectInfoComponent } from './project-info/project-info.component'

import { DragDirective } from './edit-photo-card/dragDrop.directive'

import { ImageCropperModule } from 'ngx-image-cropper'
import { WebcamModule } from 'ngx-webcam'

import { MatDialogModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { TakePhotoDialogComponent } from './edit-photo-card/take-photo-dialog/take-photo-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditPhotoCardComponent,
    ProjectInfoComponent,
    DragDirective,
    TakePhotoDialogComponent,
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    ImageCropperModule,

    MatDialogModule,
    BrowserAnimationsModule,
  ],
  exports: [ImageCropperModule],
  providers: [],
  bootstrap: [AppComponent],

  entryComponents: [TakePhotoDialogComponent],
})
export class AppModule {}
