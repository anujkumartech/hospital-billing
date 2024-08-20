import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-dashboard',
  templateUrl: './billing-dashboard.component.html',
  styleUrl: './billing-dashboard.component.scss'
})
export class BillingDashboardComponent {
  tableHeaders = ['ID', 'Patient Name', 'Pending Amount', 'Actions']; 
  tableData = [
    { id: 1, patientName: 'John Doe', pendingAmount: '$1000' },
    { id: 2, patientName: 'Jane Smith', pendingAmount: '$1500' },
    { id: 3, patientName: 'Robert Brown', pendingAmount: '$2000' },
    { id: 4, patientName: 'Emily Davis', pendingAmount: '$2500' }
  ];

  constructor(private router: Router) {}

  onButtonClick(row: any) {
    this.router.navigate(['/patient-details'], { queryParams: { id: row.id} })
  }
}
