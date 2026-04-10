import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard-component/dashboard-component';
import { AddExpense } from './add-expense/add-expense';
import { ExpenseList } from './expense-list/expense-list';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'add',
    component: AddExpense,
  },
  {
    path: 'expenses',
    component: ExpenseList,
  },
];
