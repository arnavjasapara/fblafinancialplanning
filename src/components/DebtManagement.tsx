import { useState } from 'react';
import { CreditCard, TrendingDown, Calculator, CheckCircle } from 'lucide-react';
import { lorissaDebts } from '../data/lorissaData';
import { calculateDebtPayoff, calculateAggressivePayoff, formatCurrency } from '../utils/calculations';

export default function DebtManagement() {
  const [additionalPayment, setAdditionalPayment] = useState(200);

  const currentStrategy = calculateDebtPayoff(
    lorissaDebts.studentLoan.balance,
    lorissaDebts.studentLoan.interestRate,
    lorissaDebts.studentLoan.monthlyPayment
  );

  const aggressiveStrategy = calculateAggressivePayoff(
    lorissaDebts.studentLoan.balance,
    lorissaDebts.studentLoan.interestRate,
    additionalPayment
  );

  const interestSaved = currentStrategy.totalInterest - aggressiveStrategy.totalInterest;
  const timeSaved = currentStrategy.monthsToPayoff - aggressiveStrategy.monthsToPayoff;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
          <CreditCard className="w-6 h-6 text-emerald-600" />
          <span>Student Loan Details</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-red-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Current Balance</p>
            <p className="text-2xl font-bold text-red-600">
              {formatCurrency(lorissaDebts.studentLoan.balance)}
            </p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Interest Rate</p>
            <p className="text-2xl font-bold text-orange-600">
              {lorissaDebts.studentLoan.interestRate}%
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Monthly Payment</p>
            <p className="text-2xl font-bold text-blue-600">
              {formatCurrency(lorissaDebts.studentLoan.monthlyPayment)}
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Monthly Interest</p>
            <p className="text-2xl font-bold text-purple-600">
              {formatCurrency((lorissaDebts.studentLoan.balance * lorissaDebts.studentLoan.interestRate) / 100 / 12)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Calculator className="w-5 h-5 text-emerald-600" />
          <span>Payoff Strategy Calculator</span>
        </h3>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Monthly Payment: {formatCurrency(additionalPayment)}
          </label>
          <input
            type="range"
            min="0"
            max="1000"
            step="50"
            value={additionalPayment}
            onChange={(e) => setAdditionalPayment(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$0</span>
            <span>$500</span>
            <span>$1,000</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-gray-300 rounded-lg p-5">
            <h4 className="font-semibold text-gray-900 mb-3">Current Strategy</h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500">Monthly Payment</p>
                <p className="text-lg font-bold text-gray-900">
                  {formatCurrency(currentStrategy.monthlyPayment)}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Payoff Time</p>
                <p className="text-lg font-bold text-gray-900">
                  {Math.floor(currentStrategy.monthsToPayoff / 12)} years {currentStrategy.monthsToPayoff % 12} months
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Interest Paid</p>
                <p className="text-lg font-bold text-red-600">
                  {formatCurrency(currentStrategy.totalInterest)}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Amount Paid</p>
                <p className="text-lg font-bold text-gray-900">
                  {formatCurrency(lorissaDebts.studentLoan.balance + currentStrategy.totalInterest)}
                </p>
              </div>
            </div>
          </div>

          <div className="border-2 border-emerald-500 rounded-lg p-5 bg-emerald-50">
            <h4 className="font-semibold text-emerald-900 mb-3">Accelerated Strategy</h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-emerald-700">Monthly Payment</p>
                <p className="text-lg font-bold text-emerald-900">
                  {formatCurrency(aggressiveStrategy.monthlyPayment)}
                </p>
              </div>
              <div>
                <p className="text-xs text-emerald-700">Payoff Time</p>
                <p className="text-lg font-bold text-emerald-900">
                  {Math.floor(aggressiveStrategy.monthsToPayoff / 12)} years {aggressiveStrategy.monthsToPayoff % 12} months
                </p>
              </div>
              <div>
                <p className="text-xs text-emerald-700">Total Interest Paid</p>
                <p className="text-lg font-bold text-emerald-900">
                  {formatCurrency(aggressiveStrategy.totalInterest)}
                </p>
              </div>
              <div>
                <p className="text-xs text-emerald-700">Total Amount Paid</p>
                <p className="text-lg font-bold text-emerald-900">
                  {formatCurrency(lorissaDebts.studentLoan.balance + aggressiveStrategy.totalInterest)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <h4 className="font-semibold text-emerald-900 mb-2 flex items-center space-x-2">
            <TrendingDown className="w-5 h-5" />
            <span>Savings with Accelerated Strategy</span>
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-emerald-700">Interest Saved</p>
              <p className="text-xl font-bold text-emerald-900">{formatCurrency(interestSaved)}</p>
            </div>
            <div>
              <p className="text-sm text-emerald-700">Time Saved</p>
              <p className="text-xl font-bold text-emerald-900">
                {Math.floor(timeSaved / 12)} years {timeSaved % 12} months
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Debt Management Strategies</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1 flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Avalanche Method (Recommended)</span>
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              Focus on paying off debt with the highest interest rate first while making minimum
              payments on others. This saves the most money on interest over time.
            </p>
            <p className="text-xs text-gray-600">
              <strong>For Lorissa:</strong> Since she only has one debt, prioritize making extra
              payments whenever possible to reduce total interest paid.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Snowball Method</h4>
            <p className="text-sm text-gray-700 mb-2">
              Pay off smallest debts first to build momentum and motivation. While it may cost
              slightly more in interest, psychological wins can help maintain consistency.
            </p>
            <p className="text-xs text-gray-600">
              <strong>For Lorissa:</strong> Not applicable as she only has one remaining debt.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Balance Transfer Strategy</h4>
            <p className="text-sm text-gray-700 mb-2">
              Transfer high-interest debt to a lower-interest account, such as a 0% APR credit card
              promotional period.
            </p>
            <p className="text-xs text-gray-600">
              <strong>For Lorissa:</strong> Not recommended. At 4.99%, her student loan rate is
              already relatively low, and student loans offer benefits like deferment options and
              potential forgiveness programs.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Refinancing</h4>
            <p className="text-sm text-gray-700 mb-2">
              Refinance to a lower interest rate to reduce monthly payments or total interest paid.
            </p>
            <p className="text-xs text-gray-600">
              <strong>For Lorissa:</strong> Worth exploring if rates have dropped below 4.99%.
              However, refinancing federal loans into private loans means losing federal protections
              like income-driven repayment and potential forgiveness.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Debt vs. Savings Balance</h4>
            <p className="text-sm text-gray-700 mb-2">
              Balance debt payoff with other financial goals. Having an emergency fund is crucial
              before aggressively paying down low-interest debt.
            </p>
            <p className="text-xs text-gray-600">
              <strong>For Lorissa:</strong> With $53,000 in savings, she has a strong emergency
              fund. She could comfortably allocate $200-400 monthly toward accelerated debt payoff
              without compromising financial security.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Action Plan</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Maintain Emergency Fund</h4>
              <p className="text-sm text-gray-700">
                Keep 3-6 months of expenses ($12,000-$18,000) in savings for emergencies. Lorissa's
                current $53,000 savings exceeds this threshold.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Increase Monthly Payment</h4>
              <p className="text-sm text-gray-700">
                Add $200-300 to the monthly student loan payment. This accelerates payoff without
                straining the budget.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Consider Lump Sum Payment</h4>
              <p className="text-sm text-gray-700">
                With $53,000 in savings, Lorissa could pay off the entire $9,500 loan immediately and
                still have $43,500 remaining. This eliminates interest and frees up cash flow.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <div className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
              4
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Redirect Payments After Payoff</h4>
              <p className="text-sm text-gray-700">
                Once the loan is paid off, redirect the monthly payment amount toward retirement
                contributions or home down payment savings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
