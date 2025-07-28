import { gsap } from "gsap";

export function initAnimate () {
    const track = document.querySelector('.testimoni__body__content');

    // Clone once for seamless loop
    const originalCards = Array.from(track.children);
    originalCards.forEach(card => {
    track.appendChild(card.cloneNode(true));
    });

    // Wait until DOM paints to get full width
    requestAnimationFrame(() => {
      const totalWidth = track.scrollWidth / 2; // Only width of the original set

      gsap.set(track, { x: 0 });

      gsap.to(track, {
        x: `-=${totalWidth}`,
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        }
      });

      // Pause on hover
      const wrapper = document.querySelector('.testimoni__body');
      wrapper.addEventListener('mouseenter', () => gsap.globalTimeline.pause());
      wrapper.addEventListener('mouseleave', () => gsap.globalTimeline.play());
    });
}