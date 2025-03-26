// // <!-- smooth scroll to section anchors -->
//     function scrollToSection(id) {
//         const element = document.getElementById(id);
//         if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//         }
//     }

// document.getElementById('toggle-switch').addEventListener('change', function () {
//     //pulling in elements
//     const image = document.getElementById('profilepic');
//     const paragraph = document.getElementById('profile-paragraph');
//     const toggleSwitch = document.getElementById('toggleSwitch');
//     const body = document.body;
//     const toggleText = document.getElementById('toggle-text');

//     //default states
//     body.style.backgroundImage = "url('https://i.imgur.com/k1xBCRf.png')";
//     toggleText.innerHTML = "day mode active";


//     if (this.checked) {
//         // When toggle is on
//         //change toggle switch text
//         toggleText.innerHTML = "night mode!";
//         //night mode image
//         image.src = 'https://i.imgur.com/lwqMD7z.png';
//         //change background pic
//         body.style.backgroundImage = "url('https://i.imgur.com/IRB0gb6.png')";
//         //change paragraph text
//         paragraph.innerHTML = "Hi, my name is Utopia! By night, I'm a Twitch streamer and gamer. By day, I'm a part-time Software Developer I at a small tech startup in Atlanta, GA.<br><br>My hobbies and skills all revolve around technology and work hand-in-hand together. From video editing, to Remote Workflow Technology Leader; from computer building to coding; from video game player, to debugger and tester, to Blender and Unity asset design; from Virtual Reality to AI development pioneering. Everything I've been doing has led up to this moment and I'm so ready to get started.";
//     } else {
//         // When toggle is off
//         //change toggle switch text
//         toggleText.innerHTML = "day mode active";
//         //original, day mode image
//         image.src = 'https://i.imgur.com/DQ4lGot.jpeg';
//         //normal, day mode background
//         body.style.backgroundImage = "url('https://i.imgur.com/k1xBCRf.png')";
//         //original day mode text
//         paragraph.innerHTML = "Hi, my name is Sophia! By day, I'm a part-time Software Developer I at a small tech startup in Atlanta, GA. By night, I'm Utopia, the Twitch streamer and gamer.<br><br>My hobbies and skills all revolve around technology and work hand-in-hand together. From video editing, to Remote Workflow Technology Leader; from computer building to coding; from video game player, to debugger and tester, to Blender and Unity asset design; from Virtual Reality to AI development pioneering. Everything I've been doing has led up to this moment and I'm so ready to get started.";
//     }

// });