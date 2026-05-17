import Hero from "@/components/home/Hero";
import AboutSnippet from "@/components/home/AboutSnippet";
import UniversityAssociation from "@/components/home/UniversityAssociation";
import CoursesPreview from "@/components/home/CoursesPreview";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSnippet />
      <UniversityAssociation />
      <CoursesPreview />
      <Features />
      <Testimonials />
    </>
  );
}
