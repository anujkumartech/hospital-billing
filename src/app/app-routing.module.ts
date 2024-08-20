import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingDashboardComponent } from './billing-dashboard/billing-dashboard.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';

const routes: Routes = [
  { path: 'billing-dashboard', component: BillingDashboardComponent },
  { path: 'patient-details', component: PatientDetailsComponent },
  { path: '', redirectTo: '/billing-dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/billing-dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
