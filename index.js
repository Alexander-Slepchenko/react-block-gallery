import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from './components/gallery';
import './style.scss';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Gallery images={[
          'https://cdn.shopify.com/s/files/1/0635/0815/products/S11-20047-STL-0418_1440x.jpg?v=1599209042',
          'https://cdn.shopify.com/s/files/1/0635/0815/products/S60-19860-STL-1915_1440x.jpg?v=1599207051',
          'https://cdn.shopify.com/s/files/1/0635/0815/products/S18-19860-STL-0644_1440x.jpg?v=1600060568'
        ]} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
