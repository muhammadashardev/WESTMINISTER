import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutSection from "./components/Aboutus"
import BreedShowcase from "./components/BreedShowcase"
import SignatureEvents from "./components/Disover"
import TraditionSection from "./components/Explore"
import FeaturesGrid from "./components/FeaturesGrid"
import FollowSection from "./components/Follow"
import InstagramSection from "./components/Follow"
import Footer from "./components/Footer"
import HallOfChampions from "./components/HallOfChampions"
import WestminsterHero from "./components/Herosection"
import NewsUpdates from "./components/NewsUpdates"
import FeaturesSection from "./components/Ourfeature"
import TestimonialsSection from "./components/TestimonialsSection"
import SiteLoader from "./components/SiteLoader"

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function Section({ children }) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.section>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const finishLoading = () => {
      window.setTimeout(() => setIsLoading(false), 900);
    };

    if (document.readyState === "complete") {
      finishLoading();
      return;
    }

    window.addEventListener("load", finishLoading, { once: true });
    return () => window.removeEventListener("load", finishLoading);
  }, []);

  return (
   <>
     <AnimatePresence>{isLoading && <SiteLoader />}</AnimatePresence>
     <motion.div
       variants={pageVariants}
       initial="initial"
       animate="animate"
       exit="exit"
       transition={pageTransition}
     >
     <Section>
       <WestminsterHero />
     </Section>
     <Section>
       <FeaturesSection />
     </Section>
     <Section>
       <AboutSection />
     </Section>
     <Section>
       <FollowSection />
     </Section>
     <Section>
       <TraditionSection />
     </Section>
     <Section>
       <SignatureEvents />
     </Section>
     <Section>
       <BreedShowcase />
     </Section>
     <Section>
       <FeaturesGrid />
     </Section>
     <Section>
       <HallOfChampions />
     </Section>
     <Section>
       <TestimonialsSection />
     </Section>
     <Section>
       <NewsUpdates />
     </Section>
     <Section>
       <Footer />
     </Section>
     </motion.div>
   </>
  )
}

export default App
