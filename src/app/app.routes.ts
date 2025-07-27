import { Routes } from '@angular/router';
import { Main } from './main/main';
import { About } from './about/about';
import { Portfolio } from './portfolio/portfolio';
import { Contact } from './contact/contact';
import { Notfound } from './notfound/notfound';


export const routes: Routes = [
    {path:"", component: Main},
    {path:"about", component: About},
    {path:"portfolio", component: Portfolio},
    {path:"contact", component: Contact},
    {path:"**", component: Notfound},

    
    

];
