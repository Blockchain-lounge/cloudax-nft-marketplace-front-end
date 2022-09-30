import MarketPlaceIcon from "../../atoms/vectors/marketplace-icon";
import InsightsIcon from "../../atoms/vectors/insights-icon";
import LaunchPadIcon from "../../atoms/vectors/launch-pad-icon";
import GamesIcon from "../../atoms/vectors/games-icon";
import CreatorsIcon from "../../atoms/vectors/creator-icon";
import ProfileIcon from "../../atoms/vectors/profile-icon";
import SupportIcon from "../../atoms/vectors/support-icon";
import CreateNftIcon from "../../atoms/vectors/create-nft-icon";
import AsideDropDown from "../../atoms/aside-dropdown";
import IOSIcon from "../../atoms/vectors/ios-icon";
import DiscordIcon from "../../atoms/vectors/discord-icon";
import TikTokIcon from "../../atoms/vectors/tiktok-icon";
import YoutubeIcon from "../../atoms/vectors/youtube-icon";
import TwitterIcon from "../../atoms/vectors/twitter-icon";
import InstagramIcon from "../../atoms/vectors/instagram-icon";
import "./aside-style.scss";

const DashboardAside = () => {
  const asideLinks = [
    {
      label: "MarketPlace",
      icon: <MarketPlaceIcon />,
      subLinks: [
        { label: "Popular collections" },
        { label: "Drop calendar" },
        { label: "Auctions" },
      ],
    },
    {
      label: "Insights",
      icon: <InsightsIcon />,
      subLinks: [
        { label: "Popular collections" },
        { label: "Drop calendar" },
        { label: "Auctions" },
      ],
    },
    {
      label: "LaunchPad",
      icon: <LaunchPadIcon />,
      subLinks: [
        { label: "Popular collections" },
        { label: "Drop calendar" },
        { label: "Auctions" },
      ],
    },
    {
      label: "Cloudax Games",
      icon: <GamesIcon />,
      subLinks: [
        { label: "Popular collections" },
        { label: "Drop calendar" },
        { label: "Auctions" },
      ],
    },
    {
      label: "Creators",
      icon: <CreatorsIcon />,
      subLinks: [
        { label: "Popular collections" },
        { label: "Drop calendar" },
        { label: "Auctions" },
      ],
    },
    {
      label: "Profile",
      icon: <ProfileIcon />,
      subLinks: [
        { label: "Popular collections" },
        { label: "Drop calendar" },
        { label: "Auctions" },
      ],
      // link: "",
    },
    {
      label: "Create Nfts",
      icon: <CreateNftIcon />,
      link: "",
    },
    {
      label: "Support",
      icon: <SupportIcon />,
      link: "",
    },
  ];

  const socialLinks = [
    { icon: <IOSIcon />, label: "iOS App" },
    { icon: <DiscordIcon />, label: "Discord" },
    { icon: <TikTokIcon />, label: "TikTok" },
    { icon: <YoutubeIcon />, label: "Youtube" },
    { icon: <TwitterIcon />, label: "Twitter" },
    { icon: <InstagramIcon />, label: "Instagram" },
  ];

  return (
    <div className="aside-container">
      <div>
        {asideLinks.map((value) => (
          <AsideDropDown
            key={value.label}
            icon={value.icon}
            label={value.label}
            subLinks={value.subLinks}
            link={value.link}
          />
        ))}
      </div>
      <div className="social-links">
        {socialLinks.map(({ icon, label }) => (
          <span key={label} className="social-link">
            {icon} {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DashboardAside;
