import Button from "../components/atoms/button";
import Heading from "../components/atoms/heading";
import InputField from "../components/atoms/input";
import WalletIcon from "../components/atoms/vectors/wallet-icon";
import FeaturedIcon from "../components/atoms/vectors/featured-icon";
import Tag from "../components/atoms/tag";
import NavBar from "../components/organisms/nav-bar";
import Footer from "../components/molecules/footer";
import Select from "../components/atoms/select";
import NftHeader from "../components/molecules/nft-header";

const StyleGuide = () => {
  return (
    <div className="h-screen overflow-auto space-y-10">
      <NavBar />
      <div className="flex flex-col space-y-6 mx-auto max-w-[80%]  pt-4">
        <div className="flex justify-between">
          <Button title="primary-button" />
          <Button title="outline-button" outline />
          <Button title="button with icon" outline prefix={<WalletIcon />} />
        </div>
        <div className="flex justify-between">
          <Tag tag="Tag with icon" icon={<FeaturedIcon />} />
          <Tag tag="Tag with no icon" />
        </div>
        <div>
          <Heading title="I am Head" />
        </div>
        <div className="flex justify-between">
          <InputField />
          <Select title="Select" />
        </div>
        <div className="flex flex-col justify-between">
          <NftHeader heading="Nft Collections Header" />
          <NftHeader
            heading="Nft Collections Header with Header"
            selectTitle="With Select"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StyleGuide;
