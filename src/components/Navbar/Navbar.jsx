"use client";
import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.mainNav}>
        <Link href={"/"}>SHOPTECH</Link>
        <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/products"}>All Products</Link>
            <Link href={"/categories"}>Categories</Link>
            <Link href={"/settings"}>Settings</Link>
        </nav>
            <div className={styles.mainNav2}>
                <Link href={"/cart"}>
                <i class="fa-solid fa-cart-shopping" style={{ color: '#ffffff' }}></i>
                </Link>
                <Link href={"/login"}>Login</Link>
                <Link href={"/signup"}>Sign Up</Link>
            </div>
    </div>
  )
}
