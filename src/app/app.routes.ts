import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ResgisterComponent } from './components/resgister/resgister.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },

    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: ResgisterComponent
    },

    { path: 'home', component: HomeComponent },


];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
