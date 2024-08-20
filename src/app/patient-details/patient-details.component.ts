import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent {
  patient = {
    name: 'John Doe',
    ssn: 'xxx-xx-1234',
    joinedDate: '01/01/1990',
    totalDue: '$1000',
    dueBills: [
      {
        serviceDate: '01/08/2024',
        reason: 'Fever and Headache',
        drugsPrescribed: ['ABC', 'CDE'],
        billAmount: '$200',
        serviceName: 'Office Visit DR ABC'
      },
      {
        serviceDate: '01/07/2024',
        reason: 'Routine Checkup',
        drugsPrescribed: [],
        billAmount: '$300',
        serviceName: 'Blood Work'
      },
      {
        serviceDate: '12/05/2024',
        reason: 'Tooth Pain',
        drugsPrescribed: ['XYZ', 'PQR'],
        billAmount: '$200',
        serviceName: 'Dental Procedure'
      }
    ]
  };

  selectedBill: any = null;

  onSelectBill(bill: any) {
    this.selectedBill = bill;
  }
}
