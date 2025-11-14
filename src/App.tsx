import { useState } from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import BudgetAnalysis from './components/BudgetAnalysis';
import DebtManagement from './components/DebtManagement';
import RetirementAnalysis from './components/RetirementAnalysis';
import HousingCalculator from './components/HousingCalculator';
import Recommendations from './components/Recommendations';
import PresentationPrep from './components/PresentationPrep';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && <Overview />}
        {activeTab === 'budget' && <BudgetAnalysis />}
        {activeTab === 'debt' && <DebtManagement />}
        {activeTab === 'retirement' && <RetirementAnalysis />}
        {activeTab === 'housing' && <HousingCalculator />}
        {activeTab === 'recommendations' && <Recommendations />}
        {activeTab === 'presentation' && <PresentationPrep />}
      </main>
    </div>
  );
}

export default App;
