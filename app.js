const projects = [
  {
    title: "Upnow",
    description: "One-click app that helps you beat boredom and use your time meaningfully based on your mood.",
    image: "img/upnow.jpg",
    github: "https://github.com/sosinakassa12/upnow"
  },
  {
    title: "Trivia Game",
    description: "A fun quiz game using JavaScript. Shows your score and lets you try again with new questions.",
    image: "img/trivia.jpg",
    github: "https://github.com/sosinakassa12/trivia-game"
  },
  {
    title: "Pomodoro Timer",
    description: "A timer app based on the Pomodoro technique with customizable sessions and sound.",
    image: "img/pomo.jpg",
    github: "https://github.com/Do0ky/MyPomo/tree/sosi-branch"
  },
  {
    title: "Virtual Capsule",
    description: "Leave messages for your future self or others. Store memories in a virtual capsule.",
    image: "img/capsule.jpg",
    github: "https://github.com/sosinakassa12"
  },
  {
  title: "News App",
  description: "A simple news app that fetches headlines using a news API. Clean UI with live updates on world news.",
  image: "img/news.jpg",
  github: "https://github.com/sosinakassa12/NEWS-APP"
  },
  {
  title: "Meal Planning App",
  description: "A full-stack web app built with PHP, MySQL, HTML, and CSS that helps users plan a week’s worth of meals (3 per day), browse or add recipes, and generate automated grocery shopping lists. Includes secure login, user accounts, and recipe storage.",
  image: "img/meal.jpg",
  github: "https://github.com/JCSchmit/meal-planning-app"
  },
  {
  title: "Bullet Train Management System",
  description: "Capstone project for Metro State University. A web-based system to manage high-speed rail logistics, including train schedules, ticket booking, and route management.",
  video: "img/bullet.mp4",
  github: "https://github.com/Dpellowski/CapstoneProject"
}

];

function renderProjects() {
  const grid = document.querySelector(".project-grid");
  
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.setAttribute("data-aos", "fade-up");

    // Build media (video or image)
    let mediaHTML = "";
    if (project.video) {
      mediaHTML = `
        <video controls muted autoplay loop style="width: 100%; border-radius: 8px;">
          <source src="${project.video}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `;
    } else if (project.image) {
      mediaHTML = `<img src="${project.image}" alt="${project.title} Screenshot" />`;
    }

    // Set full card HTML
    card.innerHTML = `
      ${mediaHTML}
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.github}" target="_blank">View Code</a>
    `;

    grid.appendChild(card);
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

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("img-modal");
  const modalImg = document.getElementById("modal-img");
  const span = document.querySelector(".img-close");

  document.querySelectorAll(".project-card img").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  span.onclick = () => {
    modal.style.display = "none";
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
