import { ClipboardList, CheckSquare, BookOpen } from 'lucide-react';

export default function PresentationPrep() {
  const scoringCriteria = [
    {
      section: 'Understanding Topic & Problem Definition',
      maxPoints: 10,
      expectations: [
        'Describes and provides topic synopsis',
        'Defines the problem(s) to be solved',
        'Demonstrates expertise of topic and problem definition',
      ],
    },
    {
      section: 'Budgeting',
      maxPoints: 20,
      expectations: [
        'Explain importance of tracking income and expenses',
        'Show how budgeting contributes to long-term financial goals',
        'Provide detailed insights with real-world applications',
      ],
    },
    {
      section: 'Debt Management',
      maxPoints: 15,
      expectations: [
        'Identify responsible strategies for managing debt',
        'Include both short-term and long-term approaches',
        'Distinguish between different debt management methods',
      ],
    },
    {
      section: 'Investments & Retirement',
      maxPoints: 15,
      expectations: [
        'Address whether to prioritize investing or retirement',
        'Justify reasoning based on client financial situation',
        'Provide personalized recommendation with clear analysis',
      ],
    },
    {
      section: 'Goal Attainment',
      maxPoints: 15,
      expectations: [
        'Recommend appropriate steps to achieve financial goals',
        'Provide actionable and personalized strategies',
        'Include timelines, prioritization, or measurement methods',
      ],
    },
    {
      section: 'Recommendations',
      maxPoints: 15,
      expectations: [
        'Offer specific financial recommendations',
        'Provide alternative approaches when applicable',
        'Support recommendations with clear justification',
      ],
    },
    {
      section: 'Professional Guidance',
      maxPoints: 10,
      expectations: [
        'Identify appropriate financial professionals',
        'Explain unique value each professional provides',
        'Base recommendations on individual needs',
      ],
    },
    {
      section: 'Source Citations',
      maxPoints: 10,
      expectations: [
        'Use professionally legitimate sources',
        'Provide compelling evidence to support statements',
        'Cite all sources properly',
      ],
    },
    {
      section: 'Presentation Flow & Organization',
      maxPoints: 10,
      expectations: [
        'Present in logical sequence',
        'Ensure statements are well-organized',
        'Demonstrate preparation',
      ],
    },
    {
      section: 'Delivery Skills',
      maxPoints: 10,
      expectations: [
        'Display confidence',
        'Use poised body language',
        'Maintain engaging eye contact',
        'Project voice effectively',
      ],
    },
    {
      section: 'Q&A Response',
      maxPoints: 10,
      expectations: [
        'Respond confidently to questions',
        'Provide clear and accurate answers',
        'Enhance overall presentation with responses',
      ],
    },
    {
      section: 'Adherence to Guidelines',
      maxPoints: 10,
      expectations: [
        'Use only allowable technology',
        'Align with assigned topic',
        'Follow all presentation protocols',
      ],
    },
  ];

  const presentationTips = [
    {
      title: 'Opening Strong',
      description:
        'Start with a brief introduction of Lorissa\'s situation and your role as financial planners. Establish credibility immediately.',
    },
    {
      title: 'Visual Aids',
      description:
        'Use charts and graphs to illustrate budget breakdowns, debt payoff timelines, and retirement projections. Visuals enhance understanding.',
    },
    {
      title: 'Tell a Story',
      description:
        'Frame your presentation as helping Lorissa move from her current state to her ideal future. Create a narrative arc.',
    },
    {
      title: 'Address Concerns',
      description:
        'Acknowledge Lorissa\'s family concerns about investing. Show empathy and education approach to overcome these barriers.',
    },
    {
      title: 'Prioritization',
      description:
        'Clearly explain why you\'re recommending certain actions first. Justify your priority order.',
    },
    {
      title: 'Realistic Expectations',
      description:
        'Be honest about tradeoffs. If she buys the $400k loft, what does she sacrifice? Alternatives matter.',
    },
    {
      title: 'Practice Transitions',
      description:
        'Smooth transitions between sections show professionalism. "Now that we\'ve covered budgeting, let\'s examine..."',
    },
    {
      title: 'Anticipate Questions',
      description:
        'Prepare for common questions: Why not pay off debt faster? What if rates drop? Should she wait to buy?',
    },
  ];

  const keyMessages = [
    {
      topic: 'Budgeting',
      key: 'Creates visibility and intentionality. Without tracking, money disappears into discretionary spending instead of achieving goals.',
    },
    {
      topic: 'Debt Management',
      key: 'At 4.99% interest and only $9,500 remaining, pay it off immediately using savings. Frees up cash flow and improves credit.',
    },
    {
      topic: 'Investing vs Retirement',
      key: 'Do both! Tax-advantaged retirement accounts first (401k, IRA), then taxable investing. Start now despite family concerns.',
    },
    {
      topic: 'Goal Attainment',
      key: 'All goals are achievable with discipline. Prioritize: debt payoff → retirement savings → home down payment → travel fund.',
    },
    {
      topic: 'Key Recommendation',
      key: 'Defer home purchase 12-18 months. Use time to save larger down payment, optimize budget, and invest for growth.',
    },
    {
      topic: 'Professional Help',
      key: 'Fee-only financial advisor most critical. Provides education, strategy, and accountability. Worth the investment.',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Presentation Preparation Guide</h2>
        <p className="text-emerald-50">
          Scoring rubric, key messages, and presentation tips for competition success
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <ClipboardList className="w-5 h-5 text-emerald-600" />
          <span>Official Scoring Rubric (150 Points Total)</span>
        </h3>

        <div className="space-y-4">
          {scoringCriteria.map((criteria, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-900">{criteria.section}</h4>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {criteria.maxPoints} pts
                </span>
              </div>
              <ul className="space-y-1">
                {criteria.expectations.map((expectation, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                    <CheckSquare className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{expectation}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
          <h4 className="font-semibold text-orange-900 mb-2">Penalty Points</h4>
          <ul className="space-y-1 text-sm text-orange-800">
            <li>• -5 points: Dress code violation</li>
            <li>• -5 points: Late arrival</li>
            <li>• Disqualification: Honor Code or Code of Conduct violations</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-emerald-600" />
          <span>Key Messages by Topic</span>
        </h3>

        <div className="space-y-3">
          {keyMessages.map((message, index) => (
            <div key={index} className="border-l-4 border-emerald-500 pl-4 bg-emerald-50 p-3 rounded">
              <h4 className="font-semibold text-gray-900 text-sm mb-1">{message.topic}</h4>
              <p className="text-sm text-gray-700">{message.key}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Presentation Tips & Best Practices</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {presentationTips.map((tip, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">{tip.title}</h4>
              <p className="text-sm text-gray-700">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Timing Breakdown</h3>

        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">7-Minute Presentation Structure</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                <span className="font-medium">Introduction & Problem Statement</span>
                <span className="text-blue-600 font-semibold">1:00</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-emerald-50 rounded">
                <span className="font-medium">Current Financial Overview</span>
                <span className="text-emerald-600 font-semibold">0:45</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                <span className="font-medium">Budgeting Analysis & Recommendations</span>
                <span className="text-purple-600 font-semibold">1:15</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                <span className="font-medium">Debt Management Strategy</span>
                <span className="text-orange-600 font-semibold">0:45</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-pink-50 rounded">
                <span className="font-medium">Investment & Retirement Plan</span>
                <span className="text-pink-600 font-semibold">1:15</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                <span className="font-medium">Housing Decision Analysis</span>
                <span className="text-yellow-600 font-semibold">0:45</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-teal-50 rounded">
                <span className="font-medium">Professional Guidance & Insurance</span>
                <span className="text-teal-600 font-semibold">0:30</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-emerald-50 rounded">
                <span className="font-medium">Summary & Action Plan</span>
                <span className="text-emerald-600 font-semibold">0:45</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-100 rounded font-bold">
                <span>Total Presentation Time</span>
                <span className="text-gray-900">7:00</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Remember</h4>
            <ul className="space-y-1 text-sm text-blue-800">
              <li>• 1-minute warning will be provided at 6:00 mark</li>
              <li>• 3 minutes for equipment setup before presentation</li>
              <li>• 3 minutes for Q&A after presentation</li>
              <li>• Time segments are exclusive - cannot shift between them</li>
              <li>• No interaction with judges during setup time</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Common Q&A Questions to Prepare For</h3>

        <div className="space-y-3">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-gray-900 text-sm mb-1">
              "What if interest rates drop significantly?"
            </h4>
            <p className="text-sm text-gray-700">
              Address refinancing opportunities and how that would impact recommendations. Mention
              that fundamental strategy remains sound regardless of rate environment.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4">
            <h4 className="font-semibold text-gray-900 text-sm mb-1">
              "Why not pay off the student loan over time instead of using savings?"
            </h4>
            <p className="text-sm text-gray-700">
              Explain opportunity cost, psychological benefits of being debt-free, improved cash
              flow, and credit score impact. With 4.99% rate and sufficient emergency fund
              remaining, immediate payoff is optimal.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-gray-900 text-sm mb-1">
              "What if Lorissa gets married soon?"
            </h4>
            <p className="text-sm text-gray-700">
              Discuss how plan would adapt: combined finances, potential dual income for faster
              goal achievement, updated insurance needs, and importance of pre-marital financial
              discussions.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="font-semibold text-gray-900 text-sm mb-1">
              "Is the home purchase realistic given her salary?"
            </h4>
            <p className="text-sm text-gray-700">
              Address affordability ratios, recommend waiting period for larger down payment,
              suggest lower-priced alternatives, and emphasize importance of maintaining other
              financial goals.
            </p>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h4 className="font-semibold text-gray-900 text-sm mb-1">
              "How would you address her family's negative views on investing?"
            </h4>
            <p className="text-sm text-gray-700">
              Emphasize education, start small to build confidence, highlight diversification and
              long-term perspective, share historical market data, and recommend working with
              trusted advisor for guidance.
            </p>
          </div>

          <div className="border-l-4 border-pink-500 pl-4">
            <h4 className="font-semibold text-gray-900 text-sm mb-1">
              "What if she loses her job?"
            </h4>
            <p className="text-sm text-gray-700">
              Discuss importance of emergency fund, recommend 6 months expenses given remote work
              volatility, unemployment benefits, and maintaining flexibility before major purchases.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Technology & Materials Checklist</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Required Items</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <CheckSquare className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Conference-provided nametag</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckSquare className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Photo identification</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckSquare className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Professional business attire (FBLA Dress Code)</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckSquare className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Laptop/tablet with presentation loaded</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckSquare className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>HDMI adapter (if needed for finals)</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckSquare className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Backup of presentation on USB drive</span>
              </li>
            </ul>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Prohibited Items</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start space-x-2">
                <span className="text-red-600 font-bold mt-0.5">✕</span>
                <span>Projectors (except in finals)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 font-bold mt-0.5">✕</span>
                <span>External speakers</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 font-bold mt-0.5">✕</span>
                <span>Internet-dependent content</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 font-bold mt-0.5">✕</span>
                <span>Clickable QR codes or links</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 font-bold mt-0.5">✕</span>
                <span>Food for consumption</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-600 font-bold mt-0.5">✕</span>
                <span>Animals (except service animals)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 border-2 border-emerald-500 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-emerald-900 mb-3">Final Success Tips</h3>
        <ul className="space-y-2 text-sm text-emerald-900">
          <li className="flex items-start space-x-2">
            <span className="text-emerald-600 font-bold">1.</span>
            <span>
              <strong>Practice your timing:</strong> Rehearse multiple times to ensure you can
              comfortably cover all sections in 7 minutes
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-emerald-600 font-bold">2.</span>
            <span>
              <strong>Know your data cold:</strong> Be able to reference key numbers without
              reading slides
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-emerald-600 font-bold">3.</span>
            <span>
              <strong>Team coordination:</strong> If presenting as a team, practice smooth
              transitions and ensure equal participation
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-emerald-600 font-bold">4.</span>
            <span>
              <strong>Backup plan:</strong> Be prepared to present without technology if issues
              arise
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-emerald-600 font-bold">5.</span>
            <span>
              <strong>Professional demeanor:</strong> Maintain confidence and professionalism from
              check-in through Q&A
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="text-emerald-600 font-bold">6.</span>
            <span>
              <strong>Cite your sources:</strong> Reference credible financial planning principles
              and industry standards throughout
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
