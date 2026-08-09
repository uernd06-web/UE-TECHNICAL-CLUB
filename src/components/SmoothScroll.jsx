'use client';
import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }) {
  // Lenis-এর গ্লোবাল কনফিগারেশন
  const lenisOptions = {
    lerp: 0.1,         // স্ক্রলিংয়ের স্মুথনেস (0.05 থেকে 0.1 এর মধ্যে রাখা সেরা)
    duration: 1.2,     // স্ক্রল অ্যানিমেশনের সময়কাল (সেকেন্ডে)
    smoothWheel: true, // মাউস হুইল স্ক্রল স্মুথ করবে
    wheelMultiplier: 1, // মাউস হুইলের স্পিড
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}