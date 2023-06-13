import { Routes } from "@angular/router";
import { FaqComponent } from "./faq/faq.component";
import { ContactsComponent } from "./contacts/contacts.component";

export const HELP_ROUTES: Routes  = [
    { path: 'faq', component: FaqComponent},
    { path: 'contacts', component: ContactsComponent},
]