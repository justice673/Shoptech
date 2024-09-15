"use client";
import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import Link from 'next/link';

const Sidebar = () => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    return (
        <div className={styles.main1}>
            <div className={`${styles.mainLeft} ${isSidebarExpanded ? styles.expanded : ''}`}>
                <div className={styles.user}>
                    <div className={styles.title}></div>
                    <i className="fa-solid fa-laptop" style={{fontSize: "25px" , color: "#ffffff"}}></i>
                    {isSidebarExpanded && <h2><Link href={"/"}>SHOPTECH</Link></h2>}
                    <div className={styles.menu} onClick={toggleSidebar}>
                        <i className="fa-solid fa-bars" style={{ color: "#ffffff" }}></i>
                    </div>
                </div>
                <ul>
                    <Link href={"/"}>
                    <li>
                        <i className="fa-solid fa-house" style={{ color: "#ffffff" }}></i>
                        <p>Dashboard</p>
                    </li>
                    </Link>
                    <Link href={"/products"}>
                    <li>
                        <i className="fa-solid fa-boxes-packing" style={{ color: "#ffffff" }}></i>
                        <p>Products</p>
                    </li>
                    <ul>
                    <Link href={"/allproducts"}>
                    <li>
                    <i class="fa-solid fa-plus"style={{ color: "#ffffff" }}></i>
                        <p>All Products</p>
                    </li>
                    </Link>
                    <Link href={"/newproducts"}>
                    <li>
                    <i class="fa-solid fa-plus"style={{ color: "#ffffff" }}></i>
                        <p>Add New Products</p>
                    </li>
                    </Link>
                    </ul>
                    </Link>
                    <Link href={"/"}>
                    <li>
                        <i className="fa-solid fa-list" style={{ color: "#ffffff" }}></i>
                        <p>Orders</p>
                    </li>
                    </Link>
                    <Link href={"/settings"}>
                    <li>
                        <i className="fa-solid fa-gear" style={{ color: "#ffffff" }}></i>
                        <p>Settings</p>
                    </li>
                    </Link>
                </ul>
                <ul>
                    <li className={styles.logout}>
                        <i className="fa-solid fa-right-from-bracket" style={{ color: "#ffffff" }}></i>
                        <p>Log out</p>
                    </li>
                    <li>
                        <i className="fa-regular fa-sun" style={{ color: "#ffffff" }}></i>
                        <p>Light mode</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
