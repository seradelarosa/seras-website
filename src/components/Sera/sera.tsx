import React from "react";
import "./style.css";
import Timeline from '../Timeline/timeline';

const SeraPage = (): JSX.Element => {
  return (
    <div className="sera-page">
      <body>
        <div className="page-margins">

          <header>
            <h1 className="greeting">Hi! I'm Sera.</h1>
          </header>

          <div className="background">
            <div id="aboutme-section" className="topic">

              <div className="inline">
                <img id="profilepic" src="https://i.imgur.com/DQ4lGot.jpeg" alt="Profile Picture"></img>
                <div>
                  <p >Hi, my name is Sera! I'm a third year Software Engineer spending Spring 2025 sharpening my skills at the Adobe Digital Academy Software Engineering program on a scholarship. <br />
                    <br /> All of my hobbies and skills revolve around technology and work hand-in-hand together. From video editing,
                    to leading CNN's Remote Workflow Technology team; from computer building to hardware and software optimization to front-end and back-end software engineering; from video game streamer, to debugger
                    and tester, to Blender and Unity game asset design; from Virtual Reality to AI development pioneering. <br />
                    <br /> I'm working every day to deepen my knowledge and understanding of all things technology. Let's learn together!</p>
                  <nav>
                    <a href="#portfolio-section"><button className="button-56" role="button">portfolio</button></a>
                    <a href="#resume-section"><button className="button-56" role="button">resume</button></a>
                    <a href="#timeline-section"><button className="button-56" role="button">timeline</button></a>
                  </nav>


                </div>
              </div>
            </div>
          </div>

          <div className="cloud-div">
            <ul className="cloud" role="navigation" aria-label="Webdev word cloud">
              <li><a href="#" data-weight="9">Skills:</a></li>
              <li><a href="#" data-weight="1">IT Project Management</a></li>
              <li><a href="#" data-weight="5">HTML</a></li>
              <li><a href="#" data-weight="8">CSS</a></li>
              <li><a href="#" data-weight="6">JavaScript</a></li>
              <li><a href="#" data-weight="4">React</a></li>
              <li><a href="#" data-weight="5">PWA</a></li>
              <li><a href="#" data-weight="6">UI</a></li>
              <li><a href="#" data-weight="2">Node</a></li>
              <li><a href="#" data-weight="9">Express.js</a></li>
              <li><a href="#" data-weight="3">Expo</a></li>
              <li><a href="#" data-weight="7">Metro</a></li>
              <li><a href="#" data-weight="8">Android Studio</a></li>
              <li><a href="#" data-weight="1">ORM</a></li>
              <li><a href="#" data-weight="3">MVC</a></li>
              <li><a href="#" data-weight="3">Powershell</a></li>
              <li><a href="#" data-weight="3">Terminal</a></li>
              <li><a href="#" data-weight="3">Bash</a></li>
              <li><a href="#" data-weight="3">Command Prompt</a></li>
              <li><a href="#" data-weight="3">Cross-env</a></li>
              <li><a href="#" data-weight="3">Data Persistence</a></li>
              <li><a href="#" data-weight="3">APIs</a></li>
              <li><a href="#" data-weight="3">Git</a></li>
              <li><a href="#" data-weight="3">AI testing</a></li>
              <li><a href="#" data-weight="3">Prompt Engineering</a></li>
              <li><a href="#" data-weight="3">AVDs</a></li>
              <li><a href="#" data-weight="3">Intel HAXM</a></li>
            </ul>
          </div>

          <div className="background">
            <div id="portfolio-section" className="topic">

              <div className="flexObject">
                <h2>Fun things I did:</h2>
                <h3>(that I can share)</h3>
                <a href="#resume-section"><button className="button-56" role="button">skip:(</button></a>
              </div>

              <h3 className="divider">Dungeons & Devs v.2</h3>
              <div className="inline">
                <p>This is a pixel-style mobile game inspired by the game Dungeons & Dragons but with a developer twist. The
                  objective is to battle and defeat a boss using code snippets. After three defeated bosses, the user can level
                  up, unlock the next location and more advanced code snippets.</p>
                <div className="stack">
                  <a href="https://www.dropbox.com/s/c4yrfb1pfmcqxel/finalproject.mp4?dl=0" target="_blank"> <button className="button-56" role="button">Demo</button> </a>
                  <a href="https://github.com/hackpres/DnDevs_React" target="_blank"> <button className="button-56" role="button">Repo</button> </a>
                </div>
              </div>

              <h3 className="divider">Progressive Web Application Text Editor</h3>
              <div className="inline flexObject">
                <p>This is a single page text editor application that runs in the browser and meets the PWA criteria. It features
                  data persistence techniques that serve as redundancy in case one of the options is not supported by the browser.
                  The application also functions offline.</p>
                <div className="stack">
                  <a href="https://www.dropbox.com/s/abnflpti6d2emjg/19-PWA-text-editor.mp4?dl=0" target="_blank"> <button className="button-56" role="button">Demo</button> </a>
                  <a href="https://github.com/sophiadelarosa/19-PWA-text-editor" target="_blank"> <button className="button-56" role="button">Repo</button> </a>
                </div>
              </div>

              <h3 className="divider">NoSQL Social Networking App</h3>
              <div className="inline flexObject">
                <p>This is an API for a social network web application where users can share their thoughts, react to friends
                  thoughts, and create a friend list. It uses Express.js for routing, a MongoDB database, the Mongoose ODM, and
                  the native JavaScript Date object to format timestamps.</p>
                <div className="stack">
                  <a href="https://www.dropbox.com/s/ubuezk0sg6hi4xt/18-No-SQL-API.mp4?dl=0" target="_blank"> <button className="button-56" role="button">Demo</button> </a>
                  <a href="https://github.com/sophiadelarosa/18-NoSQL-Social-Network-API" target="_blank"> <button className="button-56" role="button">Repo</button> </a>
                </div>
              </div>

              <h3 className="divider"> Dungeons & Devs v.1</h3>
              <div className="inline flexObject">
                <p>Dungeons & Devs is a turn-based battle game. The user chooses from a character list, each with different
                  strengths, and battles a boss using cards that boost various character stats.</p>
                <div className="stack">
                  <a href="https://dn-devs-react.vercel.app/" target="_blank"> <button className="button-56" role="button">Demo</button> </a>
                  <a href="https://github.com/wtguenthner/Dungeons-Devs" target="_blank"> <button className="button-56" role="button">Repo</button> </a>
                </div>
              </div>

              <h3 className="divider">Object-relational mapping (ORM) E-Commerce back-end</h3>
              <div className="inline flexObject">
                <p>Use this CLI application to manage your internet retail company's database and easily view all or individual
                  categories, products and tags, create new ones or delete them. This e-commerce site back end uses an Express.js
                  API and Sequelize to interact with a MySQL database.</p>
                <div className="stack">
                  <a href="https://www.dropbox.com/s/dc0te6egx24dlr8/ORMretailbackenddemo.mp4?dl=0" target="_blank"> <button className="button-56" role="button">Demo</button> </a>
                  <a href="https://github.com/sophiadelarosa/ORM-E-Commerce-Back-End" target="_blank"> <button className="button-56" role="button"> Repo</button> </a>
                </div>
              </div>

              <h3 className="divider">Express.js Note Taker</h3>
              <div className="inline flexObject">
                <p>This Note Taker application can be used to write and save notes using an Express.js back end and will save and
                  retrieve note data from a JSON file. Clone the repository and install Node. Run "npm i" to install the
                  dependencies and then "npm start" to run the server. This server runs on port 5000. View the page by typing
                  "localhost:5000" in your browser.</p>
                <div className="stack">
                  <a href="https://github.com/sophiadelarosa/Express.js-Note-Taker" target="_blank"> <button className="button-56" role="button">Repo</button> </a>
                </div>
              </div>

              <h3 className="divider">Object-Oriented Programming Team Profile Generator</h3>
              <div className="inline">
                <p>This is a Node.js command-line application that takes in information about employees on a software engineering
                  team, then generates an HTML webpage that displays summaries for each person. This application uses Jest for
                  testing.</p>
                <div className="stack">
                  <a href="https://www.dropbox.com/s/hcjlbvinlwxzm49/teamprofilegeneratordemo.mp4?dl=0" target="_blank"> <button className="button-56" role="button">Demo</button> </a>
                  <a href="https://github.com/sophiadelarosa/Node.js-CLI-Team-Profile-Generator" target="_blank"> <button className="button-56" role="button">Repo</button> </a>
                </div>
              </div>

              <h3 className="divider">Music Discovery App</h3>
              <div className="inline flexObject">
                <p>IMDA is an international music discovery app. It utilizes Spotify's API to search for songs by country and
                  genre, which the user is then able to favorite and view in their favorites list on their profile page.</p>
                <div className="stack">
                  <a href="https://sophiadelarosa.github.io/Music-Discovery-App/" target="_blank"> <button className="button-56" role="button">Demo</button> </a>
                  <a href="https://github.com/sophiadelarosa/Music-Discovery-App" target="_blank"> <button className="button-56" role="button">Repo</button> </a>
                </div>
              </div>

              <h3 className="divider"> Day Planner using Third-Party APIs </h3>
              <div className="inline flexObject">
                <p>Use this simple planner to schedule your day by filling in tasks into the hour timeblocks. The date is listed at
                  the top of the page and will always be correct. Hitting the save button after writing in the textbox will save
                  your input, even on refreshing the page. Hour blocks are color coded based on the current time, which updates
                  every 15 seconds. Past timeblocks have a gray tab, future timeblocks are tabbed in green and the current
                  timeblock is highlighted in yellow.</p>
                <div className="stack">
                  <a href="https://sophiadelarosa.github.io/Moment.js-Workday-Scheduler/" target="_blank"><button className="button-56" role="button"> Demo </button></a>
                  <a href="https://github.com/sophiadelarosa/Moment.js-Workday-Scheduler" target="_blank"><button className="button-56" role="button"> Repo </button></a>
                </div>
              </div>

              <h3 className="divider"> Web API Code Quiz </h3>
              <div className="inline flexObject">
                <p>This quiz displays one question at a time using a function to replace the main content with question items in an
                  array. Points are tallied and your score is shown at the end. You can input your initials and the initials and
                  score are added to a highscore board from local storage. A timer starts at the beginning of the quiz, and when
                  it reaches zero, the endQuiz() function is called.</p>
                <div className="stack">
                  <a href="https://sophiadelarosa.github.io/Web-API-Code-Quiz/" target="_blank"><button className="button-56" role="button"> Demo </button></a>
                  <a href="https://github.com/sophiadelarosa/Web-API-Code-Quiz" target="_blank"><button className="button-56" role="button"> Repo </button></a>
                </div>
              </div>

              <h3 className="divider"> JavaScript Password Generator </h3>
              <div className="inline flexObject">
                <p> This generator uses a function to generate a random number which is used to select characters in dataset
                  strings. Each dataset string is only included if the user confirms the criteria. The new randomized password is
                  then returned to the textbox on the page.</p>
                <div className="stack">
                  <a href="https://sophiadelarosa.github.io/Password-Generator/" target="_blank"><button className="button-56" role="button"> Demo </button></a>
                  <a href="https://github.com/sophiadelarosa/Password-Generator" target="_blank"><button className="button-56" role="button"> Repo </button></a>
                </div>
              </div>
            </div>
          </div>

          <div className="background">
            <div id="resume-section" className="topic">

                <div className="inline flexObject">
                  <h2> Experience </h2>
                    <a href="#timeline-section"><button className="button-56" role="button">visualize</button></a>
                </div>
                <h3> Software Developer I</h3>
                <h4> Brain Rain Solutions | Atlanta, GA </h4>
                <p>&#8226; React Native application development.<br />
                &#8226; Environment setup using JDK-21, variable pathing and execution policy bypassing.<br />
                &#8226; Environment building using Expo, Metro, Yarn, Chocolatey, Gradle, HAXM, Android Studio Koala.<br />
                &#8226; Mixpanel data tracking architecture integration and routing setup.<br />
                &#8226; Component generation and design.<br />
                &#8226; QA application testing.</p>

                <h3> Production Assistant </h3>
                <h4> CNN | Atlanta, GA </h4>
                <p> &#8226; Editing and distributing news video to CNN affiliates using Premiere Pro.<br />
                &#8226; CNN AI manual testing and shadowing testing automation. <br />
                &#8226; CNN internal application library UI development, maintenance and debugging. <br />
                &#8226; CNN Atlanta video library cloud consolidation and back-end development shadowing. <br />
                &#8226; CNN Tech Training VDI transition assistance and training, Premiere 2020 implementation guidance and
                  editing workflow transition support. <br />
                &#8226; Remote Workforce Technology Team Lead: Identified and determined strategy to address hybrid workflow
                  technological needs across east coast CNN bureaus. <br />
                &#8226; Production team pioneer remote workflow tester. <br />
                &#8226; Avid Mediacentral web-based iNews application testing. </p>
              
                <h2 className="divider"> Education </h2>
                
                <h3> Adobe Digital Academy, 2025 </h3>
                <h4> Software Engineering with scholarship</h4>
                <div className="three-columns">
                <p>Relevant topics: <br />
                  &#8226; UNIX command line <br />
                  &#8226; Front-end Development <br />
                  &#8226; Project design, planning and management techniques <br />
                  &#8226; MongoDB </p>

                  <p> &#8226; Recursive and sorting algorithms <br />
                  &#8226; Testing <br />
                  &#8226; Front-end Frameworks and APIs <br />
                  &#8226; React, Angular, Ember <br />
                  &#8226; Asynchronous JavaScript, XML <br />
                  &#8226; Token-based authentication, external accounts  </p>
                  
                  <p>&#8226; Algorithms and Data Structures Cont. <br />
                  &#8226; Back-end libraries<br />
                  &#8226; Linked lists <br />
                  &#8226; Stacks and queues <br />
                  &#8226; Sets and trees </p>
                  </div>
                
                
                <h3> Georgia Institute of Technology, 2021 </h3>
                <h4> Full Stack Flex Web Development</h4>
                <div className="three-columns">
                <p>Relevant topics: <br />
                  &#8226; HTML, Git, CSS <br />
                  &#8226; Advanced CSS <br />
                  &#8226; JavaScript <br />
                  &#8226; Web APIs <br />
                  &#8226; Third-Party APIs </p>
                  

                  <p> &#8226; Server-side APIs <br />
                  &#8226; Object-Oriented Programming <br />
                  &#8226; Express <br />
                  &#8226; SQL <br />
                  &#8226; Object-relational mapping <br />
                  &#8226; Model-view-controller </p>
                  
                  <p>&#8226; NoSQL <br />
                  &#8226; Progressive Web Applications<br />
                  &#8226; React <br />
                  &#8226; MERN <br />
                  &#8226; State </p>
                  </div>

               
                <h3> Texas State University, 2017 </h3>
                <h4> Journalism, International Studies</h4>
                  <p>Relevant topics: <br />
                  &#8226; Coding and Data Skills <br />
                  &#8226; Web Design and Publication <br />
                  &#8226; Computer Literacy and the Internet <br />
                  &#8226; Digital and Online Media <br />
                  &#8226; Digital Studio <br />
                  &#8226; 2-D Design </p>
                

                <h2 className="divider"> More Skills </h2>
                <div className="two-columns">
                  
                <p>&#8226; IT Project Management <br />
                  &#8226; Full Stack Flex Web Development <br />
                  &#8226; Information technology training <br />
                  &#8226; Hardware and software optimization </p>

                  <p> &#8226; Powershell, Terminal, Bash <br />
                  &#8226; AI testing <br />
                  &#8226; Android Virtual Devices <br />
                  &#8226; QA Engineering <br />

                  <a className="right" href="/files/seraldelarosa.pdf" download="Sera L. De La Rosa.pdf">
                    <button className="button-56" role="button">download</button>
                  </a>

              </p>
                
              </div>
            </div>
          </div>

          <div id="timeline-section">
            <Timeline />
          </div>

          <nav>
          <a href="#aboutme-section"><button className="button-56" role="button">back to top</button></a>
          </nav>


        </div>

      </body>

      {/* <a href="#top" onclick="scrollToSection('top'); return false;">
    <button className="backtotop">^back to top^</button>
  </a> */}

    </div >

  );
};

export default SeraPage;