import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  // redirectTo can ba a function that returns a string
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent ,title: 'Home'},
  {path: 'about' , component: AboutComponent ,title: 'About'},
  {path: 'portfolio', component: PortfolioComponent ,title: 'Portfolio'},
  {path: 'contact' , component: ContactComponent, title: 'Contact'},
  {path: '**', component: NotfoundComponent, title: 'Not Found'}
];
