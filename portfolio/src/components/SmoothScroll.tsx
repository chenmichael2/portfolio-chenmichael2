'use client';
import { ReactLenis, useLenis } from 'lenis/react'

export default function SmoothScroll({children}: {children: React.ReactNode}) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis root options= {{ lerp: 1 , duration: 1.5 }} >
      {children}
    </ReactLenis>
  )
}