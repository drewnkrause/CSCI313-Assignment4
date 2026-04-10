export interface Expense {
  id: string;
  title: string;
  number: string;
  category: ExpenseCategory;
}

export type ExpenseCategory =
  | 'Work'
  | 'Personal'
  | 'Grocery'
  | 'Utilities'
  | 'Shopping'
  | 'Travel'
  | 'Food';
