// JavaScript code to add the animation class after a short delay
const aboutMeElement = document.querySelector(".about-me");
const aboutMeBoxContent = document.querySelector(".about-me-box-content");
const skillsBoxContent = document.querySelector(".skills-box-content");
const projectsBoxContent = document.querySelector(".projects-box-content");

function addAnimationClass() {
  aboutMeElement.classList.add("fade-in");
}

function toggleBoxContent(event) {
  event.preventDefault(); // Prevent the default link behavior
  const clickedLinkId = event.target.id;

  if (clickedLinkId === "about-me") {
    aboutMeBoxContent.classList.toggle("visible");
    skillsBoxContent.classList.remove("visible");
    projectsBoxContent.classList.remove("visible");
  } else if (clickedLinkId === "skills") {
    skillsBoxContent.classList.toggle("visible");
    aboutMeBoxContent.classList.remove("visible");
    projectsBoxContent.classList.remove("visible");
  } else if (clickedLinkId === "projects") {
    projectsBoxContent.classList.toggle("visible");
    aboutMeBoxContent.classList.remove("visible");
    skillsBoxContent.classList.remove("visible");
  }
}

// Add the animation class after a delay of 1 second (1000 milliseconds)
setTimeout(addAnimationClass, 1000);

// Attach click event listeners to the "About me" and "Skills" links
const aboutMeLink = document.getElementById("about-me");
const skillsLink = document.getElementById("skills");
const projectLink = document.getElementById("projects");

aboutMeLink.addEventListener("click", toggleBoxContent);
skillsLink.addEventListener("click", toggleBoxContent);
projectLink.addEventListener("click", toggleBoxContent);
