import React from 'react';
import './css/main.css';

import Board from './components/Board';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <main className="flexbox">
        <Board id="board-2" className="board">
          <h3  className="board-title">Drawing Palette</h3>
          <div className="board-main-two"></div>
        </Board>

        <Board id="board-1" className="board">
          <h3  className="board-title">Design Objects Palette</h3>
          <div className="board-main">
            <Card id="card-1" className="card-img" draggable="true">
              <img src="https://cdn.shopify.com/s/files/1/0150/6262/products/the-sill_petite-white-orchid_variant_x-small_hyde_cream.jpg?v=1606160377" alt="Orchid" width="100%" />
            </Card>
            <Card id="card-2" className="card" draggable="true">
              <p>Petite White Orchid</p>
            </Card>
            <Card id="card-3" className="card" draggable="true">
              <p>$75</p>
            </Card>
            <Card id="card-4" className="card" draggable="true">
              <p>Expiration Date</p>
            </Card>
            <Card id="card-5" className="card-img" draggable="true">
             <img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/UPC-A-036000291452.svg" alt="Barcode " width="100%" />
            </Card>
          </div>
        </Board>
      </main>

      {/*<div className="btn-wrapper">
        <button onClick={handleSave} className="save-btn">Save</button>
        <button onClick={handleCancel} className="clear-btn">Cancel</button>
      </div>*/}
    </div>
  );
}

export default App;