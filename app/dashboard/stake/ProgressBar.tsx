// ProgressBar.tsx
import React from "react";

interface ProgressBarProps {
  currentStep: number; // Current step number (1-4)
  totalSteps: number; // Total number of steps
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
      <div
        className="bg-indigo-600 h-full rounded-full"
        style={{ width: `${progressPercentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
