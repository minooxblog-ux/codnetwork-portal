import Hero from '@/components/home/Hero';
import ProblemSolution from '@/components/home/ProblemSolution';
import ServicesOverview from '@/components/home/ServicesOverview';
import StatsSection from '@/components/home/StatsSection';
import ModelsPreview from '@/components/home/ModelsPreview';
import Testimonials from '@/components/home/Testimonials';
import FlowSection from '@/components/home/FlowSection';
import TechStack from '@/components/home/TechStack';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProblemSolution />
      <ServicesOverview />
      <StatsSection />
      <ModelsPreview />
      <Testimonials />
      <FlowSection />
      <TechStack />
      <CTASection />
    </main>
  );
}
