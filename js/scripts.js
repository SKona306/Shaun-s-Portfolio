function scrollAppear() {
  const aboutMeText = document.querySelector(".about-text");
  const aboutMePosition = aboutMeText.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if(aboutMePosition < screenPosition) {
    aboutMeText.classList.add("about-appear")
  };
};

window.addEventListener("scroll", scrollAppear);