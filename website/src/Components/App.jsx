import React, { Component } from'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          id: 1,
          imageSrc: 'WavyHauzTrts_pics/LemonBlissberry 2.jpeg',
          title: 'Lemon Blissberry',
        },
        {
          id: 2,
          imageSrc: 'WavyHauzTrts_pics/Ohhhreos.jpeg',
          title: 'Ohh-reos',
        },
        {
          id: 3,
          imageSrc: 'WavyHauzTrts_pics/IMG_7307 2.jpeg',
          title: 'Apple Spice Muffins',
        },
      ],
    };
  }

  render() {
    const { cards } = this.state;

    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        />
<nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">
       <img src="WavyHauzTrts_pics/Logo1__1.jpg"></img>
      </a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Menu</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Sign Up</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#"><span className="glyphicon glyphicon-shopping-cart"></span> Cart</a></li>
      </ul>
    </div>
  </div>
</nav>

        <div className="container content">
          <div className="row">
            {cards.map((card) => (
              <div className="col-sm-4" key={card.id}>
                <div className="panel">
                  <img
                    src={card.imageSrc}
                    className="img-thumbnail"
                    alt="Image"
                  />
                  <div className="box">
                    <h1>{card.title}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Your additional content code goes here */}
        {/* Your carousel code goes here */}
        {/* Your footer code goes here */}
      </div>
    );
  }
}

export default App;