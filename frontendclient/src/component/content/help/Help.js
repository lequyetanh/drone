// @flow 
import * as React from 'react';
import { Fragment } from 'react';

function Help() {
  window.scrollTo({ left: 0, top: 0 });

  return (
    <Fragment>

        <div className="faqs-w3l py-sm-5 py-4">
          <div className="container py-xl-4 py-lg-2">
            <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
              <span>H</span>elp
              <span>P</span>age
            </h3>
            <div className="wthree-help mb-sm-5 mb-4">
              <div className="agile-left-help">
                <h3 className="w3-head">How Can We help you</h3>
                <form action="#" method="get">
                  <textarea placeholder="Your Query" name="Message" required=""></textarea>
                  <input type="submit" value="Submit" />
                </form>
                <h5 className="my-sm-4 my-3">OR</h5>
                <a href="contact.html">Contact Us</a>
              </div>
            </div>
            <h3 className="w3-head mb-2">Top 10 Frequently asked questions</h3>
            <div className="faq-w3agile">
              <ul className="faq pl-4">
                <li className="item1 mt-3 pl-2">
                  <a href="#" title="click here">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vehicula ipsum nec ?</a>
                  <ul>
                    <li className="subitem1">
                      <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque
                        corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </li>
                  </ul>
                </li>
                <li className="item2 mt-3 pl-2">
                  <a href="#" title="click here">The standard Lorem Ipsum passage Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices ?
                  </a>
                  <ul>
                    <li className="subitem1">
                      <p> Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus
                        qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident.</p>
                    </li>
                  </ul>
                </li>
                <li className="item3 mt-3 pl-2">
                  <a href="#" title="click here">Consectetuer adipiscing elit Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices?</a>
                  <ul>
                    <li className="subitem1">
                      <p>Dincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus
                        qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident.</p>
                    </li>
                  </ul>
                </li>
                <li className="item4 mt-3 pl-2">
                  <a href="#" title="click here">Sed diam nonummy nibh euismod Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices?</a>
                  <ul>
                    <li className="subitem1">
                      <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </li>
                  </ul>
                </li>
                <li className="item5 mt-3 pl-2">
                  <a href="#" title="click here">Euismod tincidunt laoreet Etiam faucibus viverra libero vel efficitur ?</a>
                  <ul>
                    <li className="subitem1">
                      <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </li>
                  </ul>
                </li>
                <li className="item6 mt-3 pl-2">
                  <a href="#" title="click here">Voluptas sit aspernatur aut Ut semper nisl ut laoreet ultrices ?</a>
                  <ul>
                    <li className="subitem1">
                      <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </li>
                  </ul>
                </li>
                <li className="item7 mt-3 pl-2">
                  <a href="#" title="click here">Donec ut quam ligula feugiat Ut semper nisl ut laoreet ultrices ?</a>
                  <ul>
                    <li className="subitem1">
                      <p>At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </li>
                  </ul>
                </li>
                <li className="item8 mt-3 pl-2">
                  <a href="#" title="click here">The standard Lorem Ipsum Ut semper nisl ut laoreet ultrices passage ?</a>
                  <ul>
                    <li className="subitem1">
                      <p>Lorem ipsum dolor sit amet At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus
                        qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident.</p>
                    </li>
                  </ul>
                </li>
                <li className="item9 mt-3 pl-2">
                  <a href="#" title="click here">Consectetuer adipiscing Ut semper nisl ut laoreet ultrices elit ?</a>
                  <ul>
                    <li className="subitem1">
                      <p>Lorem ipsum dolor sit amet At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus
                        qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                        cupiditate non provident.</p>
                    </li>
                  </ul>
                </li>
                <li className="item10 mt-3 pl-2">
                  <a href="#" title="click here">Sed diam nonummy Ut semper nisl ut laoreet ultrices nibh euismod ?</a>
                  <ul>
                    <li className="subitem1">
                      <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
                        et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default Help;
