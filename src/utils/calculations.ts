import { BudgetCategory, DebtPayoffStrategy, MortgageCalculation } from '../types/financial';

export const categorizeBudget = (expenses: { expense: string; amount: number }[]): BudgetCategory[] => {
  const categoryMap: { [key: string]: number } = {};

  expenses.forEach(({ expense, amount }) => {
    const category = categorizeExpense(expense);
    categoryMap[category] = (categoryMap[category] || 0) + amount;
  });

  const total = Object.values(categoryMap).reduce((sum, amt) => sum + amt, 0);

  return Object.entries(categoryMap)
    .map(([category, amount]) => ({
      category,
      amount,
      percentage: (amount / total) * 100,
    }))
    .sort((a, b) => b.amount - a.amount);
};

const categorizeExpense = (expense: string): string => {
  const expenseLower = expense.toLowerCase();

  if (expenseLower.includes('rent')) return 'Housing';
  if (expenseLower.includes('electric') || expenseLower.includes('cable') || expenseLower.includes('internet')) return 'Utilities';
  if (expenseLower.includes('groceries')) return 'Groceries';
  if (expenseLower.includes('dinner') || expenseLower.includes('lunch') || expenseLower.includes('coffee')) return 'Dining Out';
  if (expenseLower.includes('gas') || expenseLower.includes('rideshare') || expenseLower.includes('auto insurance') || expenseLower.includes('parking')) return 'Transportation';
  if (expenseLower.includes('flight') || expenseLower.includes('hotel')) return 'Travel';
  if (expenseLower.includes('charity')) return 'Charity';
  if (expenseLower.includes('concert') || expenseLower.includes('entertainment') || expenseLower.includes('movie') || expenseLower.includes('basketball')) return 'Entertainment';
  if (expenseLower.includes('nails') || expenseLower.includes('counseling')) return 'Personal Care';
  if (expenseLower.includes('cell phone')) return 'Phone';
  if (expenseLower.includes('gifts')) return 'Gifts';
  if (expenseLower.includes('retail') || expenseLower.includes('shopping')) return 'Shopping';

  return 'Other';
};

export const calculateDebtPayoff = (
  principal: number,
  interestRate: number,
  currentMonthlyPayment: number
): DebtPayoffStrategy => {
  const monthlyRate = interestRate / 100 / 12;
  let balance = principal;
  let totalInterest = 0;
  let months = 0;

  while (balance > 0 && months < 600) {
    const interestCharge = balance * monthlyRate;
    const principalPayment = Math.min(currentMonthlyPayment - interestCharge, balance);
    totalInterest += interestCharge;
    balance -= principalPayment;
    months++;
  }

  return {
    name: 'Current Payment Schedule',
    description: `Paying $${currentMonthlyPayment.toFixed(2)} per month`,
    monthsToPayoff: months,
    totalInterest,
    monthlyPayment: currentMonthlyPayment,
  };
};

export const calculateAggressivePayoff = (
  principal: number,
  interestRate: number,
  additionalPayment: number
): DebtPayoffStrategy => {
  const basePayment = 79;
  const newMonthlyPayment = basePayment + additionalPayment;
  const monthlyRate = interestRate / 100 / 12;
  let balance = principal;
  let totalInterest = 0;
  let months = 0;

  while (balance > 0 && months < 600) {
    const interestCharge = balance * monthlyRate;
    const principalPayment = Math.min(newMonthlyPayment - interestCharge, balance);
    totalInterest += interestCharge;
    balance -= principalPayment;
    months++;
  }

  return {
    name: 'Aggressive Payoff Strategy',
    description: `Paying $${newMonthlyPayment.toFixed(2)} per month (additional $${additionalPayment})`,
    monthsToPayoff: months,
    totalInterest,
    monthlyPayment: newMonthlyPayment,
  };
};

export const calculateMortgage = (
  purchasePrice: number,
  downPaymentPercent: number,
  interestRate: number,
  years: number
): MortgageCalculation => {
  const downPayment = purchasePrice * (downPaymentPercent / 100);
  const loanAmount = purchasePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = years * 12;

  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);

  const totalPayment = monthlyPayment * numPayments;
  const totalInterest = totalPayment - loanAmount;
  const closingCosts = purchasePrice * 0.03;

  return {
    monthlyPayment,
    totalPayment,
    totalInterest,
    downPaymentNeeded: downPayment,
    closingCosts,
    totalUpfront: downPayment + closingCosts,
  };
};

export const calculateRetirementProjection = (
  currentAge: number,
  retirementAge: number,
  currentBalance: number,
  monthlyContribution: number,
  annualReturn: number
): number => {
  const monthlyRate = annualReturn / 12 / 100;
  const months = (retirementAge - currentAge) * 12;
  let balance = currentBalance;

  for (let i = 0; i < months; i++) {
    balance = balance * (1 + monthlyRate) + monthlyContribution;
  }

  return balance;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const formatPercent = (value: number): string => {
  return `${value.toFixed(1)}%`;
};
