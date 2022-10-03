import { HideUntilLoaded } from "react-animation";

import "./home-page-style.scss";

import NftHeaderCard from "../../components/molecules/nft-header";
import NftMiniCard from "../../components/molecules/nft-mini-card";
import HeroIndicator from "../../components/atoms/hero-indicator";
import HeroCard from "../../components/molecules/hero-card";

import DashboardLayout from "../../templates/dashboard-layout";
import Footer from "../../components/organisms/footer";
import Button from "../../components/atoms/button";
import Heading from "../../components/atoms/heading";
import Tag from "../../components/atoms/tag";
import FeaturedIcon from "../../components/atoms/vectors/featured-icon";

import Sliders from "../../components/molecules/nft-slider";
import {
  content,
  heroCards,
  nftDatas,
  nft2Datas,
  nft3Datas,
  nft4Datas,
} from "../../store/data";
import Loader from "../../components/atoms/loader";

const HomePage = () => {
  return (
    <HideUntilLoaded
      animationIn="bounce"
      imageToLoad="/images/hero-dashboard.jpg"
      Spinner={() => <Loader />}
    >
      <DashboardLayout>
        <div className="home-wrapper">
          <div className="space-y-[9rem] center mb-[10.125rem]">
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
            <section className="hero-section-1">
              <NftHeaderCard
                heading="Popular Collections"
                selectTitle="Last 24 hours"
              />
              <div className="hero-section-1-collection">
                {nftDatas.map(({ imgUrl, title }, i) => (
                  <NftMiniCard
                    key={`title-${i + 1}`}
                    index={i + 1}
                    title={title}
                    imgUrl={imgUrl}
                  />
                ))}
              </div>
            </section>

            <section>
              <NftHeaderCard heading="LaunchPad Drops" selectTitle="On Sale" />
              <Sliders data={nft2Datas} />
            </section>
            <section>
              <NftHeaderCard
                heading="In-Demand Collections"
                selectTitle="All"
              />
              <Sliders data={nft3Datas} />
            </section>
            <section>
              <NftHeaderCard heading="Explore Art" />
              <Sliders data={nft4Datas} />
            </section>
          </div>
          <Footer />
        </div>
      </DashboardLayout>
    </HideUntilLoaded>
  );
};

export default HomePage;
