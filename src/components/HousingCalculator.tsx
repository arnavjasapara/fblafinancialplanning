import { useState } from 'react';
import { Home, TrendingUp, Calculator, AlertTriangle } from 'lucide-react';
import { lorissaHousingGoal, lorissaAssets, lorissaIncome } from '../data/lorissaData';
import { calculateMortgage, formatCurrency } from '../utils/calculations';

export default function HousingCalculator() {
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [useFromSavings, setUseFromSavings] = useState(true);

  const mortgage = calculateMortgage(
    lorissaHousingGoal.purchasePrice,
    downPaymentPercent,
    lorissaHousingGoal.interestRate,
    lorissaHousingGoal.term
  );

  const monthlyPaymentWithHOA = mortgage.monthlyPayment + lorissaHousingGoal.monthlyHOA;
  const pmiRequired = downPaymentPercent < 20;
  const monthlyPMI = pmiRequired ? (lorissaHousingGoal.purchasePrice - mortgage.downPaymentNeeded) * 0.005 / 12 : 0;
  const totalMonthlyPayment = monthlyPaymentWithHOA + monthlyPMI;

  const housingRatio = (totalMonthlyPayment / lorissaIncome.grossPay) * 100;
  const remainingSavings = lorissaAssets.savings - (useFromSavings ? mortgage.totalUpfront : 0);

  const propertyTax = (lorissaHousingGoal.purchasePrice * 0.0125) / 12;
  const homeInsurance = 150;
  const totalMonthlyHousingCost = totalMonthlyPayment + propertyTax + homeInsurance;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
          <Home className="w-6 h-6 text-emerald-600" />
          <span>Home Purchase Analysis</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Purchase Price</p>
            <p className="text-2xl font-bold text-blue-600">
              {formatCurrency(lorissaHousingGoal.purchasePrice)}
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Interest Rate</p>
            <p className="text-2xl font-bold text-purple-600">{lorissaHousingGoal.interestRate}%</p>
          </div>
          <div className="bg-emerald-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">Monthly HOA</p>
            <p className="text-2xl font-bold text-emerald-600">
              {formatCurrency(lorissaHousingGoal.monthlyHOA)}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Calculator className="w-5 h-5 text-emerald-600" />
          <span>Mortgage Calculator</span>
        </h3>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Down Payment: {downPaymentPercent}%
            </label>
            <span className="text-sm font-semibold text-emerald-600">
              {formatCurrency(mortgage.downPaymentNeeded)}
            </span>
          </div>
          <input
            type="range"
            min="3"
            max="30"
            step="1"
            value={downPaymentPercent}
            onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>3% (FHA)</span>
            <span>10%</span>
            <span>20% (No PMI)</span>
            <span>30%</span>
          </div>
          {pmiRequired && (
            <p className="text-xs text-orange-600 mt-2">
              PMI required for down payments less than 20%
            </p>
          )}
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Upfront Costs</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Down Payment ({downPaymentPercent}%)</span>
                  <span className="font-medium">{formatCurrency(mortgage.downPaymentNeeded)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Closing Costs (est. 3%)</span>
                  <span className="font-medium">{formatCurrency(mortgage.closingCosts)}</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex justify-between font-semibold">
                    <span className="text-gray-900">Total Upfront</span>
                    <span className="text-red-600">{formatCurrency(mortgage.totalUpfront)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Monthly Payment Breakdown</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Principal & Interest</span>
                  <span className="font-medium">{formatCurrency(mortgage.monthlyPayment)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">HOA Fee</span>
                  <span className="font-medium">{formatCurrency(lorissaHousingGoal.monthlyHOA)}</span>
                </div>
                {pmiRequired && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">PMI</span>
                    <span className="font-medium">{formatCurrency(monthlyPMI)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Tax (est.)</span>
                  <span className="font-medium">{formatCurrency(propertyTax)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Home Insurance (est.)</span>
                  <span className="font-medium">{formatCurrency(homeInsurance)}</span>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex justify-between font-semibold">
                    <span className="text-gray-900">Total Monthly</span>
                    <span className="text-emerald-600">{formatCurrency(totalMonthlyHousingCost)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Loan Summary</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-gray-600">Loan Amount</p>
                <p className="text-lg font-semibold text-gray-900">
                  {formatCurrency(lorissaHousingGoal.purchasePrice - mortgage.downPaymentNeeded)}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Total Interest Paid</p>
                <p className="text-lg font-semibold text-red-600">
                  {formatCurrency(mortgage.totalInterest)}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Total Cost</p>
                <p className="text-lg font-semibold text-gray-900">
                  {formatCurrency(mortgage.totalPayment + mortgage.totalUpfront)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Affordability Analysis</h3>

        <div className="space-y-4">
          <div className={`rounded-lg p-4 ${housingRatio <= 28 ? 'bg-emerald-50 border border-emerald-200' : 'bg-orange-50 border border-orange-200'}`}>
            <div className="flex items-start space-x-3">
              {housingRatio <= 28 ? (
                <TrendingUp className="w-5 h-5 text-emerald-600 mt-0.5" />
              ) : (
                <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
              )}
              <div>
                <h4 className={`font-semibold mb-1 ${housingRatio <= 28 ? 'text-emerald-900' : 'text-orange-900'}`}>
                  Housing Expense Ratio: {housingRatio.toFixed(1)}%
                </h4>
                <p className={`text-sm ${housingRatio <= 28 ? 'text-emerald-800' : 'text-orange-800'}`}>
                  Lenders typically prefer housing costs to be below 28% of gross income. Lorissa's
                  ratio is {housingRatio <= 28 ? 'within acceptable range' : 'above recommended threshold'}.
                </p>
                <p className="text-xs mt-2 text-gray-600">
                  Maximum recommended: {formatCurrency(lorissaIncome.grossPay * 0.28)} per month
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Current vs. Future Housing Costs</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Current Rent</span>
                <span className="font-medium">{formatCurrency(lorissaHousingGoal.currentRent)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Future Total Housing Cost</span>
                <span className="font-medium">{formatCurrency(totalMonthlyHousingCost)}</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-900 pt-2 border-t border-gray-200">
                <span>Monthly Difference</span>
                <span className={totalMonthlyHousingCost > lorissaHousingGoal.currentRent ? 'text-red-600' : 'text-emerald-600'}>
                  {totalMonthlyHousingCost > lorissaHousingGoal.currentRent ? '+' : '-'}
                  {formatCurrency(Math.abs(totalMonthlyHousingCost - lorissaHousingGoal.currentRent))}
                </span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Impact on Savings</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Current Savings</span>
                <span className="font-medium">{formatCurrency(lorissaAssets.savings)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Upfront Costs</span>
                <span className="font-medium text-red-600">
                  -{formatCurrency(mortgage.totalUpfront)}
                </span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t border-gray-200">
                <span className="text-gray-900">Remaining Savings</span>
                <span className={remainingSavings >= 15000 ? 'text-emerald-600' : 'text-orange-600'}>
                  {formatCurrency(remainingSavings)}
                </span>
              </div>
              {remainingSavings < 15000 && (
                <p className="text-xs text-orange-600 mt-2">
                  Warning: Remaining savings below recommended emergency fund level
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommendations</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Wait and Save More</h4>
            <p className="text-sm text-gray-700 mb-2">
              Given Lorissa's lease ends in 6 months, she should use this time to save aggressively
              for a larger down payment and emergency fund replenishment.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Action:</strong> Target 20% down payment ($80,000) to avoid PMI. Save
              additional $15,000-$20,000 for closing costs and emergency fund.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Pay Off Debt First</h4>
            <p className="text-sm text-gray-700 mb-2">
              Eliminate the $9,500 student loan before purchasing. This improves debt-to-income
              ratio for mortgage approval and frees up monthly cash flow.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Action:</strong> Use savings to pay off student loan immediately. This adds
              $79/month to available budget and improves credit profile.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Consider Alternative Housing</h4>
            <p className="text-sm text-gray-700 mb-2">
              A $400,000 loft may strain the budget. Consider properties in the $300,000-$350,000
              range for better financial flexibility.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Action:</strong> Research comparable neighborhoods with lower prices. Could
              save $300-500 monthly while maintaining quality of life.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Improve Credit Score</h4>
            <p className="text-sm text-gray-700 mb-2">
              Use the 6-month waiting period to optimize credit score. Even a 0.5% rate reduction
              saves thousands over the loan term.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Action:</strong> Pay bills on time, keep credit utilization below 30%, and
              don't open new accounts before mortgage application.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Get Pre-Approved</h4>
            <p className="text-sm text-gray-700 mb-2">
              Obtain mortgage pre-approval to understand exact borrowing capacity and identify any
              issues early.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Action:</strong> Meet with 2-3 lenders to compare rates and terms. Shop
              around within a 14-day period to minimize credit score impact.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Rent vs. Buy Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Benefits of Renting</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600">•</span>
                <span>Flexibility to relocate if job changes</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600">•</span>
                <span>No maintenance or repair costs</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600">•</span>
                <span>Lower monthly costs ($1,300 vs. ${totalMonthlyHousingCost.toFixed(0)})</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-emerald-600">•</span>
                <span>Can invest savings difference for higher returns</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Benefits of Buying</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-blue-600">•</span>
                <span>Building equity instead of paying landlord</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600">•</span>
                <span>Fixed monthly payment (no rent increases)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600">•</span>
                <span>Tax deductions for mortgage interest</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600">•</span>
                <span>Freedom to customize living space</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-600">•</span>
                <span>Potential property appreciation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
