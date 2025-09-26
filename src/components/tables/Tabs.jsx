import React, { useState } from 'react'

function Tabs() {
    const [activeTab, setActiveTab] = useState('Campaigns');
    const tabs = ['Campaigns', 'Ad Groups', 'Keywords', 'Ads'];
    return (
        <div className="border-b border-gray-200">
            <div className="flex">
                {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab
                        ? 'border-orange-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                >
                    {tab}
                </button>
                ))}
            </div>
        </div>
    );
}

export default Tabs;