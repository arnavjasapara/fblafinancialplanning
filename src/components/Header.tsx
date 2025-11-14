import { DollarSign } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'budget', label: 'Budget Analysis' },
    { id: 'debt', label: 'Debt Management' },
    { id: 'retirement', label: 'Retirement' },
    { id: 'housing', label: 'Housing' },
    { id: 'recommendations', label: 'Recommendations' },
    { id: 'presentation', label: 'Presentation Prep' },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">FBLA Financial Planning</h1>
              <p className="text-xs text-gray-500">Competition Analysis Tool</p>
            </div>
          </div>
        </div>
        <nav className="flex space-x-1 overflow-x-auto pb-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
