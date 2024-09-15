"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import Sidebar from '@/components/Sidebar/Sidebar';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
 
  return (
      <div className={styles.full}>
        <div className={`${styles.sidebar} ${sidebarOpen ? styles.active : ''}`}>
          <Sidebar />
        </div>
        <div className={styles.mainLeft}>
          <div className={styles.main2}>
            <div>
            <h2>All Products</h2>
            </div>
            <div>
            <select className={styles.select}>
              <option>Default shorting</option>
              <option>Short by price</option>
              <option>Short by rating</option>
              <option>Short by popularity</option>
              <option>Short by sale</option>
            </select>
            </div>
          </div>
          <div className={styles.cart}>
            <div className={styles.cart1}>
              <Image src="/images/x-box2.jpeg" width={150} height={150} alt="" />
              <h4>X-box series X</h4>
              <p>$499.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <div>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
              </div>
            </div>
            <div className={styles.cart1}>
              <Image
                src="/images/samsunglappi-1.jpg"
                width={150}
                height={150}
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
              <div>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
              </div>
            </div>
            <div className={styles.cart1}>
              <Image src="/images/ps5-1.jpg" width={150} height={150} alt=""/>
              <h4>PLay Station 5 Slim</h4>
              <p>$499.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </div>
              <div>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
              </div>
            </div>
            <div className={styles.cart1}>
              <Image src="/images/iphone14pro-1.jpg"width={150} height={150} alt="" />
              <h4>Iphone 14pro(256gb)</h4>
              <p>$899.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
              </div>
            </div>
            <div className={styles.cart1}>
              <Image src="/images/jblspeaker-1.jpeg" width={150} height={150} alt=""/>
              <h4>JBL Speaker</h4>
              <p>$325</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <div>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
              </div>
            </div>
            <div className={styles.cart1}>
              <Image src="/images/macbookair-1.jpg" width={150} height={150} alt="" />
              <h4>Macbook Air(2024)</h4>
              <p>$1299.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <div>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
              </div>
            </div>
            <div className={styles.cart1}>
              <Image src="/images/iphone15pro-1.jpg" width={150} height={150} alt="" />
              <h4>Iphone 15pro(256gb)</h4>
              <p>$1199.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <div>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
              </div>
            </div>
            <div className={styles.cart1}>
              <Image src="/images/macbookpro-1.jpg" width={150} height={150} alt="" />
              <h4>Macbook Pro(2024)</h4>
              <p>$1399.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </div>
              <div>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
              </div>
            </div>
            <div className={styles.cart1}>
              <Image src="/images/keyboard-1.jpg" width={130} height={130} alt="" />
              <h4>HyperX Gmaing Keyboard</h4>
              <p>$39.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </div>
              <div>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
              </div>
            </div>
            <div className={styles.cart1}>
              <Image src="/images/monitor-1.jpg" width={130} height={130} alt="" />
              <h4>Samsung Odyssey OLED</h4>
              <p>$1099.99</p>
              <div className={styles.rating}>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star-half-stroke"></i>
              </div>
              <div>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
              </div>
            </div>
          </div>
          </div>
          </div>
  );
};

export default Page;
