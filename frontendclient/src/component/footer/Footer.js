import React, {Fragment} from 'react';
import './Footer.scss';
import {Link} from 'react-router-dom';
import Section from './../common/section/Section'

function Footer() {
  return (
    <Fragment>
      <Section></Section>
      	<footer>
        <div className="footer-top-first">
          <div className="container py-md-5 py-sm-4 py-3">
            <h2 className="footer-top-head-w3l font-weight-bold mb-2">Electronics :</h2>
            <p className="footer-main mb-4">
              If you're considering a new laptop, looking for a powerful new car stereo or shopping for a new HDTV, we make it easy to
              find exactly what you need at a price you can afford. We offer Every Day Low Prices on TVs, laptops, cell phones, tablets
              and iPads, video games, desktop computers, cameras and camcorders, audio, video and more.</p>
            <div className="row w3l-grids-footer border-top border-bottom py-sm-4 py-3">
              <div className="col-md-4 offer-footer">
                <div className="row">
                  <div className="col-4 icon-fot">
                    <i className="fas fa-dolly"></i>
                  </div>
                  <div className="col-8 text-form-footer">
                    <h3>Free Shipping</h3>
                    <p>on orders over $100</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 offer-footer my-md-0 my-4">
                <div className="row">
                  <div className="col-4 icon-fot">
                    <i className="fas fa-shipping-fast"></i>
                  </div>
                  <div className="col-8 text-form-footer">
                    <h3>Fast Delivery</h3>
                    <p>World Wide</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 offer-footer">
                <div className="row">
                  <div className="col-4 icon-fot">
                    <i className="far fa-thumbs-up"></i>
                  </div>
                  <div className="col-8 text-form-footer">
                    <h3>Big Choice</h3>
                    <p>of Products</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w3l-middlefooter-sec">
          <div className="container py-md-5 py-sm-4 py-3">
            <div className="row footer-info w3-agileits-info">
              <div className="col-md-3 col-sm-6 footer-grids">
                <h3 className="text-white font-weight-bold mb-3">Categories</h3>
                <ul>
                  <li className="mb-3">
                    <a href="product.html">Mobiles </a>
                  </li>
                  <li className="mb-3">
                    <a href="product.html">Computers</a>
                  </li>
                  <li className="mb-3">
                    <a href="product.html">TV, Audio</a>
                  </li>
                  <li className="mb-3">
                    <a href="product2.html">Smartphones</a>
                  </li>
                  <li className="mb-3">
                    <a href="product.html">Washing Machines</a>
                  </li>
                  <li>
                    <a href="product2.html">Refrigerators</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 footer-grids mt-sm-0 mt-4">
                <h3 className="text-white font-weight-bold mb-3">Quick Links</h3>
                <ul>
                  <li className="mb-3">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/help">Help</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/faqs">Faqs</Link>
                  </li>
                  <li className="mb-3">
                    <Link to="/rule">Terms of use</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 footer-grids mt-md-0 mt-4">
                <h3 className="text-white font-weight-bold mb-3">Get in Touch</h3>
                <ul>
                  <li className="mb-3">
                    <i className="fas fa-map-marker"></i> 123 Sebastian, USA.</li>
                  <li className="mb-3">
                    <i className="fas fa-mobile"></i> 333 222 3333 </li>
                  <li className="mb-3">
                    <i className="fas fa-phone"></i> +222 11 4444 </li>
                  <li className="mb-3">
                    <i className="fas fa-envelope-open"></i>
                    <a href="mailto:example@mail.com"> mail 1@example.com</a>
                  </li>
                  <li>
                    <i className="fas fa-envelope-open"></i>
                    <a href="mailto:example@mail.com"> mail 2@example.com</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 footer-grids w3l-agileits mt-md-0 mt-4">
                <h3 className="text-white font-weight-bold mb-3">Newsletter</h3>
                <p className="mb-3">Free Delivery on your first order!</p>
                <form action="#" method="post">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email" name="email" required="" />
                    <input type="submit" value="Go" />
                  </div>
                </form>
                <div className="footer-grids  w3l-socialmk mt-3">
                  <h3 className="text-white font-weight-bold mb-3">Follow Us on</h3>
                  <div className="social">
                    <ul>
                      <li>
                        <a className="icon fb" href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a className="icon tw" href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a className="icon gp" href="#">
                          <i className="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="agile-sometext py-md-5 py-sm-4 py-3">
          <div className="container">
            <div className="sub-some">
              <h5 className="font-weight-bold mb-2">Mobile & Tablets :</h5>
              <ul>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Android Phones</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Smartphones</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Feature Phones</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Unboxed Phones</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Refurbished Phones</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2"> Tablets</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">CDMA Phones</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Value Added Services</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Sell Old</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Used Mobiles</a>
                </li>
              </ul>
            </div>
            <div className="sub-some mt-4">
              <h5 className="font-weight-bold mb-2">Computers :</h5>
              <ul>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Laptops </a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Printers</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Routers</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Ink & Toner Cartridges</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Monitors</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Video Games</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Unboxed & Refurbished Laptops</a>
                </li>
                <li>
                  <a href="product.html" className="border-right pr-2">Assembled Desktops</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Data Cards</a>
                </li>
              </ul>
            </div>
            <div className="sub-some mt-4">
              <h5 className="font-weight-bold mb-2">TV, Audio & Large Appliances :</h5>
              <ul>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">TVs & DTH</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Home Theatre Systems</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Hidden Cameras & CCTVs</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Refrigerators</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Washing Machines</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2"> Air Conditioners</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Cameras</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Speakers</a>
                </li>
              </ul>
            </div>
            <div className="sub-some mt-4">
              <h5 className="font-weight-bold mb-2">Mobile & Laptop Accessories :</h5>
              <ul>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Headphones</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Power Banks </a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Backpacks</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Mobile Cases & Covers</a>
                </li>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Pen Drives</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">External Hard Disks</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2"> Mouse</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Smart Watches & Fitness Bands</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">MicroSD Cards</a>
                </li>
              </ul>
            </div>
            <div className="sub-some mt-4">
              <h5 className="font-weight-bold mb-2">Appliances :</h5>
              <ul>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Trimmers</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Hair Dryers</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Emergency Lights</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Water Purifiers </a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Electric Kettles</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Hair Straighteners</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Induction Cooktops</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Sewing Machines</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2"> Geysers</a>
                </li>
              </ul>
            </div>
            <div className="sub-some mt-4">
              <h5 className="font-weight-bold mb-2">Popular on Electro Store</h5>
              <ul>
                <li className="m-sm-1">
                  <a href="product.html" className="border-right pr-2">Offers & Coupons</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Couple Watches</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Gas Stoves</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2"> Air Coolers</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Air Purifiers</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Headphones</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2"> Headsets</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Pressure Cookers</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Sandwich Makers</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Air Friers</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Irons</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">LED TV</a>
                </li>
                <li className="m-sm-1">
                  <a href="product2.html" className="border-right pr-2">Sandwich Makers</a>
                </li>
              </ul>
            </div>
            <div className="sub-some child-momu mt-4">
              <h5 className="font-weight-bold mb-3">Payment Method</h5>
              <ul>
                <li>
                  <img src="/assets/images/pay2.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/pay5.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/pay1.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/pay4.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/pay6.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/pay3.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/pay7.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/pay8.png" alt="" />
                </li>
                <li>
                  <img src="/assets/images/pay9.png" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <div className="copy-right py-3">
        <div className="container">
          <p className="text-center text-white">© 2018 Electro Store. All rights reserved | Design by
            <a href="http://w3layouts.com"> W3layouts.</a>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Footer;
