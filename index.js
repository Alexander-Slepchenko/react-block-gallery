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
          'https://needsupply.com/dw/image/v2/BDJK_PRD/on/demandware.static/-/Sites-master/default/dwe7ebc3de/products/WPF12952/WPF12952_200220_NS_OF_1.jpg',
          'https://needsupply.com/dw/image/v2/BDJK_PRD/on/demandware.static/-/Sites-master/default/dw7e2d7670/products/WPF12952/WPF12952_200220_NS_OF_3.jpg',
          'https://needsupply.com/dw/image/v2/BDJK_PRD/on/demandware.static/-/Sites-master/default/dw2fb8c6c7/products/WPF12952/WPF12952_200220_NS_OF_5.jpg'
        ]} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
