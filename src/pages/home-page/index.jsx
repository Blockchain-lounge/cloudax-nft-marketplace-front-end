import React from "react";
import DashboardLayout from "../../templates/dashboard-layout";
import Footer from "../../components/organisms/footer";

import "./home-page-style.scss";
import Button from "../../components/atoms/button";
import Heading from "../../components/atoms/heading";
import Tag from "../../components/atoms/tag";
import FeaturedIcon from "../../components/atoms/vectors/featured-icon";
import { content, heroCards } from "../../store/data";
import HeroCard from "../../components/molecules/hero-card";
import HeroIndicator from "../../components/atoms/hero-indicator";

const HomePage = () => {
  return (
    <DashboardLayout>
      <div className="home-wrapper">
        <div className="center space-y-[9.375rem] mb-[9.375rem]">
          <section className="hero">
            <div>
              <Tag tag="Featured Launch" icon={<FeaturedIcon />} />
              <Heading title="Ducks Vegas" twClasses="mt-4" />
              <p>{content}</p>
              <Button title="Explore Collection" />
            </div>
            <div className="hero-img">
              <img src="/images/hero-dashboard.jpg" alt="hero-img" />
              <div className="hero-cards">
                {heroCards.map((data) => (
                  <HeroCard key={data.title} {...data} />
                ))}
              </div>
              <HeroIndicator />
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </DashboardLayout>
  );
};

export default HomePage;
