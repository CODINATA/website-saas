import React from 'react';
import { Zap, Shield, BarChart4, Users } from 'lucide-react';
import Container from './ui/Container';
import Card from './ui/Card';

type FeatureProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FeatureCard = ({ title, description, icon }: FeatureProps) => (
  <Card className="p-6 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1">
    <div className="rounded-full bg-blue-100 p-3 w-fit mb-4 text-blue-600">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-slate-900">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </Card>
);

const Features = () => {
  const features = [
    {
      title: 'Lightning Fast',
      description: 'Our platform is optimized for speed, ensuring your team never slows down.',
      icon: <Zap size={24} />
    },
    {
      title: 'Bulletproof Security',
      description: 'Enterprise-grade security that keeps your data safe and compliant.',
      icon: <Shield size={24} />
    },
    {
      title: 'Advanced Analytics',
      description: 'Get valuable insights into your team\'s performance and project progress.',
      icon: <BarChart4 size={24} />
    },
    {
      title: 'Team Collaboration',
      description: 'Built-in tools for seamless communication and efficient teamwork.',
      icon: <Users size={24} />
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            All the tools you need
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our platform offers everything you need to manage your workflow and increase productivity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;