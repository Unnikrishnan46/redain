"use client";

import { MenuIcon } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
    const navbarRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLAnchorElement>(null);
    const menuItemsRef = useRef<HTMLLIElement[]>([]);
    const buttonsRef = useRef<HTMLButtonElement[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    // Use GSAP React hook for animations
    useGSAP(() => {
      // Navbar animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      
      // Animate navbar fade in and slide down
      tl.fromTo(
        navbarRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }
      );
      
      // Animate logo with bounce effect
      tl.fromTo(
        logoRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.5"
      );
      
      // Animate menu items with stagger
      tl.fromTo(
        menuItemsRef.current,
        { y: -20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.4, 
          stagger: 0.1
        },
        "-=0.3"
      );
      
      // Animate buttons with stagger
      tl.fromTo(
        buttonsRef.current,
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.4, 
          stagger: 0.1,
          ease: "back.out(1.2)"
        },
        "-=0.2"
      );
      
      // Add hover animations to buttons
      buttonsRef.current.forEach((btn) => {
        if (btn) {
          const btnHover = gsap.to(btn, {
            scale: 1.05,
            duration: 0.3,
            paused: true,
            ease: "power1.inOut"
          });
          
          btn.addEventListener("mouseenter", () => btnHover.play());
          btn.addEventListener("mouseleave", () => btnHover.reverse());
        }
      });
      
    }, { scope: containerRef });

    const addToMenuItemsRef = (el: HTMLLIElement | null, index: number) => {
      if (el) {
        menuItemsRef.current[index] = el;
      }
    };

    const addToButtonsRef = (el: HTMLButtonElement | null, index: number) => {
      if (el) {
        buttonsRef.current[index] = el;
      }
    };

    const features = [
        {
          title: "Dashboard",
          description: "Overview of your activity",
          href: "#",
        },
        {
          title: "Analytics",
          description: "Track your performance",
          href: "#",
        },
        {
          title: "Settings",
          description: "Configure your preferences",
          href: "#",
        },
        {
          title: "Integrations",
          description: "Connect with other tools",
          href: "#",
        },
        {
          title: "Storage",
          description: "Manage your files",
          href: "#",
        },
        {
          title: "Support",
          description: "Get help when needed",
          href: "#",
        },
      ];
  return (
    <nav ref={navbarRef} className="py-4 px-20 absolute to-0% right-0 left-0 bg-black/90 z-50">
      <div ref={containerRef} className="container">
        <nav className="flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2"
            ref={logoRef}
          >
            <img
              src="https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"
              className="max-h-8"
              alt="Redain Logo"
            />
            <span className="text-lg font-semibold tracking-tighter text-red-600">
              Redain
            </span>
          </a>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem ref={(el) => addToMenuItemsRef(el, 0)}>
                <NavigationMenuTrigger className="text-white hover:text-red-500">Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 p-3 bg-black border border-red-900">
                    {features.map((feature, index) => (
                      <NavigationMenuLink
                        href={feature.href}
                        key={index}
                        className="rounded-md p-3 transition-colors hover:bg-red-900/30"
                      >
                        <div key={feature.title}>
                          <p className="mb-1 font-semibold text-red-600">
                            {feature.title}
                          </p>
                          <p className="text-sm text-gray-400">
                            {feature.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem ref={(el) => addToMenuItemsRef(el, 1)}>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle() + " text-white hover:text-red-500"}
                >
                  Products
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem ref={(el) => addToMenuItemsRef(el, 2)}>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle() + " text-white hover:text-red-500"}
                >
                  Resources
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem ref={(el) => addToMenuItemsRef(el, 3)}>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle() + " text-white hover:text-red-500"}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button 
              variant="outline" 
              className="border-red-600 text-red-600 hover:bg-red-900/20"
              ref={(el) => addToButtonsRef(el, 0)}
            >
              Sign in
            </Button>
            <Button 
              className="bg-red-600 text-white hover:bg-red-700"
              ref={(el) => addToButtonsRef(el, 1)}
            >
              Start for free
            </Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="border-red-600">
                <MenuIcon className="h-4 w-4 text-red-600" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto bg-black border-red-900">
              <SheetHeader>
                <SheetTitle>
                  <a
                    href="/"
                    className="flex items-center gap-2"
                  >
                    <img
                      src="https://shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg"
                      className="max-h-8"
                      alt="Redain Logo"
                    />
                    <span className="text-lg font-semibold tracking-tighter text-red-600">
                      Redain
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mt-4 mb-2">
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="text-base hover:no-underline text-white">
                      Features
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2">
                        {features.map((feature, index) => (
                          <a
                            href={feature.href}
                            key={index}
                            className="rounded-md p-3 transition-colors hover:bg-red-900/30"
                          >
                            <div key={feature.title}>
                              <p className="mb-1 font-semibold text-red-600">
                                {feature.title}
                              </p>
                              <p className="text-sm text-gray-400">
                                {feature.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-6 text-white">
                  <a href="#" className="font-medium hover:text-red-500">
                    Products
                  </a>
                  <a href="#" className="font-medium hover:text-red-500">
                    Resources
                  </a>
                  <a href="#" className="font-medium hover:text-red-500">
                    Contact
                  </a>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-900/20">Sign in</Button>
                  <Button className="bg-red-600 text-white hover:bg-red-700">Start for free</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </nav>
  )
}

export default Navbar
