'use client';
import React from 'react';

export function OrgNode({ label, children }) {
  const childrenArray = React.Children.toArray(children);
  const hasChildren = childrenArray.length > 0;

  return (
    <div className="flex flex-col items-center relative inline-block">
      {/* 1. Parent Member Card */}
      <div className="z-10">{label}</div>

      {hasChildren && (
        <>
          {/* 2. Top Vertical Line from Parent */}
          <div className="w-[2px] h-6 bg-white" />

          {/* 3. Central Arrowhead (↓) pointing to the Horizontal Bar */}
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white z-20" />

          {/* 4. Children Grid Branch Container */}
          <div className="flex justify-center relative pt-8">
            {childrenArray.map((child, index) => {
              const count = childrenArray.length;
              const isFirst = index === 0;
              const isLast = index === count - 1;
              const isOnly = count === 1;

              return (
                <div key={index} className="relative flex flex-col items-center px-4">
                  {/* Top Horizontal Connecting Lines */}
                  {!isOnly && (
                    <>
                      {/* Left Half Line */}
                      <div
                        className={`absolute top-0 left-0 w-1/2 border-t-2 border-white ${
                          isFirst ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                      {/* Right Half Line */}
                      <div
                        className={`absolute top-0 right-0 w-1/2 border-t-2 border-white ${
                          isLast ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                    </>
                  )}

                  {/* Vertical Line dropping down to each child */}
                  <div className="absolute top-0 w-[2px] h-6 bg-white" />

                  {/* Arrowhead (↓) directly above EACH Child Card */}
                  <div className="absolute top-[22px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white z-20" />

                  {/* Child Component */}
                  <div className="pt-8">{child}</div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}