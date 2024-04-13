import React from 'react';
import { HeroContent } from '../sub/HeroContent';
import { HeroRight } from '../sub/HeroRight';

const Hero = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <div className="md:col-span-2 flex justify-center z-[2]">
            <div className="mt-6 md:mt-0">
              <HeroContent />
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center z-[0]">
            <div className="relative flex justify-center items-center " >
              <video autoPlay muted loop className="w-full h-full">
                <source src="/media/Atom_2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center z-[3]">
            <div className="mt-6 md:mt-0">
              
              <HeroRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;