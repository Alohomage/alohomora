import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {DiscussionComponent} from './components/discussion/discussion.component';


const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'discussion', component: DiscussionComponent}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
