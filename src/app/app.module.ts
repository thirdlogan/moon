import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UpdateListComponent } from './updates/update-list/update-list.component';
import { PictureUpdateComponent } from './updates/picture-update/picture-update.component';
import { VideoUpdateComponent } from './updates/video-update/video-update.component';
import { AudioUpdateComponent } from './updates/audio-update/audio-update.component';
import { FileUpdateComponent } from './updates/file-update/file-update.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdateListComponent,
    PictureUpdateComponent,
    VideoUpdateComponent,
    AudioUpdateComponent,
    FileUpdateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
