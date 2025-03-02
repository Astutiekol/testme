import React, { useState } from 'react';

const PoolInterface: React.FC = () => {
    const [ticketAmount, setTicketAmount] = useState('');

    return (
        <div className="card">
            <h2 className="card-header">Pool Interface</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="bg-black/30 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Pool Statistics</h3>
                        <div className="space-y-2">
                            <p className="text-gray-300">Total Pool Size: <span className="text-purple-400">1000 SOL</span></p>
                            <p className="text-gray-300">Current Tickets: <span className="text-purple-400">150</span></p>
                            <p className="text-gray-300">Time Remaining: <span className="text-purple-400">2d 5h 30m</span></p>
                        </div>
                    </div>

                    <div className="bg-black/30 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Your Stats</h3>
                        <div className="space-y-2">
                            <p className="text-gray-300">Your Tickets: <span className="text-purple-400">5</span></p>
                            <p className="text-gray-300">Win Chance: <span className="text-purple-400">3.33%</span></p>
                        </div>
                    </div>
                </div>

                <div className="bg-black/30 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-4">Buy Tickets</h3>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Number of Tickets
                            </label>
                            <input
                                type="number"
                                className="input w-full"
                                placeholder="Enter amount"
                                value={ticketAmount}
                                onChange={(e) => setTicketAmount(e.target.value)}
                            />
                        </div>
                        <div className="text-gray-300 text-sm">
                            Total Cost: <span className="text-purple-400">{Number(ticketAmount) || 0} SOL</span>
                        </div>
                        <button className="button w-full">
                            Buy Tickets
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoolInterface;
