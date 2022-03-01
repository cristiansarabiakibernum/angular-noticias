import { RouterModule, Routes } from "@angular/router";
import { NoticiaComponent } from "./components/noticia/noticia.component";


const APP_ROUTES: Routes = [
    {path: 'noticia/:id', component: NoticiaComponent},
    {path: '**', pathMatch: 'full',redirectTo: ''},
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);