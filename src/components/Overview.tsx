import { User, Briefcase, MapPin, Home, Heart, TrendingUp } from 'lucide-react';
import {
  lorissaProfile,
  lorissaAssets,
  lorissaDebts,
  lorissaIncome,
  lorissaRetirement,
  lorissaGoals,
} from '../data/lorissaData';
import { formatCurrency } from '../utils/calculations';

export default function Overview() {
  const totalRetirement = lorissaRetirement.reduce((sum, account) => {
    return sum + (account.marketValue || account.contributions + account.investmentGrowth);
  }, 0);

  const netWorth =
    lorissaAssets.checking +
    lorissaAssets.savings +
    totalRetirement -
    lorissaDebts.studentLoan.balance;

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Client Profile: {lorissaProfile.name}</h2>
        <p className="text-emerald-50">
          Financial planning case study for FBLA competition
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Age</p>
              <p className="text-lg font-semibold text-gray-900">{lorissaProfile.age}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <Briefcase className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Annual Salary</p>
              <p className="text-lg font-semibold text-gray-900">
                {formatCurrency(lorissaProfile.newSalary)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <MapPin className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Location</p>
              <p className="text-lg font-semibold text-gray-900">{lorissaProfile.location}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Heart className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Status</p>
              <p className="text-lg font-semibold text-gray-900">{lorissaProfile.status}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Assets</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Checking</span>
              <span className="text-sm font-medium">{formatCurrency(lorissaAssets.checking)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Savings</span>
              <span className="text-sm font-medium">{formatCurrency(lorissaAssets.savings)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Retirement Accounts</span>
              <span className="text-sm font-medium">{formatCurrency(totalRetirement)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Vehicle</span>
              <span className="text-sm font-medium">Paid off</span>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <div className="flex justify-between">
                <span className="text-sm font-semibold text-gray-900">Total Assets</span>
                <span className="text-sm font-bold text-emerald-600">
                  {formatCurrency(lorissaAssets.checking + lorissaAssets.savings + totalRetirement)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Liabilities</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Student Loans</span>
              <span className="text-sm font-medium">{formatCurrency(lorissaDebts.studentLoan.balance)}</span>
            </div>
            <div className="text-xs text-gray-500 ml-4">
              <div>Interest Rate: {lorissaDebts.studentLoan.interestRate}%</div>
              <div>Monthly Payment: {formatCurrency(lorissaDebts.studentLoan.monthlyPayment)}</div>
            </div>
            <div className="pt-3 border-t border-gray-200">
              <div className="flex justify-between">
                <span className="text-sm font-semibold text-gray-900">Total Liabilities</span>
                <span className="text-sm font-bold text-red-600">
                  {formatCurrency(lorissaDebts.studentLoan.balance)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Net Worth</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <span className="text-2xl font-bold text-emerald-600">{formatCurrency(netWorth)}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Total assets minus total liabilities
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Income Breakdown</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div>
            <p className="text-xs text-gray-500">Gross Pay</p>
            <p className="text-sm font-semibold">{formatCurrency(lorissaIncome.grossPay)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Federal Tax</p>
            <p className="text-sm font-semibold text-red-600">-{formatCurrency(lorissaIncome.federalIncomeTax)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">State Tax</p>
            <p className="text-sm font-semibold text-red-600">-{formatCurrency(lorissaIncome.kentuckyStateTax)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Social Security</p>
            <p className="text-sm font-semibold text-red-600">-{formatCurrency(lorissaIncome.socialSecurity)}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Medicare</p>
            <p className="text-sm font-semibold text-red-600">-{formatCurrency(lorissaIncome.medicareTax)}</p>
          </div>
          <div className="bg-emerald-50 p-2 rounded">
            <p className="text-xs text-gray-500">Net Pay</p>
            <p className="text-sm font-bold text-emerald-600">{formatCurrency(lorissaIncome.netPay)}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Home className="w-5 h-5 text-emerald-600" />
          <span>Financial Goals</span>
        </h3>
        <ul className="space-y-2">
          {lorissaGoals.map((goal, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-emerald-600 font-bold">•</span>
              <span className="text-sm text-gray-700">{goal}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Retirement Accounts</h3>
        <div className="space-y-4">
          {lorissaRetirement.map((account, index) => (
            <div key={index} className="border-l-4 border-emerald-500 pl-4">
              <h4 className="text-sm font-semibold text-gray-900">{account.employer}</h4>
              <p className="text-xs text-gray-600">{account.type}</p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-500">Contributions: </span>
                  <span className="font-medium">{formatCurrency(account.contributions)}</span>
                </div>
                <div>
                  <span className="text-gray-500">Market Value: </span>
                  <span className="font-medium">
                    {formatCurrency(account.marketValue || account.contributions + account.investmentGrowth)}
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div className="pt-3 border-t border-gray-200">
            <div className="flex justify-between">
              <span className="text-sm font-semibold">Total Retirement Savings</span>
              <span className="text-sm font-bold text-emerald-600">{formatCurrency(totalRetirement)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
