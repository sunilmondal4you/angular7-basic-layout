import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';

const routes: Routes = [
  { path: '',         component: HomeComponent, pathMatch: 'full' },
  { path: 'home',     component: HomeComponent,      pathMatch: 'full' },
  { path: 'about',    component: AboutComponent,     pathMatch: 'full' },
  { path: 'contactus',component: ContactusComponent, pathMatch: 'full' },
  { path: '**',       component: HomeComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
