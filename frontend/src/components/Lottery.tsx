import React from 'react';
import { DashboardContent } from './Dashboard';

const Lottery: React.FC = () => {
    return (
        <div className="lottery-page">
            <DashboardContent />
            
            <div className="card mb-4">
                <h2 className="card-header">Active Lottery Pools</h2>
                <div className="card-body p-4">
                    <div className="row g-4">
                        {[1, 2, 3, 4].map((pool) => (
                            <div key={pool} className="col-12 col-md-6">
                                <div className="pool-card">
                                    <div className="pool-header">
                                        <div>
                                            <h3 className="pool-title">Pool #{pool}</h3>
                                            <p className="pool-prize">Prize Pool: <span className="text-purple-light">1000 SOL</span></p>
                                        </div>
                                        <span className="pool-status">Active</span>
                                    </div>
                                    <div className="pool-info">
                                        <div className="info-row">
                                            <span>Total Tickets:</span>
                                            <span className="text-purple-light">156</span>
                                        </div>
                                        <div className="info-row">
                                            <span>Your Tickets:</span>
                                            <span className="text-purple-light">8</span>
                                        </div>
                                        <div className="info-row">
                                            <span>Time Left:</span>
                                            <span className="text-purple-light">2d 5h</span>
                                        </div>
                                        <div className="info-row">
                                            <span>Win Rate:</span>
                                            <span className="text-purple-light">5.12%</span>
                                        </div>
                                    </div>
                                    <div className="pool-actions">
                                        <button className="btn btn-secondary w-100 mb-2">
                                            Buy Tickets
                                        </button>
                                        <button className="btn btn-outline w-100">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="card">
                <h2 className="card-header">Past Winners</h2>
                <div className="card-body p-4">
                    <div className="winners-list">
                        {[1, 2, 3].map((winner) => (
                            <div key={winner} className="winner-card">
                                <div className="winner-info">
                                    <h4 className="winner-pool">Pool #{100 + winner}</h4>
                                    <p className="winner-address">Winner: 0x1234...5678</p>
                                </div>
                                <div className="winner-prize">
                                    <span className="prize-amount">500 SOL</span>
                                    <span className="prize-date">2 days ago</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lottery;
