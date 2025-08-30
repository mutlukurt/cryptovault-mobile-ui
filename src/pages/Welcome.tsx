import React, { useState } from 'react';
import { ShieldCheckIcon, LockIcon, ArrowRightIcon } from 'lucide-react';
interface WelcomeProps {
  onComplete: () => void;
}
export const Welcome: React.FC<WelcomeProps> = ({
  onComplete
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [{
    title: 'Welcome to CryptoVault',
    description: 'The secure way to manage your digital assets',
    icon: ShieldCheckIcon
  }, {
    title: 'Bank-Grade Security',
    description: 'Your keys, your crypto. Protected by military-grade encryption.',
    icon: LockIcon
  }, {
    title: 'Ready to Start?',
    description: 'Create a new wallet or import an existing one',
    icon: ArrowRightIcon
  }];
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };
  const currentStepData = steps[currentStep];
  return <div className="flex flex-col items-center justify-between h-screen bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 p-6">
      <div className="w-full mt-12">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
            <currentStepData.icon size={32} className="text-purple-400" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center text-white mb-4">
          {currentStepData.title}
        </h1>
        <p className="text-center text-gray-300 mb-8">
          {currentStepData.description}
        </p>
      </div>
      <div className="flex justify-center gap-2 mb-4">
        {steps.map((_, index) => <div key={index} className={`w-2 h-2 rounded-full ${index === currentStep ? 'bg-purple-500' : 'bg-gray-600'}`} />)}
      </div>
      <div className="w-full mb-12">
        <button onClick={handleNext} className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl text-white font-medium shadow-lg shadow-purple-500/20">
          {currentStep < steps.length - 1 ? 'Continue' : 'Get Started'}
        </button>
        {currentStep === steps.length - 1 && <button className="w-full py-3 mt-4 border border-gray-700 rounded-xl text-gray-300" onClick={onComplete}>
            I already have a wallet
          </button>}
      </div>
    </div>;
};