import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';

function Section() {
  return (
    <section>
      <p>section</p>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category:id" element={<ItemListContainer />} />
        <Route path="/item:id" element={<ItemDetailContainer />} />
      </Routes>
    </section>
  )
}

export default Section