'use client';

import React from 'react';

export default function OrgNode({ label, children, wrapChildren = false }) {
  const childrenArray = React.Children.toArray(children);
  const hasChildren = childrenArray.length > 0;
  const isSingleChild = childrenArray.length === 1;

  return (
    <div className="flex flex-col items-center relative my-2">
      {/* Parent Node Card */}
      <div className="z-10">{label}</div>

      {hasChildren && (
        <div className="flex flex-col items-center w-full">
          {/* Vertical Line coming down from Parent */}
          <div className="w-[2px] h-6 bg-white" />

          {/* Single Child Connection */}
          {isSingleChild ? (
            <div className="flex flex-col items-center">
              <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white z-20" />
              <div className="pt-2">{childrenArray[0]}</div>
            </div>
          ) : (
            /* Multiple Children Connection Tree */
            <div className="flex flex-col items-center w-full">
              {/* Main Arrow pointing to horizontal connector bar */}
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white z-20" />

              {/* Children Container */}
              <div
                className={`flex ${
                  wrapChildren
                    ? 'flex-wrap max-w-5xl justify-center gap-y-10'
                    : 'flex-nowrap justify-center'
                } relative pt-6 w-full`}
              >
                {childrenArray.map((child, index) => {
                  const count = childrenArray.length;
                  const isFirst = index === 0;
                  const isLast = index === count - 1;

                  return (
                    <div
                      key={index}
                      className="relative flex flex-col items-center px-1 lg:px-3 min-w-max"
                    >
                      {/* Top Horizontal Connection Bar & Down Arrow to each Child */}
                      <div className="absolute top-0 w-full h-6">
                        {/* Horizontal Line Left Side */}
                        <div
                          className={`absolute top-0 left-0 w-1/2 border-t-2 border-white ${
                            isFirst ? 'opacity-0' : 'opacity-100'
                          }`}
                        />
                        {/* Horizontal Line Right Side */}
                        <div
                          className={`absolute top-0 right-0 w-1/2 border-t-2 border-white ${
                            isLast ? 'opacity-0' : 'opacity-100'
                          }`}
                        />
                        {/* Vertical Drop Line to Child */}
                        <div className="absolute top-0 w-[2px] h-[18px] bg-white left-1/2 -translate-x-1/2" />
                        {/* Down Arrowhead onto Child */}
                        <div className="absolute top-[16px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-white z-20 left-1/2 -translate-x-1/2" />
                      </div>

                      <div className="pt-6">{child}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}