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
      <div className={styles.detail}>
        <div className={styles.container}>
        <div className={styles.container1}>
            <Image src="/images/headset-1.jpg" width={500} height={500}/>
        </div>
        <div className={styles.container2}>
            <p>Home / Gaming Headset</p>
            <h1>Razer-BlackShark V2 Pro</h1>
            <h4>$199.99</h4>
            <select className={styles.select}>
                <option>Select Color</option>
                <option>Blue</option>
                <option>White</option>
                <option>Black</option>
                <option>Pink</option>
            </select>
            <input type="number" value="1" className={styles.select1}/>
            <button className={styles.addBtn}>
              <i
                class="fa-solid fa-cart-shopping"
                style={{ color: "#ffffff" }}
              ></i>
              Buy Now
            </button>
            <h3>Prouct Details</h3>
            <p>Featuring crystal-clear sound, a noise-canceling microphone, and comfortable, adjustable earcups, this headset is perfect for competitive gaming or casual enjoyment. Hear every detail, communicate clearly, and stay focused on the action</p>
        </div>
        </div>
      </div>
      <div className={styles.main}>
        <div>
          <div className={styles.cart}>
            <div className={styles.cart1}>
              <Image src="/images/x-box2.jpeg" width={250} height={250} />
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
              <Image src="/images/ps5-1.jpg" width={250} height={250} />
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
              <Image src="/images/iphone14pro-1.jpg" width={250} height={250} />
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
              <Image src="/images/jblspeaker-1.jpeg" width={250} height={250} />
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
              <Image src="/images/macbookair-1.jpg" width={250} height={250} />
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
              <Image src="/images/iphone15pro-1.jpg" width={250} height={250} />
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
              <Image src="/images/macbookpro-1.jpg" width={250} height={250} />
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
            <div className={styles.cart1}>
              <Image src="/images/keyboard-1.jpg" width={250} height={250} />
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
              <Image src="/images/monitor-1.jpg" width={250} height={250} />
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
              <Image src="/images/headset-1.jpg" width={250} height={250} />
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
              <Image src="/images/ultrawatch-1.jpg" width={250} height={250} />
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
              <Image src="/images/s24ultra-1.jpg" width={200} height={250} />
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
              <Image src="/images/series9-1.jpg" width={250} height={250} />
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
              <Image src="/images/pixel9pro-1.jpg" width={250} height={250} />
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
              <Image src="/images/pixel9-1.jpg" width={250} height={250} />
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
        <div>{/* <Footer/> */}</div>
      </div>
    </>
  );
}
