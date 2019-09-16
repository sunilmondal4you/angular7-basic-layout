import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
  { path: '',         redirectTo:'./home/home.component', pathMatch: 'full' },
  { path: 'home',     component: HomeComponent,      pathMatch: 'full' },
  { path: 'about',    component: AboutComponent,     pathMatch: 'full' },
  { path: 'contactus',component: ContactusComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
