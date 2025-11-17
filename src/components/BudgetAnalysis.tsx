import { PieChart, TrendingDown, AlertCircle } from 'lucide-react';
import { lorissaExpenses, lorissaIncome } from '../data/lorissaData';
import { categorizeBudget, formatCurrency, formatPercent } from '../utils/calculations';

export default function BudgetAnalysis() {
  const totalExpenses = lorissaExpenses.reduce((sum, exp) => sum + exp.amount, 0);
  const budgetCategories = categorizeBudget(lorissaExpenses);
  const netIncome = lorissaIncome.netPay;
  const savingsRate = ((netIncome - totalExpenses) / netIncome) * 100;
  const monthlyLeftover = netIncome - totalExpenses;

  const recommendedBudget = {
    housing: netIncome * 0.30,
    utilities: netIncome * 0.05,
    transportation: netIncome * 0.10,
    groceries: netIncome * 0.07,
    dining: netIncome * 0.10,
    entertainment: netIncome * 0.08,
    personal: netIncome * 0.10,
    savingsAcceleration: netIncome * 0.20,
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
          <PieChart className="w-6 h-6 text-emerald-600" />
          <span>Budget Overview</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Monthly Net Income</p>
            <p className="text-2xl font-bold text-blue-600">{formatCurrency(netIncome)}</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Total Monthly Expenses</p>
            <p className="text-2xl font-bold text-red-600">{formatCurrency(totalExpenses)}</p>
          </div>
          <div className={`${monthlyLeftover >= 0 ? 'bg-emerald-50' : 'bg-orange-50'} rounded-lg p-4`}>
            <p className="text-sm text-gray-600">Monthly Leftover</p>
            <p className={`text-2xl font-bold ${monthlyLeftover >= 0 ? 'text-emerald-600' : 'text-orange-600'}`}>
              {formatCurrency(monthlyLeftover)}
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Savings Rate</p>
            <p className="text-2xl font-bold text-purple-600">{formatPercent(savingsRate)}</p>
          </div>
        </div>

        {savingsRate < 0 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-red-900">Budget Deficit Alert</h4>
              <p className="text-sm text-red-700">
                Lorissa is spending more than she earns. Immediate budget adjustments are needed.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Spending by Category</h3>
        <div className="space-y-3">
          {budgetCategories.map((category, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{category.category}</span>
                <span className="text-sm text-gray-600">
                  {formatCurrency(category.amount)} ({formatPercent(category.percentage)})
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-emerald-600 h-2 rounded-full"
                  style={{ width: `${Math.min(category.percentage, 100)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <TrendingDown className="w-5 h-5 text-emerald-600" />
          <span>Recommended Budget: 52/28/20 Framework</span>
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          52% Needs, 28% Wants, 20% Savings & Debt Acceleration
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
            <div className="text-center mb-4">
              <p className="text-4xl font-bold text-blue-600">52%</p>
              <p className="text-lg font-semibold text-gray-900">Needs</p>
              <p className="text-2xl font-bold text-blue-600">{formatCurrency(netIncome * 0.52)}</p>
              <p className="text-xs text-gray-600 mt-2">/month</p>
            </div>
            <p className="text-xs text-gray-700">
              Housing, utilities, insurance, minimum debt payments, essential transport.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6">
            <div className="text-center mb-4">
              <p className="text-4xl font-bold text-green-600">28%</p>
              <p className="text-lg font-semibold text-gray-900">Wants</p>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(netIncome * 0.28)}</p>
              <p className="text-xs text-gray-600 mt-2">/month</p>
            </div>
            <p className="text-xs text-gray-700">
              Dining out, entertainment, discretionary shopping, travel.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6">
            <div className="text-center mb-4">
              <p className="text-4xl font-bold text-purple-600">20%</p>
              <p className="text-lg font-semibold text-gray-900">Savings & Debt</p>
              <p className="text-2xl font-bold text-purple-600">{formatCurrency(netIncome * 0.20)}</p>
              <p className="text-xs text-gray-600 mt-2">/month</p>
            </div>
            <p className="text-xs text-gray-700">
              Emergency fund, extra loan payments, retirement, investments.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <h4 className="font-semibold text-gray-900 mb-4">Category Breakdown (Needs & Wants)</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(recommendedBudget)
              .filter(([key]) => key !== 'savingsAcceleration')
              .map(([category, amount]) => {
                const percentOfIncome = (amount / netIncome) * 100;
                let categoryType = 'Needs';
                if (
                  category === 'dining' ||
                  category === 'entertainment' ||
                  category === 'personal' ||
                  category === 'groceries'
                ) {
                  if (category !== 'groceries') {
                    categoryType = 'Wants';
                  }
                }

                return (
                  <div key={category} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-sm font-medium text-gray-900 capitalize">
                        {category.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-xs font-semibold px-2 py-1 rounded bg-gray-100 text-gray-700">
                        {categoryType}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-600">Recommended:</span>
                        <span className="font-medium">{formatCurrency(amount)}</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{formatPercent(percentOfIncome)} of income</span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Budgeting Insights</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Why Budgeting Matters</h4>
            <p className="text-sm text-gray-700">
              Tracking income and expenses provides visibility into spending patterns, helps identify
              areas for improvement, and ensures alignment between daily spending and long-term
              financial goals like homeownership and retirement.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Dining Out Observation</h4>
            <p className="text-sm text-gray-700">
              Lorissa spends{' '}
              {formatCurrency(
                budgetCategories.find((c) => c.category === 'Dining Out')?.amount || 0
              )}{' '}
              on dining out. Reducing this by 30-50% could free up{' '}
              {formatCurrency(
                (budgetCategories.find((c) => c.category === 'Dining Out')?.amount || 0) * 0.4
              )}{' '}
              monthly for savings or debt payoff.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Travel Spending</h4>
            <p className="text-sm text-gray-700">
              Current travel expenses show significant variation. Creating a dedicated travel sinking
              fund with monthly contributions would help achieve travel goals without impacting other
              financial priorities.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Charitable Giving</h4>
            <p className="text-sm text-gray-700">
              Lorissa consistently donates {formatCurrency(82.20)} monthly to charity. This shows
              strong values alignment and should be maintained in any budget restructuring.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Detailed Expense List</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Expense
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Category
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {lorissaExpenses
                .sort((a, b) => b.amount - a.amount)
                .map((expense, index) => {
                  const categories = categorizeBudget([expense]);
                  return (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">{expense.expense}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {categories[0]?.category || 'Other'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-900 text-right">
                        {formatCurrency(expense.amount)}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot className="bg-gray-50">
              <tr>
                <td colSpan={2} className="px-4 py-3 text-sm font-semibold text-gray-900">
                  Total Monthly Expenses
                </td>
                <td className="px-4 py-3 text-sm font-bold text-gray-900 text-right">
                  {formatCurrency(totalExpenses)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
