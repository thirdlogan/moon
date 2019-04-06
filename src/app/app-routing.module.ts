import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashModule } from './splash/splash.module';
import { SplashScreenComponent } from './splash/splash-screen/splash-screen.component';
import { PictureGalleryComponent } from './gallery/picture-gallery/picture-gallery.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SplashScreenComponent,
  },
  {
    path: 'gallery',
    pathMatch: 'full',
    component: PictureGalleryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
