import { useState } from 'react'
import './App.css'
import Plx from "react-plx";
import 'react-tooltip/dist/react-tooltip.css'

import Hero from './components/Hero'

const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 0.25,
        endValue: 0.5,
        property: "scale",
      },
    ],
  },
];

function App() {

  return (
    <>
      <Hero/>
    </>
  )
}

export default App;
