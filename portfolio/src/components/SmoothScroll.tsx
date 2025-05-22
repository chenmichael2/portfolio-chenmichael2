import { ReactLenis, useLenis } from 'lenis/react'

function App() {
  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })

  return (
    <>
      <ReactLenis root />
      { /* content */ }
    </>
  )
}
