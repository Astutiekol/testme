import React from 'react';

export const DashboardContent: React.FC = () => {
    return (
        <div className="card mb-4">
            <h2 className="card-header">Your Dashboard</h2>
            <div className="card-body p-4">
                <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-header">Wallet</div>
                            <div className="card-body">
                                <p>Balance: <span className="text-purple-light">125.5 SOL</span></p>
                                <p>Active Tickets: <span className="text-purple-light">15</span></p>
                                <button className="btn btn-secondary">Connect Wallet</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-header">SBT Status</div>
                            <div className="card-body">
                                <p>Current Tier: <span className="text-purple-light">Silver</span></p>
                                <p>Win Rate Bonus: <span className="text-purple-light">+15%</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard-page">
            <DashboardContent />
        </div>
    );
};

export default Dashboard;
