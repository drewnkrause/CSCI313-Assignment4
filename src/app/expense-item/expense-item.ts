import { Component, inject, input } from '@angular/core';
import { Expense } from '../models/expense';
import { ExpenseService } from '../expense-service';

@Component({
  selector: 'app-expense-item',
  imports: [],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
})
export class ExpenseItem {
  expenseService = inject(ExpenseService);
  expense = input.required<Expense>();
}
