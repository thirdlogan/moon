import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashModule } from './splash/splash.module';
import { SearchModule } from './search/search.module';
import { ProfileModule } from './profile/profile.module';
import { GalleryModule } from './gallery/gallery.module';
import { BlogModule } from './blog/blog.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SplashModule,
    SearchModule,
    ProfileModule,
    GalleryModule,
    BlogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
