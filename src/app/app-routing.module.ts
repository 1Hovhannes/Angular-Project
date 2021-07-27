import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MyServicesComponent } from './my-services/my-services.component';
import { NewsComponent } from './news/news.component';
import { TrainerComponent } from './trainer/trainer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Services', component: MyServicesComponent },
  { path: 'News', component: NewsComponent },
  { path: 'Trainer', component: TrainerComponent },
  { path: 'Gallery', component: GalleryComponent },
  { path: 'Contact US', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
