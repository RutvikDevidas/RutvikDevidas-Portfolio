import { PageTransition } from '../App';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <TechStack />
    </PageTransition>
  );
}
