document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  window.addEventListener("load", () => {
    ScrollSmoother.create({
      content: "#content",
      wrapper: "#wrapper",
      smooth: 1.2,
      effects: true,
      smoothTouch: 0.1,
    });
  });

  const cards = gsap.utils.toArray(".card");
  const cardsContainer = document.querySelector(".cards-container");
  gsap.set(cards[0], { opacity: 1 });
  const totalScroll = cardsContainer.scrollWidth - window.innerWidth + 50;
  const scrollTrack = gsap.to(cardsContainer, {
    x: -totalScroll,
    duration: cards.length,
    ease: "none",
    scrollTrigger: {
      trigger: ".scroll-section",
      start: "top top",
      end: `+=${totalScroll}`,
      pin: true,
      scrub: true,
    }
  });

  cards.forEach((card) => {
    gsap.to(card, {
      opacity: 1,
      scrollTrigger: {
        trigger: card,
        start: "left 95%",
        end: "center 90%",
        scrub: true,
        containerAnimation: scrollTrack,
      }
    });
  });

});

