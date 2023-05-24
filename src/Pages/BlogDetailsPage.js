import React from 'react'
import { Link } from 'react-router-dom'
import bsh1 from '../Images/blog-hero.jpg'

import bdi1 from '../Images/bd-item-1.jpg'
import bdi2 from '../Images/bd-item-2.jpg'
import bdi3 from '../Images/bd-item-3.jpg'

import pp1 from '../Images/pp-1.jpg'
import pp2 from '../Images/pp-2.jpg'
import pp3 from '../Images/pp-3.jpg'
import pp4 from '../Images/pp-4.jpg'

import {FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const BlogDetailsPage = () => {
  return (
    <div>

      <div
        className="blog-hero set-bg"
        data-setbg="img/blog/details/blog-hero.jpg"
        style={{ backgroundImage: `url(${bsh1})` }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="blog__hero__text">
                <div className="label">Tips &amp; Idea</div>
                <h2>Edible Favorites for Your Cutting Garden</h2>
                <ul>
                  <li>
                    By <span>Cory Vaughn</span>
                  </li>
                  <li>MAY 22, 2020</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>




      <section className="blog-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog__details__content">
                <div className="blog__details__top__text">
                  <p>
                    Over the years I’ve tucked carrots into a famous chef’s bridal
                    bouquet, included chili peppers and tiny eggplant in food-loving
                    grooms’ boutonnieres, sprinkled clusters of cherry tomatoes
                    through hundreds of centerpieces, added raspberries to guestbook
                    displays, and woven scented herbs into as many floral designs as I
                    could manage.
                  </p>
                  <div className="quote">
                    <p>
                      “ There’s nothing quite like pairing food with flowers. Most
                      people don’t pay much attention to what’s in a vase unless they
                      recognize the ingredients ”
                    </p>
                  </div>
                  <p>
                    As you’re planning your garden this year, I highly encourage you
                    to add some edibles alongside your cut flowers. Not only are they
                    beautiful for arrangements, they are wonderful for eating. We
                    chose the varieties in Floret’s collection of edibles—including
                    edible flowers—because they are beautiful and delicious.
                  </p>
                  <p>
                    All these varieties are easy to grow from seed. Many love the heat
                    and produce abundantly from summer through the first fall frost.
                    Because our farm is situated in an area with relatively cool
                    summers, I grow most of my edibles in a hoophouse for an added
                    level of heat. But if your garden gets plenty of sun, you can grow
                    all your edibles outdoors.
                  </p>
                  <p>Here are some of my favorite edibles for floral design.</p>
                </div>
              </div>
              <div className="blog__details__item">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="blog__details__item__text">
                      <h4>1: FLOWERS</h4>
                      <p>
                        Peas are a cool weather crop. Direct seed in early spring as
                        soon as the soil can be worked. Provide a strong trellis or
                        support for vines to climb.
                      </p>
                      <p>
                        For use in floral design, harvest stems when pods are brightly
                        colored, taking care when handling delicate vines. Expect a
                        vase life of 5 to 7 days. (Please note that unlike these
                        edible garden peas, the seeds of sweet peas are poisonous if
                        ingested; it’s important to make this distinction in the
                        garden.)
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="blog__details__item__pic">
                      <img src={bdi1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog__details__item">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="blog__details__item__pic">
                      <img src={bdi2} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="blog__details__item__text">
                      <h4>2.Tomatoes</h4>
                      <p>
                        Peas are a cool weather crop. Direct seed in early spring as
                        soon as the soil can be worked. Provide a strong trellis or
                        support for vines to climb.
                      </p>
                      <p>
                        For use in floral design, harvest stems when pods are brightly
                        colored, taking care when handling delicate vines. Expect a
                        vase life of 5 to 7 days. (Please note that unlike these
                        edible garden peas, the seeds of sweet peas are poisonous if
                        ingested; it’s important to make this distinction in the
                        garden.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog__details__item normal__item">
                <div className="blog__details__item__text">
                  <h4>3. Bachelor’s Buttons</h4>
                  <p>
                    This cutting garden classic is easy to grow, pollinator-friendly,
                    and a great choice for beginners. Plants will flower over a long
                    period of time if regularly harvested. Add the bright, colorful
                    petals to salads or egg dishes as a delightful garnish.
                  </p>
                  <p>
                    Combines shades of ethereal sapphire, pale blue, and cool-hued
                    bicolors to resemble the midnight sky, and ‘Classic Romantic’, the
                    sweetest mix of blush, pink, white, and bicolors for romantic
                    bouquets and wedding work.
                  </p>
                </div>
                <div className="blog__details__item__pic">
                  <img src={bdi3} alt="" />
                </div>
                <div className="blog__details__item__text">
                  <p>
                    Do you enjoy growing vegetables and edible flowers you can use in
                    arrangements? Are there other varieties you’d like to try? I’d
                    love to hear about your plans in your comments below.
                  </p>
                  <p>
                    Please note: If you submit a comment and it doesn’t show up right
                    away, sit tight; we have a spam filter that requires we approve
                    most comments before they are published.
                  </p>
                  <p>
                    Lastly, if you find this information helpful, I would love it if
                    you would share it with your friends.
                  </p>
                </div>
              </div>
              <div className="blog__details__widget">
                <div className="row">
                  <div className="col-lg-8 col-md-8">
                    <div className="blog__details__tags">
                      <span>Tag:</span>
                      <a href="#">Flower</a>
                      <a href="#">Herbal</a>
                      <a href="#">Tomato</a>
                      <a href="#">Edible</a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="blog__details__share">
                      <span>Share:</span>
                      <Link to="#">
                        <FaFacebookF />
                      </Link>
                      <Link to="#">
                        <FaTwitter />
                      </Link>
                      <Link to="#">
                        <FaInstagram />
                      </Link>
                      <Link to="#">
                        <FaLinkedinIn />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog__details__btns">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__details__btns__item">
                      <span>Previous</span>
                      <h4>
                        The Farmer &amp; the {"{"}Florist{"}"} Interview: Christin
                        Geall
                      </h4>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="blog__details__btns__item blog__details__btns__item--next">
                      <span>UP NEXT</span>
                      <h4>Launching A Year in Flowers into the World</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog__details__comment">
                <h4>28 Comments</h4>
                <div className="blog__details__comment__item">
                  <h5>
                    Franklin Flower Farm <span>on April 20th 2020</span>
                  </h5>
                  <h6>Congratulations Erin and Chris and your entire team!</h6>
                  <p>
                    An achievement well-earned and much deserved! Thank you for
                    advocating for local flowers and local flower farms in the US and
                    worldwide.
                  </p>
                  <a href="#">Reply</a>
                </div>
                <div className="blog__details__comment__item">
                  <h5>
                    Franklin Flower Farm <span>on April 20th 2020</span>
                  </h5>
                  <h6>Congratulations Erin and Chris and your entire team!</h6>
                  <p>
                    An achievement well-earned and much deserved! Thank you for
                    advocating for local flowers and local flower farms in the US and
                    worldwide.
                  </p>
                  <a href="#">Reply</a>
                </div>
                <div className="blog__details__comment__item">
                  <h5>
                    Franklin Flower Farm <span>on April 20th 2020</span>
                  </h5>
                  <h6>Congratulations Erin and Chris and your entire team!</h6>
                  <p>
                    An achievement well-earned and much deserved! Thank you for
                    advocating for local flowers and local flower farms in the US and
                    worldwide.
                  </p>
                  <a href="#">Reply</a>
                </div>
                <div className="all__comment">
                  <a href="#">Show all comment</a>
                </div>
              </div>
              <div className="blog__details__form">
                <h4>Leave a COmment</h4>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-lg-6">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="col-lg-12">
                      <textarea placeholder="Comment" defaultValue={""} />
                      <p>
                        For security, use of Google’s reCAPTCHA service is required
                        which is subject to the Google Privacy Policy and Terms of
                        Use. <span>I agree to these terms.</span>
                      </p>
                      <button type="submit" className="site-btn">
                        Post comment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog__details__sidebar">
                <div className="blog__details__categories">
                  <h4>Categories</h4>
                  <ul>
                    <li>
                      <a href="#">
                        Trend news <span>28</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        How’s to <span>153</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Tips &amp; Ideas <span>86</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        DIY &amp; craft <span>182</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Farm tours <span>06</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="blog__details__post">
                  <h4 className="title">Popular posts</h4>
                  <div className="blog__details__post__item">
                    <img src={pp1} alt="" />
                    <div className="blog__details__post__item__text">
                      <h4>
                        <a href="#">Launching A Year in Flowers into the World</a>
                      </h4>
                      <p>
                        Flowers have a language all their own. In Victorian times,
                        receiving a…
                      </p>
                      <span>MAY 22, 2020</span>
                    </div>
                  </div>
                  <div className="blog__details__post__item">
                    <img src={pp2} alt="" />
                    <div className="blog__details__post__item__text">
                      <h4>
                        <a href="#">
                          The Farmer &amp; the {"{"}Florist{"}"} Interview: Clare
                          Nolan
                        </a>
                      </h4>
                      <p>
                        Flowers have a language all their own. In Victorian times,
                        receiving a…
                      </p>
                      <span>MAY 22, 2020</span>
                    </div>
                  </div>
                  <div className="blog__details__post__item">
                    <img src={pp3} alt="" />
                    <div className="blog__details__post__item__text">
                      <h4>
                        <a href="#">Floret Joins the Magnolia Network</a>
                      </h4>
                      <p>
                        Flowers have a language all their own. In Victorian times,
                        receiving a…
                      </p>
                      <span>MAY 22, 2020</span>
                    </div>
                  </div>
                  <div className="blog__details__post__item">
                    <img src={pp4} alt="" />
                    <div className="blog__details__post__item__text">
                      <h4>
                        <a href="#">Author Interview: Christine Chitnis</a>
                      </h4>
                      <p>
                        Flowers have a language all their own. In Victorian times,
                        receiving a…
                      </p>
                      <span>MAY 22, 2020</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default BlogDetailsPage