import React from 'react';
import {Route, Routes} from "react-router-dom";

function Section() {
  return (
    <section>
      <p>section</p>
        <Routes>
          {/* <Route path="/" element="" />
          <Route path="/" element="" /> */}
          <Route path="/info" element={<p>section3</p>} />
        </Routes>
    </section>
  )
}

export default Section