// import Image from "next/image";

// import { Card } from "@/components/cards/Card";
// import About from "@/components/about/About";
// import Contact from "@/components/contact/Contact";
import Features from "@/components/features/Features";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
// import { Login } from "@/components/loginSignup/Login";
// import { Signup }from "@/components/loginSignup/Signup";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
