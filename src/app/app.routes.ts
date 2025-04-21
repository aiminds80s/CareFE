import { Routes } from '@angular/router';
import { HomeComponent } from './business/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NotfoundComponent } from './common/notfound/notfound.component';
import { RecordsComponent } from './business/records/records.component';
import { ReportsComponent } from './business/reports/reports.component';
import { MaintenanceComponent } from './business/maintenance/maintenance.component';
import { HelpComponent } from './business/help/help.component';
import { SearchComponent } from './business/search/search.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'records', component: RecordsComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'maintenance', component: MaintenanceComponent },
    { path: 'help', component: HelpComponent },
    { path: 'search', component: SearchComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotfoundComponent }
];
