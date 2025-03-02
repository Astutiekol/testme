import React, { useState } from 'react';

const SBTMint: React.FC = () => {
    const [selectedTier, setSelectedTier] = useState('');

    const tiers = [
        { id: 'bronze', name: 'Bronze', cost: '10 SOL', benefits: 'Basic lottery participation' },
        { id: 'silver', name: 'Silver', cost: '50 SOL', benefits: 'Enhanced win rates, exclusive pools' },
        { id: 'gold', name: 'Gold', cost: '100 SOL', benefits: 'Premium features, highest win rates' },
    ];

    return (
        <div className="card">
            <h2 className="card-header">Soulbound Token Mint</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tiers.map((tier) => (
                    <div 
                        key={tier.id}
                        className={`bg-black/30 rounded-lg p-6 border-2 transition-all duration-200 cursor-pointer
                            ${selectedTier === tier.id 
                                ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
                                : 'border-transparent hover:border-purple-500/50'}`}
                        onClick={() => setSelectedTier(tier.id)}
                    >
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                                {tier.name}
                            </h3>
                            <div className="text-2xl font-bold text-white mb-4">
                                {tier.cost}
                            </div>
                            <p className="text-gray-300 text-sm mb-6">
                                {tier.benefits}
                            </p>
                            <button 
                                className={`button w-full ${selectedTier === tier.id ? 'opacity-100' : 'opacity-70'}`}
                            >
                                Select {tier.name}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-black/30 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Your SBT Status</h3>
                <div className="space-y-2">
                    <p className="text-gray-300">Current Tier: <span className="text-purple-400">None</span></p>
                    <p className="text-gray-300">Benefits Active: <span className="text-purple-400">No</span></p>
                    <div className="mt-4">
                        <button 
                            className="button w-full"
                            disabled={!selectedTier}
                        >
                            Mint SBT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SBTMint;
