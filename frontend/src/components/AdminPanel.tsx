import React, { useState } from 'react';

const AdminPanel: React.FC = () => {
    const [newFee, setNewFee] = useState('');
    const [withdrawAmount, setWithdrawAmount] = useState('');

    return (
        <div className="card">
            <h2 className="card-header">Admin Panel</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                    <div className="bg-black/30 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">Pool Statistics</h3>
                        <div className="space-y-2">
                            <p className="text-gray-300">Total Value Locked: <span className="text-purple-400">5,000 SOL</span></p>
                            <p className="text-gray-300">Active Pools: <span className="text-purple-400">3</span></p>
                            <p className="text-gray-300">Total Users: <span className="text-purple-400">250</span></p>
                            <p className="text-gray-300">Total SBTs Minted: <span className="text-purple-400">75</span></p>
                        </div>
                    </div>

                    <div className="bg-black/30 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">Fee Management</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    New Fee Percentage
                                </label>
                                <input
                                    type="number"
                                    className="input w-full"
                                    placeholder="Enter new fee %"
                                    value={newFee}
                                    onChange={(e) => setNewFee(e.target.value)}
                                />
                            </div>
                            <button className="button w-full">
                                Update Fee
                            </button>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-black/30 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">Treasury</h3>
                        <div className="space-y-2 mb-4">
                            <p className="text-gray-300">Available Balance: <span className="text-purple-400">100 SOL</span></p>
                            <p className="text-gray-300">Pending Rewards: <span className="text-purple-400">25 SOL</span></p>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Withdrawal Amount
                                </label>
                                <input
                                    type="number"
                                    className="input w-full"
                                    placeholder="Enter amount"
                                    value={withdrawAmount}
                                    onChange={(e) => setWithdrawAmount(e.target.value)}
                                />
                            </div>
                            <button className="button w-full">
                                Withdraw Funds
                            </button>
                        </div>
                    </div>

                    <div className="bg-black/30 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-4">Emergency Controls</h3>
                        <div className="space-y-3">
                            <button className="button w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600">
                                Pause All Pools
                            </button>
                            <button className="button w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600">
                                Emergency Withdraw
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
