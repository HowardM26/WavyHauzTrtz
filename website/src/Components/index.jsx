function App() {
    return (
      <div>
      <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet"/>
  
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
      <div className="col-sm-4">
        <div className="panel">
          <img src="WavyHauzTrts_pics/LemonBlissberry 2.jpeg" className="img-thumbnail" alt="Image"/>
          <div className="box">
            <h1 id="content1-headline1">Lemon Blissberry</h1>
          </div>
  
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel">
          <a href="#"><img src="WavyHauzTrts_pics/Ohhhreos.jpeg" className="img-thumbnail"/>
          <div className="box">
            <h1 id="content1-headline2">Ohh-reos</h1>
          </div>
          </a>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="panel">
        <a href="#"><img src="WavyHauzTrts_pics/IMG_7307 2.jpeg" className="img-thumbnail" alt="Image"/>
          <div className="box">
            <h1 id="content1-headline3">Apple Spice Muffins</h1>
          </div>
          </a></div>
      </div>
    </div>
  </div>
  
  <div className="container">
    <div className="row row-eq-height">
      <div className="col-sm-5 content2">
        <p id="content2-1">Here at The WavyHauz, baking is the passion. Come and visit - your taste buds will thank you!</p>
      </div>
      <div className="col-sm-2">
        <img src="" className="img-circle"/>
      </div>
      <div className="col-sm-5 content2">
        <p id="content2-2">I use only the finest and freshest ingredients to create my treats.</p>
      </div>
    </div>
  </div>
  
  <div id="carousel" className="carousel slide" data-ride="carousel">
  
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
      </ol>
  
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img src="https://res.cloudinary.com/dbqqjaqqa/image/upload/v1490351456/carousel1.jpg"/>
          <div className="carousel-caption">
            <h3>100% Homemade</h3>
            <p>We make pastries at home using 100% natural ingredients</p>
          </div>
        </div>
        <div className="item">
          <img src="https://res.cloudinary.com/dbqqjaqqa/image/upload/v1490276719/carousel2_zxje9g.jpg" alt="Image"/>
          <div className="carousel-caption">
            <h3>Make order</h3>
            <p>Call us and we will delivery fresh pastries to your home</p>
          </div>
        </div>
        <div className="item">
          <img src="https://res.cloudinary.com/dbqqjaqqa/image/upload/v1490276801/carousel3_heh2hy.jpg" alt="Image"/>
          <div className="carousel-caption">
            <h3>100% Homemade</h3>
            <p>We make pastries at home using 100% natural ingredients</p>
          </div>
        </div>
        <div className="item">
          <img src="https://res.cloudinary.com/dbqqjaqqa/image/upload/v1490276736/carousel4_iuwmrn.jpg" alt="Image"/>
          <div className="carousel-caption">
            <h3>Make order</h3>
            <p>Call us and we will delivery fresh pastries to your home</p>
          </div>
        </div>
      </div>
  
      <a className="left carousel-control" href="#carousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#carousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
  </div>
  
  
  <footer className="container-fluid text-center">
    <div className="row"/>
      <div className="col-sm-4">
        <h1 id="footer1">Buy Online</h1>
        <ul className="footer-links">
          <li></li>
          <li>Order Baked Goods</li>
        </ul>
      </div>
      <div className="col-sm-4">
        <h1 id="footer2">Our menu</h1>
        <ul className="footer-links">
          <li>Explore our menu</li>
        </ul>
      </div>
      <div className="col-sm-4">
        <h1 id="footer3">About</h1>
        <ul className="footer-links">
          <li>FAQs</li>
          <li>Store policy</li>
        </ul>
      </div>
  </footer>
    </div>
      
    );
  }