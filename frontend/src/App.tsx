import React, { useState, useEffect } from 'react';
import Lottery from './components/Lottery';
import SBTMint from './components/SBTMint';
import AdminPanel from './components/AdminPanel';
import SpinGame from './components/SpinGame';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is included for collapsible navbar

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState('features');
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const renderHero = () => (
        <div className="hero-section">
            <div className="stars-background"></div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-7 hero-content">
                        <h1 className="hero-title">
                           <span className="digidraw-text">DigiDraw</span> Revolutionizing NFT And Blockchain-Based Lotteries
                        </h1>
                        <p className="hero-subtitle">
                            DigiDraw is a secure and transparent platform for NFT minting and blockchain-based lotteries. We are fostering a vibrant community that explores innovative use cases for blockchain technology. Our vision is to become the leading platform for NFT enthusiasts and lottery participants by leveraging blockchain's transparency and decentralization.
                        </p>
                        <div className="action-wrapper">
                            <button className="upload-button">
                                <svg className="upload-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M17 8L12 3L7 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 3V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Connect Wallet
                            </button>
                            <div className="social-links">
                                <a href="https://x.com/DigiDraw_Games" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <svg className="social-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M23 3.01006C22.0424 3.68553 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 22.6608 4.40277 23 3.01006Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                                <a href="https://t.me/DigiDraw_Announcements" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <svg className="social-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 d-none d-lg-block">
                        <div className="hero-image">
                            <img src="/images/penguin.png" alt="Penguin" className="ai-robot" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'features':
                return renderHero();
            case 'lottery':
                return <Lottery />;
            case 'examples':
                return <SpinGame />;
            case 'pricing':
                return <AdminPanel />;
            default:
                return renderHero();
        }
    };

    return (
        <div className="min-vh-100 bg-black">
            {/* Navigation */}
            <nav className={`navbar navbar-expand-lg fixed-top nav-container ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container nav-inner">
                    <a href="/" className="navbar-brand d-flex align-items-center">
                        <svg className="brand-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="ms-2">DigiDraw</span>
                    </a>

                    <button 
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" // Ensure this matches the collapse id
                        aria-controls="navbarNav"
                        aria-expanded={isNavCollapsed ? "false" : "true"}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${!isNavCollapsed ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <button 
                                    className={`nav-link ${activeTab === 'features' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('features')}
                                >
                                    Features
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className={`nav-link ${activeTab === 'lottery' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('lottery')}
                                >
                                    Lottery
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className={`nav-link ${activeTab === 'examples' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('examples')}
                                >
                                    Exclusive Reward
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className={`nav-link ${activeTab === 'pricing' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('pricing')}
                                >
                                    Pricing
                                </button>
                            </li>
                        </ul>
                        <div className="nav-buttons">
                            <button className="btn sign-in-btn">Sign In</button>
                            <button className="btn get-started-btn">Get Started</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className={`main-content ${activeTab !== 'features' ? 'mt-24' : ''}`}>
                <div className="container">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default App;
