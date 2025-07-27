import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Main } from './main/main';
import { About } from './about/about';
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';
import { Notfound } from './notfound/notfound';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Main,Footer,About,Portfolio,Contact,Notfound],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstsession');
}





