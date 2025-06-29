import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/hero_banner.jpg'; 

const Home = () => {
  return (
    <div className="home-page">
      <div
        className="hero-banner"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="hero-overlay">
          <h1 className="bakery-title">Sugar & Crumbs</h1>
          <p className="tagline">Est. 1998 — Baking with heart, one crumb at a time</p>
        </div>
      </div>

      <div className="about-section">
        <h2>Our Story</h2>
        <p>
          Welcome to Sugar & Crumbs — a little dream that rose in a warm kitchen in 1998.
          What started as a single cupcake stand has grown into a full-fledged bakery nestled in the heart of town.
          Our passion for homemade recipes, fresh ingredients, and grandma-level love in every bite is what keeps our ovens hot and our hearts full.
        </p>
        <p>
          From our signature Vanilla Dream to the mysterious Muffin of the Month, every dessert tells a story —
          and we'd love for you to be a part of it. Come for the sweets, stay for the smiles.
        </p>
        <a href="/menu" className="menu-button">See Menu</a>
      </div>
    </div>
  );
};

export default Home;
