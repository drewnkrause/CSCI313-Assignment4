import { Component, inject, signal } from '@angular/core';
import { ExpenseService } from '../expense-service';
import { ExpenseCategory } from '../models/expense';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-expense',
  imports: [FormsModule],
  templateUrl: './add-expense.html',
  styleUrl: './add-expense.css',
})
export class AddExpense {
  expenseService = inject(ExpenseService);

  title: string = '';
  amount: number = 0;
  category: ExpenseCategory = '';

  addExpense() {
    this.expenseService.addExpense(this.title, this.amount, this.category);
    this.title = '';
    this.amount = 0;
    this.category = '';
  }
}
