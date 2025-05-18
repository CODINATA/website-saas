import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight">
              Streamline Your Business Workflow
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 md:max-w-lg">
              The all-in-one platform that helps your team collaborate, manage projects, and deliver results faster.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button size="large">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button variant="outline" size="large">
                Book a Demo
              </Button>
            </div>
            <div className="mt-8 text-slate-500 flex items-center">
              <span className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-blue-400 to-indigo-500"
                  />
                ))}
              </span>
              <span className="ml-4">Trusted by 10,000+ companies worldwide</span>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg blur opacity-20 animate-pulse"></div>
            <div className="relative bg-white p-2 rounded-lg shadow-xl">
              <img 
                src="https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Dashboard preview" 
                className="rounded-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;