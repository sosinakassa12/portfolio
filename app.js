const projects = [
  {
    title: "Upnow",
    description: "One-click app that helps you beat boredom and use your time meaningfully based on your mood.",
    image: "upnow.png",
    github: "https://github.com/sosinakassa12/upnow"
  },
  {
    title: "Trivia Game",
    description: "A fun quiz game using JavaScript. Shows your score and lets you try again with new questions.",
    image: "trivia.png",
    github: "https://github.com/sosinakassa12/trivia-game"
  },
  {
    title: "Pomodoro Timer",
    description: "A timer app based on the Pomodoro technique with customizable sessions and sound.",
    image: "pomodoro.png",
    github: "https://github.com/Do0ky/MyPomo/tree/sosi-branch"
  },
  {
    title: "Virtual Capsule",
    description: "Leave messages for your future self or others. Store memories in a virtual capsule.",
    image: "capsule.png",
    github: "https://github.com/sosinakassa12"
  },
  {
  title: "News App",
  description: "A simple news app that fetches headlines using a news API. Clean UI with live updates on world news.",
  image: "newsapp.png",
  github: "https://github.com/sosinakassa12/NEWS-APP"
}
  
];

function renderProjects() {
  const container = document.querySelector('.project-grid');
  container.innerHTML = "";

  projects.forEach(proj => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
      <img src="${proj.image}" alt="${proj.title}">
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
      <a href="${proj.github}" target="_blank">GitHub</a>
    `;

    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderProjects);

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Bootstrap",
  "Git",
  "GitHub",
  "Parcel",
  "API Integration",
  "Responsive Design",
  "Firebase Hosting"
];

function renderSkills() {
  const container = document.querySelector(".skills-wrapper");
  skills.forEach(skill => {
    const tag = document.createElement("span");
    tag.classList.add("skill");
    tag.textContent = skill;
    container.appendChild(tag);
  });
}

document.addEventListener("DOMContentLoaded", renderSkills);
