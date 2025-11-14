import { useState } from 'react';
import { TrendingUp, PiggyBank, AlertCircle, Target } from 'lucide-react';
import { lorissaRetirement } from '../data/lorissaData';
import { calculateRetirementProjection, formatCurrency } from '../utils/calculations';

export default function RetirementAnalysis() {
  const [monthlyContribution, setMonthlyContribution] = useState(850);
  const [expectedReturn, setExpectedReturn] = useState(7);

  const currentAge = 35;
  const retirementAge = 65;
  const yearsToRetirement = retirementAge - currentAge;

  const totalCurrentRetirement = lorissaRetirement.reduce((sum, account) => {
    return sum + (account.marketValue || account.contributions + account.investmentGrowth);
  }, 0);

  const projectedBalance = calculateRetirementProjection(
    currentAge,
    retirementAge,
    totalCurrentRetirement,
    monthlyContribution,
    expectedReturn
  );

  const totalContributions = totalCurrentRetirement + monthlyContribution * 12 * yearsToRetirement;
  const investmentGrowth = projectedBalance - totalContributions;

  const retirementGoal = 1500000;
  const monthlyNeededForGoal = 1200;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
          <PiggyBank className="w-6 h-6 text-emerald-600" />
          <span>Current Retirement Accounts</span>
        </h2>

        <div className="space-y-4 mb-6">
          {lorissaRetirement.map((account, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4 bg-blue-50 p-4 rounded">
              <h4 className="text-sm font-semibold text-gray-900">{account.employer}</h4>
              <p className="text-xs text-gray-600 mb-2">{account.type}</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-600">Contributions: </span>
                  <span className="font-medium">{formatCurrency(account.contributions)}</span>
                </div>
                <div>
                  <span className="text-gray-600">Current Value: </span>
                  <span className="font-medium text-emerald-600">
                    {formatCurrency(account.marketValue || account.contributions + account.investmentGrowth)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">Total Retirement Savings</span>
            <span className="text-2xl font-bold text-emerald-600">
              {formatCurrency(totalCurrentRetirement)}
            </span>
          </div>
        </div>

        <div className="mt-4 bg-orange-50 border border-orange-200 rounded-lg p-4 flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-orange-900">Consolidation Opportunity</h4>
            <p className="text-sm text-orange-800">
              Lorissa has retirement accounts with three different employers. Consider consolidating
              these into a single IRA for easier management, potentially lower fees, and more
              investment options.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Target className="w-5 h-5 text-emerald-600" />
          <span>Retirement Projection Calculator</span>
        </h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Monthly Contribution: {formatCurrency(monthlyContribution)}
            </label>
            <input
              type="range"
              min="0"
              max="2000"
              step="50"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$0</span>
              <span>$1,000</span>
              <span>$2,000</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Annual Return: {expectedReturn}%
            </label>
            <input
              type="range"
              min="4"
              max="12"
              step="0.5"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>4% (Conservative)</span>
              <span>8% (Moderate)</span>
              <span>12% (Aggressive)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">Current Balance</p>
              <p className="text-xl font-bold text-blue-600">{formatCurrency(totalCurrentRetirement)}</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">Total Contributions</p>
              <p className="text-xl font-bold text-purple-600">{formatCurrency(totalContributions)}</p>
            </div>
            <div className="bg-emerald-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">Investment Growth</p>
              <p className="text-xl font-bold text-emerald-600">{formatCurrency(investmentGrowth)}</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-6 text-white">
            <p className="text-sm text-emerald-50 mb-1">Projected Balance at Age {retirementAge}</p>
            <p className="text-4xl font-bold">{formatCurrency(projectedBalance)}</p>
            <p className="text-sm text-emerald-50 mt-2">
              Based on {yearsToRetirement} years of growth
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Retirement Savings Benchmarks</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Age 35 Benchmark</h4>
            <p className="text-sm text-gray-700 mb-2">
              Financial advisors recommend having 2x your annual salary saved for retirement by age 35.
            </p>
            <div className="bg-emerald-50 p-3 rounded">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Target:</span>
                <span className="font-medium">{formatCurrency(85000 * 2)}</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Current:</span>
                <span className="font-medium">{formatCurrency(totalCurrentRetirement)}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-emerald-700">Status:</span>
                <span className={totalCurrentRetirement >= 170000 ? 'text-emerald-600' : 'text-orange-600'}>
                  {totalCurrentRetirement >= 170000 ? 'On Track' : 'Needs Attention'}
                </span>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Recommended Savings Rate</h4>
            <p className="text-sm text-gray-700 mb-2">
              Financial experts suggest saving 15-20% of gross income for retirement.
            </p>
            <div className="bg-blue-50 p-3 rounded">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">15% of Gross:</span>
                <span className="font-medium">{formatCurrency(7083.33 * 0.15)}</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">20% of Gross:</span>
                <span className="font-medium">{formatCurrency(7083.33 * 0.20)}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-blue-700">Your Contribution:</span>
                <span className="text-blue-900">{formatCurrency(monthlyContribution)}</span>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Retirement Income Goal</h4>
            <p className="text-sm text-gray-700 mb-2">
              Plan for 70-80% of pre-retirement income in retirement. Using the 4% withdrawal rule.
            </p>
            <div className="bg-purple-50 p-3 rounded">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Target Annual Income:</span>
                <span className="font-medium">{formatCurrency(85000 * 0.75)}</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700">Needed Portfolio (4% rule):</span>
                <span className="font-medium">{formatCurrency((85000 * 0.75) / 0.04)}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-purple-700">Projected Portfolio:</span>
                <span className="text-purple-900">{formatCurrency(projectedBalance)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-emerald-600" />
          <span>Investment Strategies</span>
        </h3>
        <div className="space-y-4">
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Start Investing Now</h4>
            <p className="text-sm text-gray-700 mb-2">
              Despite family concerns about the stock market, investing is crucial for long-term
              wealth building. Time in the market beats timing the market.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Recommendation:</strong> Start with low-cost index funds that track the S&P
              500 or total stock market. These provide diversification and have historically
              averaged 10% annual returns.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Tax-Advantaged Accounts First</h4>
            <p className="text-sm text-gray-700 mb-2">
              Prioritize contributions to tax-advantaged accounts like 401(k) and IRA before taxable
              investment accounts.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Recommendation:</strong> Max out employer 401(k) match first, then contribute
              to a Roth IRA (up to $7,000/year), then increase 401(k) contributions.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Age-Appropriate Asset Allocation</h4>
            <p className="text-sm text-gray-700 mb-2">
              At 35, Lorissa has 30 years until retirement. A growth-oriented portfolio is
              appropriate.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Recommendation:</strong> 80-90% stocks, 10-20% bonds. Consider target-date
              funds that automatically adjust allocation as retirement approaches.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Dollar-Cost Averaging</h4>
            <p className="text-sm text-gray-700 mb-2">
              Invest consistently regardless of market conditions to reduce the impact of volatility.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Recommendation:</strong> Set up automatic monthly contributions to investment
              accounts. This removes emotion from investing decisions.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Emergency Fund Separate</h4>
            <p className="text-sm text-gray-700 mb-2">
              Keep emergency funds in high-yield savings, not invested in the market.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Recommendation:</strong> Maintain $15,000-$20,000 in savings. Invest the
              remaining $33,000-$38,000 from her current savings to accelerate wealth building.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Retirement vs. Investment Balance</h3>
        <div className="space-y-4">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <h4 className="font-semibold text-emerald-900 mb-2">Can Lorissa Do Both? Yes!</h4>
            <p className="text-sm text-gray-700 mb-3">
              Lorissa should pursue both retirement savings and general investing simultaneously.
              Here's a balanced approach:
            </p>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">1.</span>
                <div className="text-sm">
                  <strong>401(k) contribution:</strong> $850/month (12% of salary + employer match)
                  → Tax-deferred retirement savings
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">2.</span>
                <div className="text-sm">
                  <strong>Roth IRA:</strong> $583/month ($7,000/year max) → Tax-free retirement
                  growth
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">3.</span>
                <div className="text-sm">
                  <strong>Taxable brokerage:</strong> $200-400/month → Flexible investing for
                  mid-term goals
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-emerald-600 font-bold">4.</span>
                <div className="text-sm">
                  <strong>Lump sum investment:</strong> $30,000 from savings → Jump-start growth
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Professional Guidance Recommended</h4>
            <p className="text-sm text-gray-700">
              Given Lorissa's concerns about investing and the family's negative view of the stock
              market, working with a fee-only fiduciary financial advisor would provide:
            </p>
            <ul className="text-sm text-gray-700 mt-2 space-y-1 ml-4">
              <li>• Education on investment fundamentals and risk management</li>
              <li>• Personalized investment strategy aligned with her goals</li>
              <li>• Emotional support and accountability</li>
              <li>• Tax-efficient investment planning</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
