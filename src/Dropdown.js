import React from 'react';
import './App.css';

class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,imageURL:""
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }
  animal = () =>{
    this.setState({imageURL:"https://www.joyofanimals.com/wp-content/uploads/2015/11/horsesinfield.jpg" 
                  });
  }
  fruits = () =>{
    this.setState({imageURL:"https://media.istockphoto.com/vectors/vegetable-and-fruits-hand-drawn-colored-vector-icons-2-vector-id524549458" 
                  });
  }
  building =() =>{
    this.setState({imageURL:"http://www.marlinstudios.com/products/bldgmodels/cityscene.jpg" 
                  });
  }
  cars=() =>{
    this.setState({imageURL:"https://amp.businessinsider.com/images/5aabc7bbc72ac12f008b4609-750-563.jpg" 
                  });
  }
  planes=() =>{
    this.setState({imageURL:"https://www.incimages.com/uploaded_files/image/970x450/getty_647190268_350896.jpg" 
                  });
  }

  render() {
    return (

      <div>
        <div  className="dropdown" style = {{background:"red",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> Option </div>

          { this.state.displayMenu ? (
          <ul>
         <li><button className="active" onClick={this.animal}>Animal</button></li>
         <li><button onClick={this.fruits}>Fruits</button></li>
         <li><button onClick={this.building}>Building</button></li>
         <li><button onClick={this.cars}>Cars</button></li>
         <li><button onClick={this.planes}>Planes</button></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>
      <img src={this.state.imageURL} className="hero-image" />
    </div>
    );
  }
}

export default Dropdown;