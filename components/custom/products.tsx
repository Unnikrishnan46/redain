"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface TabContent {
    badge: string;
    title: string;
    description: string;
    buttonText: string;
    imageSrc: string;
    imageAlt: string;
  }
  
  interface Tab {
    value: string;
    icon: React.ReactNode;
    label: string;
    content: TabContent;
  }
  
  interface Feature108Props {
    badge?: string;
    heading?: string;
    description?: string;
    tabs?: Tab[];
  }

const Products = ({
    badge = "Redain Products",
    heading = "Powerful Solutions For Modern Web",
    description = "Explore our range of powerful tools and services.",
    tabs = [
      {
        value: "tab-1",
        icon: <Zap className="h-auto w-4 shrink-0 text-red-600" />,
        label: "Boost Revenue",
        content: {
          badge: "Modern Tactics",
          title: "Make your site a true standout.",
          description:
            "Discover new web trends that help you craft sleek, highly functional sites that drive traffic and convert leads into customers.",
          buttonText: "See Plans",
          imageSrc:
            "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
          imageAlt: "placeholder",
        },
      },
      {
        value: "tab-2",
        icon: <Pointer className="h-auto w-4 shrink-0 text-red-600" />,
        label: "Higher Engagement",
        content: {
          badge: "Expert Features",
          title: "Boost your site with top-tier design.",
          description:
            "Use stellar design to easily engage users and strengthen their loyalty. Create a seamless experience that keeps them coming back for more.",
          buttonText: "See Tools",
          imageSrc:
            "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
          imageAlt: "placeholder",
        },
      },
      {
        value: "tab-3",
        icon: <Layout className="h-auto w-4 shrink-0 text-red-600" />,
        label: "Stunning Layouts",
        content: {
          badge: "Elite Solutions",
          title: "Build an advanced web experience.",
          description:
            "Lift your brand with modern tech that grabs attention and drives action. Create a digital experience that stands out from the crowd.",
          buttonText: "See Options",
          imageSrc:
            "https://shadcnblocks.com/images/block/placeholder-dark-3.svg",
          imageAlt: "placeholder",
        },
      },
    ],
  }: Feature108Props) => {
  
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const tabsListRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Create a timeline for the initial animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    });

    // Animate badge with pop and slight twist
    tl.fromTo(
      ".product-badge",
      { scale: 0, rotation: -5, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
    );

    // Animate heading with slide up
    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.2"
    );

    // Animate description with fade in
    tl.fromTo(
      descriptionRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.4"
    );

    // Animate tabs with stagger from bottom
    tl.fromTo(
      ".tabs-trigger",
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.5,
        ease: "power2.out"
      },
      "-=0.3"
    );

    // Animate content container with scale
    tl.fromTo(
      contentRef.current,
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: "power2.out" },
      "-=0.2"
    );

    // Add hover effects for buttons
    const buttonElements = document.querySelectorAll(".product-button");
    buttonElements.forEach((button) => {
      if (button instanceof HTMLElement) {
        gsap.set(button, { transformOrigin: "center" });
        
        const hoverTl = gsap.timeline({ paused: true });
        hoverTl.to(button, { 
          scale: 1.05, 
          boxShadow: "0 0 20px rgba(255, 0, 0, 0.4)", 
          duration: 0.3
        });
        
        button.addEventListener("mouseenter", () => hoverTl.play());
        button.addEventListener("mouseleave", () => hoverTl.reverse());
      }
    });

    // Add hover effects for tab images
    const imageElements = document.querySelectorAll(".product-image");
    imageElements.forEach((image) => {
      if (image instanceof HTMLElement) {
        const hoverTl = gsap.timeline({ paused: true });
        hoverTl.to(image, { 
          scale: 1.03, 
          boxShadow: "0 0 25px rgba(255, 0, 0, 0.3)", 
          border: "1px solid rgba(255, 0, 0, 0.5)",
          duration: 0.4
        });
        
        image.addEventListener("mouseenter", () => hoverTl.play());
        image.addEventListener("mouseleave", () => hoverTl.reverse());
      }
    });
    
    // Create a pulsing animation for the active tab
    const activeTabAnimation = () => {
      gsap.to("[data-state=active] .tabs-icon", {
        scale: 1.2,
        color: "#ff0000",
        duration: 0.8,
        repeat: -1, 
        yoyo: true,
        ease: "sine.inOut"
      });
    };
    
    activeTabAnimation();
    
    // Add scroll-triggered animations for the tabs content
    const contentElements = document.querySelectorAll(".tabs-content");
    contentElements.forEach((content) => {
      if (content instanceof HTMLElement) {
        gsap.fromTo(
          content,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: content,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="border-red-600 text-red-600 product-badge">{badge}</Badge>
          <h1 ref={headingRef} className="max-w-2xl text-3xl font-semibold md:text-4xl text-white">
            {heading}
          </h1>
          <p ref={descriptionRef} className="text-gray-400">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList ref={tabsListRef} className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 bg-transparent">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-gray-400 data-[state=active]:bg-red-900/20 data-[state=active]:text-red-600 tabs-trigger"
              >
                <span className="tabs-icon">{tab.icon}</span> {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div ref={contentRef} className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-[#0F0F0F] p-6 lg:p-16 border border-red-900/30">
            <div className="relative">
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="grid place-items-start gap-20 lg:grid-cols-2 lg:gap-10 tabs-content"
                >
                  <div className="flex flex-col gap-5">
                    <Badge variant="outline" className="w-fit bg-black border-red-600 text-red-600">
                      {tab.content.badge}
                    </Badge>
                    <h3 className="text-3xl font-semibold lg:text-5xl text-white">
                      {tab.content.title}
                    </h3>
                    <p className="text-gray-400 lg:text-lg">
                      {tab.content.description}
                    </p>
                    <Button className="mt-2.5 w-fit gap-2 bg-red-600 hover:bg-red-700 text-white product-button" size="lg">
                      {tab.content.buttonText}
                    </Button>
                  </div>
                  <div className="relative h-[300px] w-full lg:h-[400px]">
                    <img
                      src={tab.content.imageSrc}
                      alt={tab.content.imageAlt}
                      className="h-full w-full rounded-xl object-cover border border-red-900/30 product-image"
                      width={600}
                      height={400}
                    />
                  </div>
                </TabsContent>
              ))}
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Products