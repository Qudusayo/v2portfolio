import { cn } from "@/lib/utils";
import { GiFizzingFlask } from "react-icons/gi";
import React, { useState } from "react";

const WorkInProgressCover = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCover, setShowCover] = useState(true);

  const handleVisitClick = () => {
    setIsAnimating(true);
    // Remove cover after animation completes
    setTimeout(() => {
      setShowCover(false);
    }, 1200);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[999999] min-h-screen",
        showCover ? "block" : "hidden"
      )}
    >
      <div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ease-out",
          isAnimating ? "transform opacity-0" : ""
        )}
        style={{
          background:
            "linear-gradient(-45deg, #0F172B, #314158, #8CA5B5, #90A1B9)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 8s ease infinite",
        }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Content Container */}
        <div className="relative z-10 text-center text-white px-8 max-w-2xl">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <GiFizzingFlask size={60} />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Work in
            <span className="block bg-gradient-to-r from-theme-stroke to-white bg-clip-text text-transparent">
              Progress
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl mb-12 text-white text-opacity-90 leading-relaxed">
            I am crafting something amazing for you. Our team is putting the
            finishing touches on an incredible experience.
          </p>

          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex justify-center space-x-2 mb-4">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-white rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-white rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
            <p className="text-sm text-white text-opacity-70">
              Almost there...
            </p>
          </div>

          {/* Visit Button */}
          <button
            onClick={handleVisitClick}
            disabled={isAnimating}
            className="bg-white text-gray-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl backdrop-blur-sm border border-white border-opacity-20 disabled:opacity-75 disabled:cursor-not-allowed"
            style={{
              animation: !isAnimating
                ? "subtleBounce 2s ease-in-out infinite"
                : "none",
            }}
          >
            Visit Anyway →
          </button>

          {/* Small disclaimer */}
          <p className="mt-6 text-sm text-white text-opacity-60">
            Note: Some features may not be working properly yet
          </p>
        </div>
      </div>

      {/* CSS-in-JS styles for animations */}
      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes subtleBounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
      `}</style>
    </div>
  );
};

export default WorkInProgressCover;
