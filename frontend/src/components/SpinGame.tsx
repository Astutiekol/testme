import React, { useState } from 'react';
import './SpinGame.css';

const SpinGame: React.FC = () => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [result, setResult] = useState('');
    const [rotationDegree, setRotationDegree] = useState(0);
    const [error, setError] = useState<string | null>(null);

    // Define sections with colors and prizes
    const sections: { prize: string; color: string }[] = [
        { prize: '100 XP', color: '#FF4E4E' },
        { prize: '200 XP', color: '#3FB8AF' },
        { prize: '500 XP', color: '#FF9800' },
        { prize: '1000 XP', color: '#7AC74F' },
        { prize: '2000 XP', color: '#FF4E4E' },
        { prize: '5000 XP', color: '#3FB8AF' },
        { prize: '10000 XP', color: '#FF9800' },
        { prize: '3000 XP', color: '#7AC74F' },
        { prize: '300 XP', color: '#FF4E4E' },
        { prize: '1500 XP', color: '#3FB8AF' },
        { prize: '800 XP', color: '#FF9800' },
        { prize: '400 XP', color: '#7AC74F' },
        { prize: '2500 XP', color: '#FF5733' }, // New prize
        { prize: '6000 XP', color: '#C70039' }, // New prize
        { prize: '12000 XP', color: '#900C3F' }, // New prize
        { prize: '3500 XP', color: '#581845' }  // New prize
    ];

    const sectionDegree = 360 / sections.length;

    const spinWheel = () => {
        if (isSpinning) return;
        
        setIsSpinning(true);
        setResult('');

        const winningIndex = Math.floor(Math.random() * sections.length);
        const baseRotation = (winningIndex * sectionDegree) + (sectionDegree / 2);
        const fullRotations = (5 + Math.floor(Math.random() * 2)) * 360;
        const totalRotation = -(fullRotations + baseRotation);
        
        setRotationDegree(totalRotation);
        
        setTimeout(() => { 
            if (winningIndex < 0 || winningIndex >= sections.length) {
                setError('Invalid winning index');
                setIsSpinning(false);
                return;
            }

            setResult(sections[winningIndex].prize);
            setIsSpinning(false);
        }, 4000);
    };

    return (
        <div className="text-center">
            <h2 className="text-light mb-3" style={{ fontSize: '2.5rem', color: '#9333ea' }}>
                Exclusive Rewards
            </h2>
            <p className="text-light mb-4" style={{ fontSize: '1.1rem', opacity: 0.8, color: '#e2e8f0' }}>
                Spin the wheel for a chance to win XP rewards!
            </p>
            
            <div className="wheel-outer">
                <div className="wheel-container">
                    <div className="wheel-border">
                        <div className="wheel-lights"></div>
                        <div className="wheel" style={{ transform: `rotate(${rotationDegree}deg)` }}>
                            {sections.map((section, index) => {
                                const rotation = index * sectionDegree;
                                return (
                                    <div key={index} className="wheel-section" style={{ transform: `rotate(${rotation}deg)`, background: section.color }}>
                                        <span className="prize-text" style={{ transform: `rotate(${-rotation}deg)` }}>
                                            {section.prize}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="wheel-center">
                            <div className="wheel-arrow"></div>
                        </div>
                    </div>
                </div>
            </div>

            <button aria-label="Spin the wheel" onClick={spinWheel} disabled={isSpinning} className="spin-button">
                {isSpinning ? 'Spinning...' : 'SPIN NOW'}
            </button>

            {error && <p className="text-danger">{error}</p>}
            {result && (
                <div className="mt-4">
                    <h3 className="text-success mb-2" role="alert">Congratulations!</h3>
                    <p className="text-light h4">You won {result}!</p>
                    <p className="text-light mt-3" style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                        XP points added to your account
                    </p>
                </div>
            )}
        </div>
    );
};

export default SpinGame;
