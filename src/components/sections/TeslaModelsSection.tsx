
import React from 'react';
import ExpandableCardDemoStandard from '@/components/ui/expandable-card-demo-standard';

const TeslaModelsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Tesla Models</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Explore our lineup of premium electric vehicles. Click on any model to learn more.
          </p>
        </div>
        <ExpandableCardDemoStandard />
      </div>
    </section>
  );
};

export default TeslaModelsSection;
