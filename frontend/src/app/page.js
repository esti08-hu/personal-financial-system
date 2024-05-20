import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import Footer from "./components/footer";
// import Testimonial from "./components/testimoinal";
Footer

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      <Content/>
      <Footer/>
    </main>
  );
}
