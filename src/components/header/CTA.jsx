import React from 'react'
import ErikaSoaresCV from "../../assets/erikasoarescv.png"

function CTA() {
  return (
    <div className="cta">
      <a href={ErikaSoaresCV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  );
}

export default CTA