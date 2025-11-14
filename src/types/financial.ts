export interface BudgetCategory {
  category: string;
  amount: number;
  percentage: number;
}

export interface DebtPayoffStrategy {
  name: string;
  description: string;
  monthsToPayoff: number;
  totalInterest: number;
  monthlyPayment: number;
}

export interface RetirementProjection {
  age: number;
  balance: number;
  contributions: number;
  growth: number;
}

export interface MortgageCalculation {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  downPaymentNeeded: number;
  closingCosts: number;
  totalUpfront: number;
}
