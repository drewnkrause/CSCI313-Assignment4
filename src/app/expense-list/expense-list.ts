import { Component, inject, input } from '@angular/core';
import { ExpenseService } from '../expense-service';
import { ExpenseItem } from '../expense-item/expense-item';

@Component({
  selector: 'app-expense-list',
  imports: [ExpenseItem],
  templateUrl: './expense-list.html',
  styleUrl: './expense-list.css',
})
export class ExpenseList {
  expenseService = inject(ExpenseService);
}
