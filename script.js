let lastProject = null;

//javascript for navigation bar effects on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
  header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a")

menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}

function gotoGallery(){
  const home = document.querySelector("#gallery");
  console.log("This is last project" + lastProject);
  console.log("This is last project" + lastProject);
  const project = document.querySelector("#" + lastProject);

  home.classList.remove("d-none");
  project.classList.add("d-none");
  lastProject = null;
}

function accessProject(projectName){
  const home = document.querySelector("#gallery");
  const project = document.querySelector("#" + projectName);

  home.classList.add("d-none");
  project.classList.remove("d-none");
  lastProject = projectName;
}
