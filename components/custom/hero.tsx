"use client";

import { Star } from "lucide-react";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Hero7Props {
    heading?: string;
    description?: string;
    button?: {
      text: string;
      url: string;
    };
    reviews?: {
      count: number;
      rating?: number;
      avatars: {
        src: string;
        alt: string;
      }[];
    };
  }
  

const Hero = ({
    heading = "A Collection of Components Built With Shadcn & Tailwind",
    description = "Join us to build flawless web solutions.",
    button = {
      text: "Discover all components",
      url: "https://www.shadcnblocks.com",
    },
    reviews = {
      count: 200,
      rating: 5.0,
      avatars: [
        {
          src: "https://www.shadcnblocks.com/images/block/avatar-1.webp",
          alt: "Avatar 1",
        },
        {
          src: "https://www.shadcnblocks.com/images/block/avatar-2.webp",
          alt: "Avatar 2",
        },
        {
          src: "https://www.shadcnblocks.com/images/block/avatar-3.webp",
          alt: "Avatar 3",
        },
        {
          src: "https://www.shadcnblocks.com/images/block/avatar-4.webp",
          alt: "Avatar 4",
        },
        {
          src: "https://www.shadcnblocks.com/images/block/avatar-5.webp",
          alt: "Avatar 5",
        },
      ],
    },
  }: Hero7Props) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const avatarsRef = useRef<HTMLElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const redainTextRef = useRef<HTMLSpanElement>(null);

  // Animate using useGSAP
  useGSAP(() => {
    // Initial animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    // Container animation
    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 }
    );
    
    // Animate the heading with text reveal effect
    tl.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );
    
    // Animate Redain text with special effect
    tl.fromTo(
      redainTextRef.current,
      { scale: 0.5, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.6, 
        ease: "elastic.out(1, 0.3)" 
      },
      "-=0.4"
    );
    
    // Add glowing effect to Redain text
    gsap.to(redainTextRef.current, {
      textShadow: "0 0 20px rgba(255, 0, 0, 0.8), 0 0 30px rgba(255, 0, 0, 0.6)",
      duration: 2,
      repeat: -1,
      yoyo: true
    });
    
    // Animate the description
    tl.fromTo(
      descriptionRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.4"
    );
    
    // Animate the button with a bouncy effect
    tl.fromTo(
      buttonRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.2"
    );
    
    // Add pulse effect to button
    if (buttonRef.current) {
      const buttonElement = buttonRef.current.querySelector("a");
      if (buttonElement) {
        gsap.to(buttonElement, {
          boxShadow: "0 0 15px rgba(255, 0, 0, 0.7)",
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    }
    
    // Animate the reviews section
    tl.fromTo(
      reviewsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.3"
    );
    
    // Animate each avatar with staggered effect
    tl.fromTo(
      avatarsRef.current,
      { x: -50, opacity: 0, rotation: -15 },
      { 
        x: 0, 
        opacity: 1, 
        rotation: 0,
        duration: 0.4, 
        stagger: 0.1,
        ease: "back.out(1.2)"
      },
      "-=0.4"
    );
    
    // Create animated background elements
    const bgElements = document.querySelectorAll(".bg-circle");
    bgElements.forEach((circle, index) => {
      if (circle instanceof HTMLElement) {
        // Set custom animation properties for each circle
        circle.style.setProperty("--animation-duration", `${8 + Math.random() * 7}s`);
        circle.style.setProperty("--animation-delay", `${Math.random() * 5}s`);
      }
    });
    
    // Create floating effect for individual elements
    const floatElements = [redainTextRef.current];
    floatElements.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: '15px',
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2
        });
      }
    });
    
    // Star animation
    gsap.to(".star-icon", {
      scale: 1.2,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
      ease: "sine.inOut"
    });
    
  }, { scope: containerRef }); // Use the container as scope for proper cleanup

  const addToAvatarsRef = (el: HTMLElement | null, index: number) => {
    if (el) {
      avatarsRef.current[index] = el;
    }
  };

  return (
    <section className="py-32 h-screen flex justify-center items-center bg-black overflow-hidden">
      <div ref={containerRef} className="container text-center relative">
        <div className="mx-auto flex max-w-screen-lg flex-col gap-6">
          <h1 ref={headingRef} className="text-3xl font-extrabold lg:text-6xl text-white">
            <span ref={redainTextRef} className="text-red-600 inline-block animate-glow">Redain</span> - {heading}
          </h1>
          <p ref={descriptionRef} className="text-balance text-gray-400 lg:text-lg">
            {description}
          </p>
        </div>
        <div ref={buttonRef}>
          <Button asChild size="lg" className="mt-10 bg-red-600 hover:bg-red-700 text-white relative z-10 animate-pulse-red">
            <a href={button.url}>{button.text}</a>
          </Button>
        </div>
        <div ref={reviewsRef} className="mx-auto mt-10 flex w-fit flex-col items-center gap-4 sm:flex-row animate-float">
          <span className="mx-4 inline-flex items-center -space-x-4">
            {reviews.avatars.map((avatar, index) => (
              <Avatar 
                key={index} 
                className="size-14 border border-red-900"
                ref={(el) => addToAvatarsRef(el, index)}
              >
                <AvatarImage src={avatar.src} alt={avatar.alt} />
              </Avatar>
            ))}
          </span>
          <div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="size-5 fill-red-600 text-red-600 star-icon"
                />
              ))}
              <span className="mr-1 font-semibold text-white">
                {reviews.rating?.toFixed(1)}
              </span>
            </div>
            <p className="text-left font-medium text-gray-400">
              from {reviews.count}+ reviews
            </p>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-red-600/10 bg-circle"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
