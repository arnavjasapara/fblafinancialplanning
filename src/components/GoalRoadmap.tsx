import { useState } from 'react';
import { TrendingUp, CheckCircle, Target, DollarSign } from 'lucide-react';
import { lorissaIncome } from '../data/lorissaData';
import { formatCurrency } from '../utils/calculations';

export default function GoalRoadmap() {
  const netIncome = lorissaIncome.netPay;
  const savingsAcceleration = netIncome * 0.20;
  const [selectedPhase, setSelectedPhase] = useState(0);

  const roadmap = [
    {
      phase: '0-2 Years',
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      accentColor: 'text-blue-600',
      goals: [
        {
          title: 'Automated 52/28/20 System',
          description: '$200 surplus/month with optimized budget',
          metric: 'Monthly surplus',
          value: '$200+',
        },
        {
          title: 'Accelerate Student Loan Payoff',
          description: 'Increase payment to $200/month (4-yr payoff)',
          metric: 'Years to payoff',
          value: '~4 years',
        },
        {
          title: 'Diversify Retirement Accounts',
          description: 'Roll over legacy 401(k) to Traditional IRA',
          metric: 'Action item',
          value: 'Complete',
        },
        {
          title: 'Build Emergency Fund',
          description: 'Accumulate $10,000 (2.5 months expenses)',
          metric: 'Target savings',
          value: '$10,000',
        },
        {
          title: 'Secure Insurance Coverage',
          description: 'Term life + long-term disability coverage',
          metric: 'Protection',
          value: 'Secured',
        },
      ],
    },
    {
      phase: '2-5 Years',
      color: 'from-green-50 to-green-100',
      borderColor: 'border-green-200',
      accentColor: 'text-green-600',
      goals: [
        {
          title: 'Student Loan Elimination',
          description: 'Complete payoff with aggressive payments',
          metric: 'Debt-free status',
          value: 'Achieved',
        },
        {
          title: 'Freed Monthly Cash Flow',
          description: '$200/month now available for other goals',
          metric: 'Monthly available',
          value: '$200+',
        },
        {
          title: 'Boost Retirement Contributions',
          description: 'Increase to 12-15% of salary ($850-$1,050/mo)',
          metric: 'Annual contribution',
          value: '$10k-$12.6k',
        },
        {
          title: 'Down-Payment Fund Growth',
          description: 'Accumulate $45-60k for home purchase',
          metric: 'Target savings',
          value: '$45-60k',
        },
        {
          title: 'Maintain 2 Funded Vacations',
          description: 'Dedicated travel sinking fund via wants budget',
          metric: 'Annual vacations',
          value: '2x/year',
        },
      ],
    },
    {
      phase: '5-10 Years',
      color: 'from-purple-50 to-purple-100',
      borderColor: 'border-purple-200',
      accentColor: 'text-purple-600',
      goals: [
        {
          title: 'Home Affordability Assessment',
          description: 'Run affordability check for loft purchase',
          metric: 'Rate assumption',
          value: 'Current market',
        },
        {
          title: 'Execute Home Purchase',
          description: 'Purchase loft with strong down payment',
          metric: 'Down payment',
          value: '$45-60k',
        },
        {
          title: 'Accelerate Wealth Building',
          description: 'Increase investing to 18%+ of salary',
          metric: 'Annual investing',
          value: '$13k+/year',
        },
        {
          title: 'Discretionary Travel Cap',
          description: 'Keep discretionary travel capped at $5k/year',
          metric: 'Annual budget',
          value: '$5k',
        },
        {
          title: 'Retirement Track',
          description: 'On track for comfortable retirement at 65',
          metric: 'Retirement age',
          value: '65 years',
        },
      ],
    },
  ];

  const currentPhase = roadmap[selectedPhase];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center space-x-2">
          <Target className="w-7 h-7 text-emerald-600" />
          <span>10-Year Goal Attainment Roadmap</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Based on {formatCurrency(savingsAcceleration)}/month allocated to Savings & Debt Acceleration
        </p>

        {/* Phase Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {roadmap.map((phase, index) => (
            <button
              key={index}
              onClick={() => setSelectedPhase(index)}
              className={`relative p-4 rounded-lg border-2 transition-all cursor-pointer ${
                selectedPhase === index
                  ? `${phase.borderColor} bg-white shadow-lg`
                  : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className={`font-bold ${selectedPhase === index ? phase.accentColor : 'text-gray-700'}`}>
                {phase.phase}
              </div>
              {selectedPhase === index && (
                <CheckCircle className={`absolute top-3 right-3 w-5 h-5 ${phase.accentColor}`} />
              )}
            </button>
          ))}
        </div>

        {/* Current Phase Details */}
        <div className={`bg-gradient-to-br ${currentPhase.color} ${currentPhase.borderColor} border-2 rounded-lg p-8`}>
          <h3 className={`text-2xl font-bold ${currentPhase.accentColor} mb-6`}>{currentPhase.phase} Roadmap</h3>

          <div className="space-y-4">
            {currentPhase.goals.map((goal, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-5 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full ${currentPhase.color} flex items-center justify-center font-bold ${currentPhase.accentColor}`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-1">{goal.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{goal.description}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{goal.metric}</p>
                        <p className={`text-xl font-bold ${currentPhase.accentColor} mt-1`}>{goal.value}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Visualization */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-emerald-600" />
          <span>Financial Milestone Timeline</span>
        </h3>

        <div className="space-y-6">
          {/* Debt Freedom Timeline */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-gray-900">Student Loan Payoff</h4>
              <span className="text-sm font-bold text-emerald-600">Completed by Year 4</span>
            </div>
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="absolute h-full bg-emerald-500 rounded-full" style={{ width: '40%' }}></div>
              <div className="absolute h-full border-l-2 border-emerald-600" style={{ left: '40%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Today</span>
              <span>Year 4 (2029)</span>
              <span>Year 10 (2035)</span>
            </div>
          </div>

          {/* Emergency Fund Timeline */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-gray-900">Emergency Fund ($10,000)</h4>
              <span className="text-sm font-bold text-blue-600">Completed by Year 1-2</span>
            </div>
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="absolute h-full bg-blue-500 rounded-full" style={{ width: '15%' }}></div>
              <div className="absolute h-full border-l-2 border-blue-600" style={{ left: '15%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Today</span>
              <span>Year 2 (2027)</span>
              <span>Year 10 (2035)</span>
            </div>
          </div>

          {/* Down Payment Fund Timeline */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-gray-900">Home Down Payment ($45-60k)</h4>
              <span className="text-sm font-bold text-purple-600">Completed by Year 5</span>
            </div>
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="absolute h-full bg-purple-500 rounded-full" style={{ width: '50%' }}></div>
              <div className="absolute h-full border-l-2 border-purple-600" style={{ left: '50%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Today</span>
              <span>Year 5 (2030)</span>
              <span>Year 10 (2035)</span>
            </div>
          </div>

          {/* Retirement Contributions Timeline */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-gray-900">Retirement Contributions Growth</h4>
              <span className="text-sm font-bold text-green-600">12-15% → 18%+ of salary</span>
            </div>
            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="absolute h-full bg-green-500 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Start (10% baseline)</span>
              <span>Mid-point (15%)</span>
              <span>End (18%+)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-5 border border-gray-200">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Monthly Allocation</p>
          <p className="text-2xl font-bold text-emerald-600">{formatCurrency(savingsAcceleration)}</p>
          <p className="text-xs text-gray-600 mt-2">20% of net income</p>
        </div>
        <div className="bg-white rounded-lg p-5 border border-gray-200">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Total 10-Year Savings</p>
          <p className="text-2xl font-bold text-blue-600">{formatCurrency(savingsAcceleration * 12 * 10)}</p>
          <p className="text-xs text-gray-600 mt-2">Before investment returns</p>
        </div>
        <div className="bg-white rounded-lg p-5 border border-gray-200">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Debt Freedom Target</p>
          <p className="text-2xl font-bold text-purple-600">Year 4</p>
          <p className="text-xs text-gray-600 mt-2">From student loans</p>
        </div>
        <div className="bg-white rounded-lg p-5 border border-gray-200">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Home Purchase Target</p>
          <p className="text-2xl font-bold text-green-600">Year 5</p>
          <p className="text-xs text-gray-600 mt-2">~2030</p>
        </div>
      </div>

      {/* Strategy Notes */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-6">
        <h3 className="font-semibold text-emerald-900 mb-4 flex items-center space-x-2">
          <DollarSign className="w-5 h-5" />
          <span>Success Strategy</span>
        </h3>
        <div className="space-y-3 text-sm text-emerald-800">
          <p>
            <strong>Automate Everything:</strong> Set up automatic transfers to dedicated accounts for emergency fund,
            student loan acceleration, and down-payment savings. Treat this money as non-negotiable.
          </p>
          <p>
            <strong>Seasonal Adjustments:</strong> During windfall months (bonuses, tax refunds), allocate 80% to goals
            and keep 20% for discretionary enjoyment.
          </p>
          <p>
            <strong>Milestone Celebrations:</strong> Celebrate each phase completion (debt freedom, emergency fund
            completion) with a small, budgeted reward from the wants category.
          </p>
          <p>
            <strong>Annual Review:</strong> Review progress quarterly and adjust contribution rates based on income
            changes or market conditions. Keep the end goal in focus.
          </p>
        </div>
      </div>
    </div>
  );
}
