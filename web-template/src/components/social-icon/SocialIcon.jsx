import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import {
  BaseSocialIcon,
  FacebookSocialIcon,
  TwitterSocialIcon,
  YoutubeSocialIcon,
  InstagramSocialIcon,
} from "./social.style";

export const SOCIAL_TYPE_CLASSES = {
  base: "base",
  facebook: "facebook",
  twitter: "twitter",
  youtube: "youtube",
  instagram: "instagram",
};

const socialLinks = {
  youtube: "https://www.youtube.com/",
  twitter: "https://twitter.com/?lang=en",
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
};

const getSocialIcon = (iconType = SOCIAL_TYPE_CLASSES.base) =>
  ({
    [SOCIAL_TYPE_CLASSES.base]: BaseSocialIcon,
    [SOCIAL_TYPE_CLASSES.facebook]: FacebookSocialIcon,
    [SOCIAL_TYPE_CLASSES.twitter]: TwitterSocialIcon,
    [SOCIAL_TYPE_CLASSES.youtube]: YoutubeSocialIcon,
    [SOCIAL_TYPE_CLASSES.instagram]: InstagramSocialIcon,
  }[iconType]);

const SocialIcon = ({ iconType, ...otherProps }) => {
  const CustomIcon = getSocialIcon(iconType);

  const handleClick = () => {
    const newWindow = window.open(
      socialLinks[iconType],
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <CustomIcon {...otherProps} onClick={handleClick}>
      <>
        {iconType === "facebook" && <FacebookOutlinedIcon />}
        {iconType === "twitter" && <TwitterIcon />}
        {iconType === "youtube" && <YouTubeIcon />}
        {iconType === "instagram" && <InstagramIcon />}
      </>
    </CustomIcon>
  );
};

export default SocialIcon;
