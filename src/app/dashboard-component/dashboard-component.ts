import { Component, inject } from '@angular/core';
import { ExpenseService } from '../expense-service';

@Component({
  selector: 'app-dashboard-component',
  imports: [],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {
  expenseService = inject(ExpenseService);
}
