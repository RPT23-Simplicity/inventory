import React from 'react';
import ReactDOM from 'react-dom';
import SizeTile from './components/sizeTile.jsx';
import axios from 'axios';

class SizeGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: [],
      currentSize: '',
      currentTile: '',
      didNotSelectSize: false,
      fewSizesLeft: false
    };
  }

  componentDidMount () {
    const ids = window.location.pathname.split('/');
    const productId = ids[2];
    const styleId = ids[3];
  
    this.getSizes(productId, styleId)
    .then((results) => {
      this.setState({sizes: results});  
    })
    .catch((err) => {
      throw(err);
    });
  }

  getSizes (productId, styleId) {

    return new Promise ((res, rej) => {
      axios.get(`http://localhost:3004/inventory/${productId}/${styleId}`)
      .then((results) => {
        res(results.data);
      })
      .catch((err) => {
        rej(err);
      });
    })
  }

  selectSize (selectedSize) {
    const selected = document.getElementsByClassName(selectedSize)[0];
    if (this.state.currentSize) {
      this.state.currentTile.setAttribute('class', `sizeTile ${this.state.currentSize}`);
    }
    
    this.setState({currentSize: selectedSize, currentTile: selected}, () => {
      selected.setAttribute('class', `selected ${selectedSize}`);

      if (this.hasFewLeft(this.getQuantity(this.state.currentTile))) {
        if (!document.getElementById('fewLeft')) {
          this.setState({fewSizesLeft: true});
        }
      } else {
          this.setState({fewSizesLeft: false});
      }
    });

  }

  hasFewLeft (quantity) {
    let selectedQuantity = parseInt(quantity);

    if (selectedQuantity <= 2) {
      return true;
    } 
    return false;
  }

  getQuantity (selectedTile) {
    return selectedTile.id.slice(8);
  }

  addToBag () {
    if (!this.state.currentSize) {
      this.setState({didNotSelectSize: true});
    } else {
      this.setState({didNotSelectSize: false});
    }
  }

  render() {
    let gridClass;
    let selectASizeClass;
    let orderSoonClass;

    if (!this.state.currentSize && this.state.didNotSelectSize) {
      gridClass = 'grid grid-selected';
      selectASizeClass = 'inventory-text';
    } else {
      gridClass = 'grid';
      selectASizeClass = 'hidden';
    }

    if (this.state.fewSizesLeft) {
      orderSoonClass = 'fewLeft';
    } else {
      orderSoonClass = 'hidden';
    }

    return (
        <div id="inventory">
          <div className={orderSoonClass}>Just a few left. Order soon.</div>
          <label id="selectSize" className="inventoryHeader">Select Size</label>
          <label id="sizeGuide" className="inventoryHeader">Size Guide</label>
          <div className={gridClass}>
              {this.state.sizes.map(ele => <SizeTile sizes={ele} clickFunc={this.selectSize.bind(this)}/>)}
          </div>
          <div className={selectASizeClass}>Please select a size.</div>
          <button className="inventory-button add-to-cart" onClick={this.addToBag.bind(this)}>Add to Bag</button>
          <button className="inventory-button favorite">Favorite  ♡</button>
          <div className="shipping-text">Shipping</div>
          <div className="shipping-date">Arrives by Sun, Nov 1
            <div className="edit-location">Edit Location</div>
          </div>
        </div>
    );   
    
  }
}

const domContainer = document.querySelector('#inventory-module');
ReactDOM.render(<SizeGrid />, domContainer);