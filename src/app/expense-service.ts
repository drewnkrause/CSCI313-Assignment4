import { computed, Injectable, signal } from '@angular/core';
import { Expense, ExpenseCategory } from './models/expense';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  expenses = signal<Expense[]>([]);

  categories = signal<string[]>([
    'Work',
    'Personal',
    'Grocery',
    'Utilities',
    'Shopping',
    'Travel',
    'Food',
  ]);

  totalExpenses = computed<number>(() =>
    this.expenses().reduce((accumulator, current) => accumulator + current.amount, 0),
  );

  transactionCount = computed<number>(() => this.expenses().length);

  highestExpense = computed<number>(() =>
    this.transactionCount() > 0 ? Math.max(...this.expenses().map((value) => value.amount)) : 0,
  );

  averageExpense = computed<number>(() =>
    this.transactionCount() > 0 ? this.totalExpenses() / this.transactionCount() : 0,
  );

  addExpense(title: string, amount: number, category: ExpenseCategory) {
    this.expenses.update((current) => [
      ...current,
      {
        id: String(Date.now()),
        title: title,
        amount: amount,
        category: category,
      },
    ]);
  }

  removeExpense(id: string) {
    this.expenses.update((current) => current.filter((value) => value.id !== id));
  }

  getExpenseById(id: string) {
    return this.expenses().find((value) => value.id === id);
  }

  expenseFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
}
