// hooks/useHeroAnimations.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const useHeroAnimations = (refs) => {
  useEffect(() => {
    const {
      overlayRef,
      particlesRef,
      schoolIconRef,
      welcomeTextRef,
      schoolNameRef,
      descriptionRef,
      exploreBtnRef,
    } = refs;

    const tl = gsap.timeline();

    // Overlay animation
    if (overlayRef.current) {
      tl.fromTo(
        overlayRef.current,
        { opacity: 0.6 },
        { opacity: 1, duration: 1.5, ease: "sine.inOut" }
      );
    }

    // Particles entrance
    if (particlesRef.current?.children) {
      tl.fromTo(
        particlesRef.current.children,
        { scale: 0, opacity: 0, y: 100 },
        {
          scale: 1,
          opacity: 0.6,
          y: 0,
          duration: 0.8,
          stagger: 0.05,
          ease: "back.out(1.7)",
        },
        "-=1"
      );
    }

    // School icon
    if (schoolIconRef.current) {
      tl.fromTo(
        schoolIconRef.current,
        { scale: 0, rotation: -360, opacity: 0, y: -100 },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "elastic.out(1, 0.8)",
        }
      );
    }

    // "Welcome To" text
    if (welcomeTextRef.current) {
      tl.to(welcomeTextRef.current, {
        duration: 0.8,
        text: "Welcome To",
        ease: "power2.out",
      });
    }

    // School Name reveal
    if (schoolNameRef.current) {
      tl.fromTo(
        schoolNameRef.current,
        { opacity: 0, scale: 1.2, filter: "blur(10px)" },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }

    // Description slide-up
    if (descriptionRef.current) {
      tl.fromTo(
        descriptionRef.current,
        { y: 80, opacity: 0, rotationX: 90 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        "-=0.5"
      );
    }

    // Explore button entrance
    if (exploreBtnRef.current) {
      tl.fromTo(
        exploreBtnRef.current,
        { scale: 0, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "bounce.out",
        }
      );
    }

    // Floating icon idle animation
    if (schoolIconRef.current) {
      gsap.to(schoolIconRef.current, {
        y: -15,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }

    // Particle floating animation
    if (particlesRef.current?.children) {
      gsap.to(particlesRef.current.children, {
        y: -20,
        x: "random(-20, 20)",
        rotation: "random(-180, 180)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
        ease: "sine.inOut",
      });
    }
  }, []);
};

export default useHeroAnimations;
