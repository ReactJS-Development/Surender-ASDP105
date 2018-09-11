import React, { Component } from 'react';
import './App.css';

class Card extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showMenu: false,imgurl:""
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.animal=()=>{
      console.log("this is click");
    } 
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Show menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button onClick={this.animal}> Animal </button>
                <button> Fruits </button>
                <button> Building </button>
                <button> Cars </button>
                <button> Planes </button>
              </div>
            )
            : (
              null
            )
        }
        {this.props.imgurl}
      </div>
    );
  }
}
export default Card;