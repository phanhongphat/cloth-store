import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      //Header
      <div className="Header"> 
          <div className="H-up"></div>

          <div className="H-mid">
              <div className="H-name-logo">
                  <div className="H-logo">
                      <i className="fa fa-american-sign-language-interpreting"></i> 
                  </div>
                  <div className="H-com">
                      <h1>CLOTHE Store</h1>             
                  </div>
              </div>   
              <div className="H-cart">
                  <div className="H-cart-icon">
                      <button type="button" className="btn btn-default">
                      <i className="fa fa-cart-plus"></i>
                      </button>
                  </div> 
                  <div className="H-menu-icon">
                    <div className="dropdown">
                        <a href="#" className="dropdown-toggle-1" data-toggle="dropdown">
                           <button type="button" className="btn btn-default">
                              <i className="fa fa-bars"></i>
                           </button>
                        </a>
                        <div className="dropdown-menu">
                          <li><a href="#">WOMEN</a></li>
                          <li><a href="#">MEN</a></li>
                          <li><a href="#">JUNIOR</a></li>
                          <li><a href="#">ACCESSORIES</a></li>
                          <li>
                              <a href="#" className="dropdown-toggle-2" data-toggle="dropdown">
                                 COLLECTIONS
                              </a>
                              <div className="dropdown-menu">
                                <li><a href="#">2014</a></li>
                                <li><a href="#">2015</a></li>
                                <li><a href="#">2016</a></li>
                              </div>  
                          </li>
                        </div>         
                    </div>                    
                      
                  </div>
                  <div className="H-cart-text">   
                      <p> 3 items in your cart  $75.00</p>
                  </div>
              </div> 
          </div>

          <div className="H-menu">              
              <nav className="navbar navbar-default">
                  <div className="H-navbar">
                    <a className="navbar-brand" href="#">WOMEN</a>
                    <a className="navbar-brand" href="#">MEN</a>
                    <a className="navbar-brand" href="#">JUNIOR</a>
                    <a className="navbar-brand" href="#">ACCESSORIES</a>
                    <a className="navbar-brand" href="#">
                      <div className="H-dropdown-collectionMenu">
                        COLECTIONS
                        <div className="H-dropdown-content-collectionMenu">
                          <a href="#">2015 
                                  <i className="fa fa-caret-right">
                                    <div className="H-dropdown-content-collectionMenu2015">
                                        <a href="#">SPRING</a>
                                        <a href="#">SUMMER</a>
                                        <a href="#">AUTUMN</a>
                                        <a href="#">WINTER</a>
                                    </div> 
                                  </i>
                          </a>
                          <a href="#">2016 <i className="fa fa-caret-right"></i></a>
                          <a href="#">2017 <i className="fa fa-caret-right"></i></a>
                          <a href="#">2018 <i className="fa fa-caret-right"></i></a>
                        </div>
                      </div></a>
                    <a className="navbar-brand btn-danger active" href="#">SALE</a>
                  </div>
              
                  <div className="H-search-drop">
                    <form className="navbar-form navbar-left" role="search">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Type your searching..."/>
                      </div>
                      <button type="submit" className="btn btn-danger">SEARCH</button>
                    </form>

                    <ul className="nav navbar-nav navbar-right">
                      <li><a href="#">MY ACCOUNT</a></li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            DROP-DOWN 
                            <i className="fa fa-chevron-down"></i>
                        </a>
                        <ul className="dropdown-menu">
                          <li><a href="#">BIN BIN</a></li>
                          <li><a href="#">PELEGAIDEP</a></li>
                          <li><a href="#">VISETUBU</a></li>
                          <li><a href="#">PIPO</a></li>
                        </ul>
                      </li>
                    </ul>

                  </div>

              </nav>
          </div>
          <div className="H-end"></div>   


      <div className="B-image-content">
          <div className="B-image">
            <img className="BINBIN" src="https://www.soc.tas.edu.au/wp-content/uploads/college-shop-internal.jpg"/>
          </div>

          <div className="B-content">
            <p><h1 className="BINMC">SUMMER - SPRING COLLECTION</h1> 
            <p>   BIN ML      : Giám Đốc.  </p>
            <p>   PELEGAIDEP  : Thư Ký Giám Đốc.  </p>
            <p>   VISETUBU    : Nhân Viên Bán Hàng Nam. </p>
            <p>   PIPO        : Bà Lau Công.   </p>
            <p>   BIN MC      : Bảo Vệ.  </p>           
            </p>
          </div>
      </div>
      
      <div className="B-line-text">
          <div className="B-line"></div>
          <div className="B-text"><h2></h2></div> 
      </div>&nbsp;

      <div className="B-item"> 
          <div className="B-item1">
              <div className="B-items1">
                  <img className="B-items1-image" src="http://jokleather.com/wp-content/uploads/2018/01/daynitdajokleather-dn004.jpg" />
                  <div className="B-items1-info">
                    <h3>BELT</h3><br/>
                    <h4>79.00 $</h4><br/>
                    <button type="button" className="add-items1 btn btn-danger">ADD TO CART</button>
                  </div>
              </div>

              <div className="B-items2">
                  <img className="B-items2-image" src="http://jokleather.com/wp-content/uploads/2018/01/daynitdajokleather-dn004.jpg" />
                  <div className="B-items2-info">
                    <h3>BELT</h3><br/>
                       <h4><del>79.00 $</del></h4>
                        <div className="B-items-info--fix">
                        <h4>50.00 $</h4>
                        </div>   
                    <button type="button" className="add-items2 btn btn-danger">ADD TO CART</button>
                  </div>
              </div>
          </div>

          <div className="B-item2">
              <div className="B-items3">
                  <img className="B-items3-image" src="http://jokleather.com/wp-content/uploads/2018/01/daynitdajokleather-dn004.jpg" />
                  <div className="B-items3-info">
                    <h3>BELT</h3><br/>
                    <h4>79.00 $</h4><br/>
                    <button type="button" className="add-items3 btn btn-danger">ADD TO CART</button>
                  </div>
              </div>

              <div className="B-items4">
                  <img className="B-items4-image" src="http://jokleather.com/wp-content/uploads/2018/01/daynitdajokleather-dn004.jpg" />
                  <div className="B-items4-info">
                    <h3>BELT</h3><br/>
                    <h4>79.00 $</h4><br/>
                    <button type="button" className="add-items4 btn btn-danger">ADD TO CART</button>
                  </div>
              </div>
          </div>
      </div>



      <div className="Footer">
          <div className="F-cate">
              <h3>TOP CATEGORIES</h3><br/>
              <p>WOMEN</p>
              <p>MEN</p>
              <p>JUNIOR</p>
              <p>ACCESSORIES</p>
          </div>

          <div className="F-service">
              <h3>CUSTOMER SERVICE</h3><br/>
              <p>RETURNS</p>
              <p>SHIPPING</p>
              <p>ABOUT US</p>
              <p>CONTACT US</p>
          </div>

          <div className="F-subcribe">
              <h3>NEWSLETTER SUBCRIBE</h3><br/>
              <div className="F-text-button">
                  <input type="text" placeholder="Enter your email address..." className="F-text form-control" /> 
                  <button type="button" className="F-subcribe btn btn-danger">SUBCRIBE</button>
              </div>
          </div>
      </div>    

      </div>
      


    );
  }
}

export default App;
