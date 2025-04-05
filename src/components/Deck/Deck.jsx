import React, { useState, useEffect } from 'react';
import './Deck.css';

const Deck = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(4);
    
    // Update cards per view based on screen size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setCardsPerView(1);
            } else if (window.innerWidth <= 1024) {
                setCardsPerView(2);
            } else if (window.innerWidth <= 1400) {
                setCardsPerView(3);
            } else {
                setCardsPerView(4);
            }
        };
        
        handleResize();
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const cards = [
        {
            title: "The Engineer",
            abilities: [
                "Full Stack Engineering",
                "Database Architecture: Design and implementation",
                "UI/UX Design",
                "Game Development: Game mechanics, interactivity and user engagement",
                "Authentication Systems",
                "API Integration, RESTful API endpoints",
                "Accessibility and inclusivity",
                "CRUD operations"
            ]
        },
        {
            title: "The Intel",
            abilities: [
                "Large-scale IT project management",
                "Software and hardware solutions for remote corporate workflows",
                "Software testing, maintenance and feature implementation",
                "Pioneering large scale AI implementation"
            ],
            buffs: [
                "Leadership experience",
                "Systems understanding",
                "Corporate processes knowledge"
            ]
        },
        {
            title: "The Gamer",
            abilities: [
                "Video game Twitch live streamer",
                "PC building and hardware optimization",
                "Video game playtester (Subject to NDA)",
                "3D video game asset design using Blender and Unity",
                "Content creation"
            ],
            buffs: [
                "The One Man Band: Lights, staging, audio, camera, input routing, graphics control... action.",
                "Realtime systems wizard",
                "Hardware Tinkerer",
                "Software Optimizer",
                "Creative technologist",
                "Virtual Architect"
            ]
        },
        {
            title: "Unlocked Abilities",
            specialAbilities: [
                {
                    name: "The Trailblazer",
                    description: "A catalyst for innovation, an expert of the cutting-edge."
                },
                {
                    name: "The Sure Bet",
                    description: "Leave it to her and ease your mind. She has it handled."
                },
                {
                    name: "The Spark",
                    description: "Players within range recieve a buff of +10 strength and +5 speed."
                },
                {
                    name: "The Runner",
                    description: "Seemingly endless stamina and adaptability. She'll do whatever it takes to get the job done."
                }
            ]
        }
    ];
    
    const maxIndex = Math.ceil(cards.length / cardsPerView) - 1;
    
    const handlePrevClick = () => {
        setCurrentIndex(prevIndex => Math.max(0, prevIndex - 1));
    };
    
    const handleNextClick = () => {
        setCurrentIndex(prevIndex => Math.min(maxIndex, prevIndex + 1));
    };
    
    const visibleCards = cards.slice(
        currentIndex * cardsPerView,
        (currentIndex * cardsPerView) + cardsPerView
    );
    
    return (
        <>
            <h2 className="title">SERA'S CUSTOM DECK</h2>
            <div className="deck-container">
                <div className="deck-navigation">
                    <button 
                        className="deck-nav-button" 
                        onClick={handlePrevClick}
                        disabled={currentIndex === 0}
                        aria-label="Previous cards"
                    >
                        ←
                    </button>
                    <button 
                        className="deck-nav-button" 
                        onClick={handleNextClick}
                        disabled={currentIndex === maxIndex}
                        aria-label="Next cards"
                    >
                        →
                    </button>
                </div>
                
                <div className="deck-grid">
                    {visibleCards.map((card, index) => (
                        <div key={index} className="deck-card">
                            <div className="deck-card-content">
                                <h2 className="deck-card-title">{card.title}</h2>
                                
                                {card.abilities && (
                                    <>
                                        <h3>Abilities</h3>
                                        <ul>
                                            {card.abilities.map((ability, abilityIndex) => (
                                                <li key={abilityIndex}>{ability}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                
                                {card.buffs && (
                                    <>
                                        <h3>Buffs</h3>
                                        <ul>
                                            {card.buffs.map((buff, buffIndex) => (
                                                <li key={buffIndex}>{buff}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                                
                                {card.specialAbilities && (
                                    <>
                                        {card.specialAbilities.map((ability, abilityIndex) => (
                                            <div key={abilityIndex}>
                                                <h3>{ability.name}</h3>
                                                <p className="deck-card-description">{ability.description}</p>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Deck;