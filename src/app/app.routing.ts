import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PracticeComponent } from "./practice/practice.component";
import { HelpComponent } from "./help/help.component";
import { HELP_ROUTES } from "./help/help.routing";

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'practice/:id', component: PracticeComponent},
    {path: 'help', component: HelpComponent, children: HELP_ROUTES},
    {path: '**', redirectTo: '/help/faq'}
]

export const routing = RouterModule.forRoot(APP_ROUTES)