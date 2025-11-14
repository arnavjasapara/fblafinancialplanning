export const lorissaProfile = {
  name: "Lorissa",
  age: "Mid-thirties",
  occupation: "Mid-level management (12 years experience)",
  newSalary: 85000,
  location: "Louisville, Kentucky",
  status: "Single, no children",
  workArrangement: "Remote",
};

export const lorissaAssets = {
  checking: 3400,
  savings: 53000,
  vehicle: {
    year: 2015,
    make: "Kia",
    model: "Forte Sedan LX",
    mileage: 135000,
    condition: "Good shape, paid off",
  },
};

export const lorissaDebts = {
  studentLoan: {
    balance: 9500,
    interestRate: 4.99,
    monthlyPayment: 79,
  },
};

export const lorissaIncome = {
  grossPay: 7083.33,
  exemptions: 1154.17,
  taxableIncome: 5929.17,
  federalIncomeTax: 913.38,
  kentuckyStateTax: 343.63,
  socialSecurity: 439.17,
  medicareTax: 102.71,
  netPay: 0,
};

lorissaIncome.netPay =
  lorissaIncome.grossPay -
  lorissaIncome.federalIncomeTax -
  lorissaIncome.kentuckyStateTax -
  lorissaIncome.socialSecurity -
  lorissaIncome.medicareTax;

export const lorissaExpenses = [
  { expense: "Rent", amount: 1300.00 },
  { expense: "Rideshare", amount: 22.92 },
  { expense: "Dinner", amount: 17.65 },
  { expense: "Cable/Internet", amount: 85.23 },
  { expense: "Groceries", amount: 36.66 },
  { expense: "Concert", amount: 117.00 },
  { expense: "Nails", amount: 77.00 },
  { expense: "Groceries", amount: 15.85 },
  { expense: "Charity", amount: 82.20 },
  { expense: "Big Box Retail", amount: 33.03 },
  { expense: "Gas", amount: 27.33 },
  { expense: "Entertainment", amount: 17.06 },
  { expense: "Dinner", amount: 19.74 },
  { expense: "Big Box Retail", amount: 11.55 },
  { expense: "Online Shopping", amount: 16.31 },
  { expense: "Groceries", amount: 17.41 },
  { expense: "Dinner", amount: 9.20 },
  { expense: "Charity", amount: 82.20 },
  { expense: "Lunch", amount: 12.00 },
  { expense: "Dinner", amount: 37.80 },
  { expense: "Flight", amount: 358.98 },
  { expense: "Dinner", amount: 115.62 },
  { expense: "Coffee", amount: 9.06 },
  { expense: "Counseling", amount: 120.00 },
  { expense: "Gifts", amount: 78.43 },
  { expense: "Dinner", amount: 28.41 },
  { expense: "Coffee", amount: 6.09 },
  { expense: "Groceries", amount: 14.48 },
  { expense: "Charity", amount: 82.20 },
  { expense: "Groceries", amount: 127.52 },
  { expense: "Coffee", amount: 14.90 },
  { expense: "Movie", amount: 17.91 },
  { expense: "Airport Parking", amount: 48.88 },
  { expense: "Cell Phone", amount: 140.92 },
  { expense: "Charity", amount: 82.20 },
  { expense: "Coffee", amount: 14.42 },
  { expense: "Dinner", amount: 48.72 },
  { expense: "Basketball Game", amount: 35.00 },
  { expense: "Big Box Retail", amount: 25.64 },
  { expense: "Dinner", amount: 36.33 },
  { expense: "Dinner", amount: 59.57 },
  { expense: "Groceries", amount: 25.82 },
  { expense: "Electric", amount: 120.09 },
  { expense: "Auto Insurance", amount: 154.95 },
  { expense: "Groceries", amount: 233.00 },
  { expense: "Hotel", amount: 577.23 },
];

export const lorissaRetirement = [
  {
    employer: "Ohio employer (2011-2014)",
    type: "Tax-deferred 401(k)",
    contributions: 6700.72,
    marketValue: 6810.12,
  },
  {
    employer: "Indiana employer (2015-2019)",
    type: "Post-tax Roth 401(k)",
    contributions: 16076.40,
    marketValue: 27950.00,
  },
  {
    employer: "Current Kentucky employer (4 years)",
    type: "Tax-deferred 401(k)",
    contributions: 18162.99,
    investmentGrowth: 3894.34,
  },
];

export const lorissaGoals = [
  "Purchase a 2-bedroom loft ($400,000, $150/month HOA, 7.1% interest, 30-year fixed)",
  "Continue traveling at least twice a year (international every other year)",
  "Pay off student loans ($9,500)",
  "Retire by age 65",
];

export const lorissaHousingGoal = {
  purchasePrice: 400000,
  monthlyHOA: 150,
  interestRate: 7.1,
  term: 30,
  currentRent: 1300,
  leaseEndsIn: 6,
};

export const lorissaInsurance = {
  hasHealth: true,
  hasDental: true,
  hasVision: true,
  hasLife: false,
  lifeInsuranceAvailableAtWork: false,
};

export const lorissaQuestions = [
  "How important is budgeting/looking at her expenses? How can budgeting help her long term goals?",
  "What strategies should she use to pay off her student loans?",
  "Should she focus on investments vs retirement? Is it possible to focus on both?",
  "Overall, what would you advise Lorissa to do to meet her goals?",
  "What recommendations or alternatives would you suggest to Lorissa?",
  "What other professionals, if any, should Lorissa consult and why?",
];
