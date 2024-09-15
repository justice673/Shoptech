"use client";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

export default function page() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={styles.main}>
      <div className={styles.main2}>
  <div className={styles.main2Left}>
    <h1>Pro anywhere</h1>
    <p>
      At ShopTech, we bring you the latest and greatest in electronic
      gadgets, from cutting-edge smartphones and laptops to must-have
      accessories and home entertainment systems. Whether you&apos;re a tech
      enthusiast or just looking for the perfect gift, explore our
      extensive collection of premium products, all at unbeatable
      prices. Experience innovation at your fingertips and shop with
      confidence today.
    </p>
    <button className={styles.readBtn}>Read More</button>
    {/* <button className={styles.addBtn}>
    <i class="fa-solid fa-cart-shopping" style={{ color: '#ffffff' }}></i> 
      Add to cart
      </button> */}
  </div>
  <div className={styles.main2Right}>
    <Image
      src="/images/MBPT16S-1-removebg-preview.png"
      width={600}
      height={600}
      alt=""
    />
  </div>
</div>

        <div className={styles.categories}>
          <div className={styles.mainCategories}>
            <div>
              <Image src="/images/headset.jpg" width={300} height={300} alt="" />
            </div>
            <div>
              {" "}
              <Image src="/images/keyboard.png" width={300} height={300} alt="" />
            </div>
            <div>
              {" "}
              <Image src="/images/monitor.jpg" width={300} height={300} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.title}>Featured Products</h2>
          <div className={styles.cart}>
            <div className={styles.cart1}>
              <Image src="/images/x-box2.jpeg" width={250} height={250} alt="" />
              <h4>X-box series X</h4>
              <p>$499.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
            <div className={styles.cart1}>
              <Image
                src="/images/samsunglappi-1.jpg"
                width={250}
                height={250}
                alt=""
              />
              <h4>Samsung Laptop</h4>
              <p>$369</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
            <div className={styles.cart1}>
              <Image src="/images/ps5-1.jpg" width={250} height={250} alt="" />
              <h4>PLay Station 5 Slim</h4>
              <p>$499.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </div>
            </div>
            <div className={styles.cart1}>
              <Image src="/images/iphone14pro-1.jpg" width={250} height={250} alt="" />
              <h4>Iphone 14pro(256gb)</h4>
              <p>$899.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
            <div className={styles.cart1}>
              <Image src="/images/jblspeaker-1.jpeg" width={250} height={250} alt="" />
              <h4>JBL Speaker</h4>
              <p>$325</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
            <div className={styles.cart1}>
              <Image src="/images/macbookair-1.jpg" width={250} height={250} alt="" />
              <h4>Macbook Air(2024)</h4>
              <p>$1299.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
            <div className={styles.cart1}>
              <Image src="/images/iphone15pro-1.jpg" width={250} height={250} alt=""/>
              <h4>Iphone 15pro(256gb)</h4>
              <p>$1199.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
            </div>
            <div className={styles.cart1}>
              <Image src="/images/macbookpro-1.jpg" width={250} height={250} alt="" />
              <h4>Macbook Pro(2024)</h4>
              <p>$1399.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.title}>Latest Products</h2>
          <div className={styles.cart}>
            <div className={styles.cart1}>
              <Image src="/images/keyboard-1.jpg" width={250} height={250} alt=""/>
              <h4>HyperX Gmaing Keyboard</h4>
              <p>$39.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </div>
            </div>{" "}
            <div className={styles.cart1}>
              <Image src="/images/monitor-1.jpg" width={250} height={250} alt=""/>
              <h4>Samsung Odyssey OLED</h4>
              <p>$1099.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </div>
            </div>{" "}
            <div className={styles.cart1}>
              <Image src="/images/headset-1.jpg" width={250} height={250} alt="" />
              <h4>Razer-BlackShark V2 Pro</h4>
              <p>$199.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </div>
            </div>{" "}
            <div className={styles.cart1}>
              <Image src="/images/ultrawatch-1.jpg" width={250} height={250} alt="" />
              <h4>Apple smart watch Ultra</h4>
              <p>$799.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </div>
            </div>{" "}
            <div className={styles.cart1}>
              <Image src="/images/s24ultra-1.jpg" width={200} height={250} alt=""/>
              <h4>Samsung Galaxy S24 Ultra(256gb)</h4>
              <p>$1299.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </div>
            </div>{" "}
            <div className={styles.cart1}>
              <Image src="/images/series9-1.jpg" width={250} height={250} alt=""/>
              <h4>Apple Series9 Smart watch</h4>
              <p>$399.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </div>
            </div>{" "}
            <div className={styles.cart1}>
              <Image src="/images/pixel9pro-1.jpg" width={250} height={250} alt=""/>
              <h4>Google Pixel 9pro(128gb)</h4>
              <p>$999.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </div>
            </div>{" "}
            <div className={styles.cart1}>
              <Image src="/images/pixel9-1.jpg" width={250} height={250} alt=""/>
              <h4>Google Pixel 9(128gb)</h4>
              <p>$799.00</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.main3}>
          <div className={styles.main3Left}>
            <Image
              src="/images/ps5_controller-removebg-preview.png"
              width={320}
              height={320}
              alt=""
            />
          </div>
          <div className={styles.main3Right}>
            <p>Exclusively Available on Shoptech</p>
            <h2>
              Sony PlayStation 5 DualSense Wireless Controller Cobalt Blue
            </h2>
            <small>
              Experience next-gen gaming with the PS5 DualSense controller.
              Featuring haptic feedback and adaptive triggers, it immerses you
              in every moment with dynamic vibrations and responsive tension.
              Its ergonomic design ensures comfort during long sessions, and the
              built-in microphone allows easy communication with teammates.
              Elevate your gameplay with precision and control.
            </small>
            <button className={styles.addBtn}>
              <i
                class="fa-solid fa-cart-shopping"
                style={{ color: "#ffffff" }}
              ></i>
              Buy Now
            </button>
          </div>
        </div>
        <div className={styles.testimonial}>
          <div className={styles.container}>
           <div className={styles.testimonial1}>
           <i class="fa-solid fa-quote-left" style={{ fontSize: '34px' }}></i>
            <p>Shoptech has completely changed the way I shop for electronics! The website is super easy to navigate, and I love how quickly I can find what I need. The product descriptions are detailed, and the customer service is excellent. I&apos;ve purchased multiple gaming accessories, and they always arrive on time. Highly recommend it to anyone who values quality and efficiency!</p>
            <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <Image src="/images/man1.avif"width={50} height={50} alt=""/>
              <h3>John M.</h3>
           </div>
           <div className={styles.testimonial1}>
           <i class="fa-solid fa-quote-left" style={{ fontSize: '34px' }}></i>
            <p>Shoptech is hands down one of the best tech websites I&apos;ve come across. From the clean layout to the fast loading speeds, everything is just perfect. The product range is fantastic, and I love how easy it is to compare items before purchasing. Their customer support is quick to respond too! Can&apos;t imagine going anywhere else for my gaming gear</p>
            <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <Image src="/images/woman.avif"width={50} height={50} alt=""/>
                <h3>Sarah L.</h3>
           </div>
           <div className={styles.testimonial1}>
           <i class="fa-solid fa-quote-left" style={{ fontSize: '34px' }}></i>
            <p>I had an amazing experience shopping on Shoptech! The website is not only visually appealing, but it&apos;s also really intuitive. I was able to find my new PS5 controller in minutes, and the checkout process was seamless. Plus, the variety of products they offer is impressive! I&apos;ll definitely be coming back for more tech accessories</p>
            <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </div>
              <Image src="/images/man2.avif"width={50} height={50} alt=""/>
               <h3>Michael R.</h3>
           </div>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </>
  );
}
