import { Lightbulb, Users, TrendingUp, Shield, Calculator, FileText } from 'lucide-react';

export default function Recommendations() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Comprehensive Financial Plan for Lorissa</h2>
        <p className="text-emerald-50">
          Strategic recommendations to achieve all financial goals
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-emerald-600" />
          <span>Priority Action Plan</span>
        </h3>

        <div className="space-y-4">
          <div className="border-l-4 border-emerald-600 pl-4 bg-emerald-50 p-4 rounded">
            <div className="flex items-start space-x-3">
              <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Immediate Actions (Next 30 Days)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong>Pay off student loan:</strong> Use $10,000 from savings to eliminate
                      debt completely, freeing up $79/month and improving credit
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong>Create a budget:</strong> Categorize all expenses and set spending
                      limits for each category using the 50/30/20 rule as a guide
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong>Open a Roth IRA:</strong> Set up account and schedule automatic
                      monthly contributions of $583 ($7,000 annual max)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-emerald-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong>Consolidate retirement accounts:</strong> Roll old 401(k)s into a
                      single IRA for easier management and potentially lower fees
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-600 pl-4 bg-blue-50 p-4 rounded">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Short-Term Goals (1-6 Months)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong>Reduce dining out by 40%:</strong> Save approximately $250/month by
                      meal planning and cooking at home more frequently
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong>Establish sinking funds:</strong> Create separate savings for travel
                      ($200/month) and home down payment ($1,000/month)
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong>Start investing:</strong> Open taxable brokerage account and invest
                      $20,000-$25,000 from savings in low-cost index funds
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong>Meet with financial advisor:</strong> Schedule consultation with
                      fee-only fiduciary advisor for personalized investment strategy
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-purple-600 pl-4 bg-purple-50 p-4 rounded">
            <div className="flex items-start space-x-3">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Medium-Term Goals (6-24 Months)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong>Save for home down payment:</strong> Accumulate $80,000 for 20% down
                      plus $15,000 for closing costs and buffer
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong>Optimize credit score:</strong> Maintain 100% on-time payments and low
                      credit utilization to secure best mortgage rates
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong>Research home purchase:</strong> Get pre-approved, explore
                      neighborhoods, and consider properties in $300k-$350k range
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-purple-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong>Increase retirement contributions:</strong> Gradually increase 401(k)
                      to 15% of salary as budget allows
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-orange-600 pl-4 bg-orange-50 p-4 rounded">
            <div className="flex items-start space-x-3">
              <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Long-Term Goals (2-30 Years)</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong>Maintain 20% savings rate:</strong> Continue aggressive retirement
                      contributions to reach $1.5M+ by age 65
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong>Build home equity:</strong> Make additional mortgage principal
                      payments when possible to reduce interest and own home faster
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong>Annual financial reviews:</strong> Meet with advisor yearly to adjust
                      strategy based on life changes and market conditions
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-orange-600 font-bold mt-0.5">•</span>
                    <span>
                      <strong>Maintain travel fund:</strong> Continue $200-300/month contributions
                      for sustainable travel without impacting other goals
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <Users className="w-5 h-5 text-emerald-600" />
          <span>Professional Guidance Recommendations</span>
        </h3>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
              <Calculator className="w-4 h-4 text-emerald-600" />
              <span>Fee-Only Fiduciary Financial Advisor</span>
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Why:</strong> Given Lorissa's family concerns about investing and her lack of
              investment experience, professional guidance would provide education, strategy, and
              accountability.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Services:</strong> Investment planning, asset allocation, retirement strategy,
              tax optimization, and ongoing portfolio management.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Cost:</strong> Typically 0.5-1.5% of assets under management annually, or
              flat fee of $2,000-5,000 per year. Fee-only advisors don't earn commissions, ensuring
              advice is in client's best interest.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Certified Public Accountant (CPA)</span>
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Why:</strong> To optimize tax strategy, especially as income increases and
              investment portfolio grows.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Services:</strong> Tax planning and preparation, retirement account strategy,
              maximizing deductions, and estate planning basics.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Cost:</strong> $200-500 for tax preparation, $150-300/hour for planning
              consultations.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
              <Shield className="w-4 h-4 text-purple-600" />
              <span>Insurance Agent (Independent)</span>
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Why:</strong> To evaluate need for life insurance, disability insurance, and
              umbrella liability coverage as assets grow.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Services:</strong> Needs analysis, policy comparison, and ongoing policy
              management.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Cost:</strong> No cost for consultation. Agents earn commissions from
              insurance companies on policies sold.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
              <Lightbulb className="w-4 h-4 text-orange-600" />
              <span>Mortgage Broker or Lender</span>
            </h4>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Why:</strong> To understand borrowing capacity, secure pre-approval, and
              compare mortgage options before home shopping.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Services:</strong> Pre-approval, rate shopping, loan application processing,
              and closing coordination.
            </p>
            <p className="text-sm text-gray-700">
              <strong>Cost:</strong> Lenders typically don't charge for pre-approval. Closing costs
              are separate and included in loan terms.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Insurance Recommendations</h3>

        <div className="space-y-4">
          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Life Insurance: Not Immediately Necessary</h4>
            <p className="text-sm text-gray-700 mb-2">
              Lorissa is single with no dependents. Life insurance is primarily for income
              replacement when others depend on you financially.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Recommendation:</strong> Wait until marriage or children. If purchased,
              consider term life insurance (much cheaper than whole life) for 20-30 year terms.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Disability Insurance: Highly Recommended</h4>
            <p className="text-sm text-gray-700 mb-2">
              Lorissa's ability to earn income is her greatest asset. Disability insurance replaces
              income if she's unable to work due to illness or injury.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Recommendation:</strong> Check if employer offers group disability. If not,
              purchase individual policy covering 60-70% of income. Cost: $50-100/month.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Umbrella Liability: Consider After Home Purchase</h4>
            <p className="text-sm text-gray-700 mb-2">
              Provides additional liability coverage beyond auto and homeowner's insurance.
              Especially important when net worth exceeds $500,000.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Recommendation:</strong> Wait until home purchase. Then consider $1-2 million
              umbrella policy. Cost: $150-300/year.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold text-gray-900 mb-1">Health Insurance: Continue Current Coverage</h4>
            <p className="text-sm text-gray-700 mb-2">
              Lorissa already has health, dental, and vision coverage. This is excellent foundation.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Recommendation:</strong> Review coverage annually during open enrollment.
              Consider HSA if eligible for high-deductible plan for tax-advantaged medical savings.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Budget Recommendation</h3>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Category
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Current
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Recommended
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  Change
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-3 text-sm text-gray-900">Net Income</td>
                <td className="px-4 py-3 text-sm text-right font-medium">$4,284</td>
                <td className="px-4 py-3 text-sm text-right font-medium">$4,284</td>
                <td className="px-4 py-3 text-sm text-right text-gray-500">-</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-semibold text-gray-900">EXPENSES</td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700 pl-8">Housing</td>
                <td className="px-4 py-3 text-sm text-right">$1,300</td>
                <td className="px-4 py-3 text-sm text-right">$1,300</td>
                <td className="px-4 py-3 text-sm text-right text-gray-500">$0</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700 pl-8">Utilities</td>
                <td className="px-4 py-3 text-sm text-right">$205</td>
                <td className="px-4 py-3 text-sm text-right">$205</td>
                <td className="px-4 py-3 text-sm text-right text-gray-500">$0</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700 pl-8">Groceries</td>
                <td className="px-4 py-3 text-sm text-right">$471</td>
                <td className="px-4 py-3 text-sm text-right">$500</td>
                <td className="px-4 py-3 text-sm text-right text-emerald-600">+$29</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700 pl-8">Dining Out</td>
                <td className="px-4 py-3 text-sm text-right">$420</td>
                <td className="px-4 py-3 text-sm text-right">$250</td>
                <td className="px-4 py-3 text-sm text-right text-emerald-600">-$170</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700 pl-8">Transportation</td>
                <td className="px-4 py-3 text-sm text-right">$205</td>
                <td className="px-4 py-3 text-sm text-right">$200</td>
                <td className="px-4 py-3 text-sm text-right text-emerald-600">-$5</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700 pl-8">Personal Care</td>
                <td className="px-4 py-3 text-sm text-right">$197</td>
                <td className="px-4 py-3 text-sm text-right">$200</td>
                <td className="px-4 py-3 text-sm text-right text-red-600">+$3</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700 pl-8">Entertainment</td>
                <td className="px-4 py-3 text-sm text-right">$187</td>
                <td className="px-4 py-3 text-sm text-right">$150</td>
                <td className="px-4 py-3 text-sm text-right text-emerald-600">-$37</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700 pl-8">Travel (monthly avg)</td>
                <td className="px-4 py-3 text-sm text-right">$329</td>
                <td className="px-4 py-3 text-sm text-right">$200</td>
                <td className="px-4 py-3 text-sm text-right text-emerald-600">-$129</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700 pl-8">Charity</td>
                <td className="px-4 py-3 text-sm text-right">$329</td>
                <td className="px-4 py-3 text-sm text-right">$329</td>
                <td className="px-4 py-3 text-sm text-right text-gray-500">$0</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700 pl-8">Phone</td>
                <td className="px-4 py-3 text-sm text-right">$141</td>
                <td className="px-4 py-3 text-sm text-right">$141</td>
                <td className="px-4 py-3 text-sm text-right text-gray-500">$0</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700 pl-8">Shopping & Other</td>
                <td className="px-4 py-3 text-sm text-right">$140</td>
                <td className="px-4 py-3 text-sm text-right">$100</td>
                <td className="px-4 py-3 text-sm text-right text-emerald-600">-$40</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700 pl-8">Student Loan</td>
                <td className="px-4 py-3 text-sm text-right">$79</td>
                <td className="px-4 py-3 text-sm text-right text-emerald-600">$0</td>
                <td className="px-4 py-3 text-sm text-right text-emerald-600">-$79</td>
              </tr>
              <tr className="bg-gray-50 font-semibold">
                <td className="px-4 py-3 text-sm text-gray-900">Total Expenses</td>
                <td className="px-4 py-3 text-sm text-right">$4,003</td>
                <td className="px-4 py-3 text-sm text-right">$3,575</td>
                <td className="px-4 py-3 text-sm text-right text-emerald-600">-$428</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-4 py-3 text-sm font-semibold text-gray-900">SAVINGS & DEBT ACCELERATION</td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
                <td className="px-4 py-3"></td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700 pl-8">401(k) Contribution</td>
                <td className="px-4 py-3 text-sm text-right">$0</td>
                <td className="px-4 py-3 text-sm text-right">$850</td>
                <td className="px-4 py-3 text-sm text-right text-red-600">+$850</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700 pl-8">Roth IRA</td>
                <td className="px-4 py-3 text-sm text-right">$0</td>
                <td className="px-4 py-3 text-sm text-right">$583</td>
                <td className="px-4 py-3 text-sm text-right text-red-600">+$583</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700 pl-8">Home Down Payment Fund</td>
                <td className="px-4 py-3 text-sm text-right">$0</td>
                <td className="px-4 py-3 text-sm text-right">$1,000</td>
                <td className="px-4 py-3 text-sm text-right text-red-600">+$1,000</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-gray-700 pl-8">Emergency Fund</td>
                <td className="px-4 py-3 text-sm text-right">$281</td>
                <td className="px-4 py-3 text-sm text-right">$0</td>
                <td className="px-4 py-3 text-sm text-right text-emerald-600">-$281</td>
              </tr>
              <tr className="bg-emerald-50 font-bold">
                <td className="px-4 py-3 text-sm text-emerald-900">Total Savings & Debt Acceleration</td>
                <td className="px-4 py-3 text-sm text-right text-emerald-900">$281</td>
                <td className="px-4 py-3 text-sm text-right text-emerald-900">$2,433</td>
                <td className="px-4 py-3 text-sm text-right text-emerald-600">+$2,152</td>
              </tr>
              <tr className="bg-gray-100 font-bold">
                <td className="px-4 py-3 text-sm text-gray-900">Balance</td>
                <td className="px-4 py-3 text-sm text-right text-gray-900">$0</td>
                <td className="px-4 py-3 text-sm text-right text-gray-900">$276</td>
                <td className="px-4 py-3 text-sm text-right"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-lg p-4">
          <h4 className="font-semibold text-emerald-900 mb-2">Budget Impact Summary</h4>
          <p className="text-sm text-gray-700">
            By optimizing expenses and eliminating debt, Lorissa can increase her savings and
            investment rate from 6.6% to 56.8% of net income. This accelerated savings approach will
            enable her to achieve all financial goals: home purchase within 18-24 months, continued
            travel, and on-track retirement by age 65.
          </p>
        </div>
      </div>
    </div>
  );
}
