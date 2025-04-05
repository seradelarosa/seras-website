import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [visibleItems, setVisibleItems] = useState(4);
  
  const portfolioItems = [
    {
      id: 1,
      title: "Event Horizon Liability Solutions",
      description: "An immersive cyberpunk-inspired hacking game where players take on the role of a cybersecurity operative for a suspicious and futuristic insurance company. Complete tasks like stopping viruses, removing alien infiltrators posing as employees, and deleting files with sensitive company information.",
      image: "/images/ehls.png",
      tech: ["Figma", "HTML", "JavaScript", "Node.js", "Express", "MongoDB"],
      demoLink: "https://event-horizon-liability-solutions.netlify.app",
      repoLink: "https://github.com/radford-coding/project-3-front-end-Event-Horizon-Liability-Solutions"
    },
    {
      id: 2,
      title: "Cyberrealm",
      description: "Cyberrealm is a secret, cozy digital hangout, a blog style social media site inspired by MySpace. Designed and developed a full-stack application from the ground up, implementing both front-end and back-end systems with a mobile-first UI.",
      image: "/images/cyberrealm.png",
      tech: ["Figma", "HTML", "JavaScript", "Node.js", "Express", "MongoDB", "EJS"],
      repoLink: "https://github.com/seradelarosa/cyberrealm"
    },
    {
      id: 3,
      title: "Tamagotchi",
      description: "A browser-based Tamagotchi game where users care for a virtual pet by feeding, playing, and gifting items to keep it happy and progress through day cycles. Sole developer responsible for UI design, gameplay logic, and accessibility considerations.",
      image: "/images/tamagotchi.png",
      tech: ["HTML", "JavaScript", "Node.js", "Express"],
      repoLink: "https://github.com/seradelarosa/tamagotchi"
    },
    {
      id: 4,
      title: "CRUDdy Shopping Simulator",
      description: "Get your shopping fix without that wallet pain by endlessly adding things to your cart and removing them (or not)! This woMEN-stack, CRUD application lets you shop makeup, skincare and loungewear until there's no inventory left, without ever touching the bank.",
      image: "/images/cruddy-shop-sim.png",
      tech: ["HTML", "JavaScript", "Node.js", "Express", "MongoDB", "EJS"],
      demoLink: "https://shopping-simulator.onrender.com",
      repoLink: "https://github.com/seradelarosa/Shopping-Simulator-MENStack-CRUDApp"
    },
    {
      id: 5,
      title: "Dungeons & Devs v.2",
      description: "A pixel-style mobile game inspired by Dungeons & Dragons with a developer twist. Battle and defeat bosses using code snippets, level up, and unlock new locations and advanced code.",
      image: "/images/DND.png",
      tech: ["React", "CSS", "JavaScript"],
      demoLink: "https://www.dropbox.com/s/c4yrfb1pfmcqxel/finalproject.mp4?dl=0",
      repoLink: "https://github.com/hackpres/DnDevs_React"
    },
    {
      id: 6,
      title: "Dungeons & Devs v.1",
      description: "A turn-based battle game where users choose characters with different strengths and battle bosses using stat-boosting cards.",
      image: "/images/dnd1.png",
      tech: ["React", "CSS", "JavaScript"],
      demoLink: "https://dn-devs-react.vercel.app/",
      repoLink: "https://github.com/wtguenthner/Dungeons-Devs"
    },
    {
      id: 7,
      title: "Express.js Note Taker",
      description: "A note-taking application with Express.js backend that saves and retrieves notes from a JSON file.",
      image: "/images/express-notes.png",
      tech: ["Express.js", "Node.js", "JSON"],
      repoLink: "https://github.com/sophiadelarosa/Express.js-Note-Taker"
    },
    {
      id: 8,
      title: "Object-Oriented Programming Team Profile Generator",
      description: "This is a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. This application uses Jest for testing.",
      image: "/images/cli-teamprofile.png",
      tech: ["Node.js", "Jest", "HTML"],
      demoLink: "https://www.dropbox.com/s/hcjlbvinlwxzm49/teamprofilegeneratordemo.mp4?dl=0",
      repoLink: "https://github.com/sophiadelarosa/Node.js-CLI-Team-Profile-Generator"
    },
    {
      id: 9,
      title: "Music Discovery App",
      description: "IMDA is an international music discovery app. It utilizes Spotify's API to search for songs by country and genre, which the user is then able to favorite and view in their favorites list on their profile page.",
      image: "/images/imda.png",
      tech: ["JavaScript", "API", "Spotify"],
      demoLink: "https://sophiadelarosa.github.io/Music-Discovery-App/",
      repoLink: "https://github.com/sophiadelarosa/Music-Discovery-App"
    },
    {
      id: 10,
      title: "Day Planner using Third-Party APIs",
      description: "Use this simple planner to schedule your day by filling in tasks into the hour timeblocks. The date is listed at the top of the page and will always be correct. Hitting the save button after writing in the textbox will save your input, even on refreshing the page. Hour blocks are color coded based on the current time, which updates every 15 seconds. Past timeblocks have a gray tab, future timeblocks are tabbed in green and the current timeblock is highlighted in yellow.",
      image: "/images/dayplanner.png",
      tech: ["JavaScript", "Moment.js", "Local Storage"],
      demoLink: "https://sophiadelarosa.github.io/Moment.js-Workday-Scheduler/",
      repoLink: "https://github.com/sophiadelarosa/Moment.js-Workday-Scheduler"
    },
    {
      id: 11,
      title: "Web API Code Quiz",
      description: "This quiz displays one question at a time using a function to replace the main content with question items in an array. Points are tallied and your score is shown at the end. You can input your initials and the initials and score are added to a highscore board from local storage. A timer starts at the beginning of the quiz, and if you answer a question incorrectly, time is subtracted from the clock.",
      image: "/images/codequiz.png",
      tech: ["JavaScript", "Web API", "Local Storage"],
      demoLink: "https://sophiadelarosa.github.io/Web-API-Code-Quiz/",
      repoLink: "https://github.com/sophiadelarosa/Web-API-Code-Quiz"
    }
  ];
  
  const handleSeeMore = () => {
    setVisibleItems(prevCount => prevCount + 2);
  };
  
  const handleSeeLess = () => {
    setVisibleItems(4);
  };
  
  const visiblePortfolioItems = portfolioItems.slice(0, visibleItems);
  const hasMoreItems = visibleItems < portfolioItems.length;
  const showSeeLess = visibleItems > 4;
  
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h2 className="title">PORTFOLIO</h2>
      </div>

      <div className="portfolio-grid">
        {visiblePortfolioItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <div className="portfolio-item-image-container">
              <img src={item.image} alt={item.title} className="portfolio-item-image" />
            </div>
            <div className="portfolio-item-content">
              <h3 className="portfolio-item-title">{item.title}</h3>
              <p className="portfolio-item-description">{item.description}</p>
              <div className="portfolio-item-tech">
                {item.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="portfolio-item-links">
                {item.demoLink && (
                  <button
                    onClick={() => window.open(item.demoLink, "_blank")}
                    className="portfolio-link"
                  >
                    Demo
                  </button>
                )}
                <button
                  onClick={() => window.open(item.repoLink, "_blank")}
                  className="portfolio-link"
                >
                  Repo
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="portfolio-buttons">
        {hasMoreItems && (
          <button className="see-more-button" onClick={handleSeeMore}>
            See More
          </button>
        )}
        
        {showSeeLess && (
          <button className="see-less-button" onClick={handleSeeLess}>
            See Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
