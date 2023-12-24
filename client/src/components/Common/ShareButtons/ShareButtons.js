import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    EmailShareButton,
    EmailIcon,
    WhatsappShareButton,
    WhatsappIcon,
  } from "react-share";
  
const ShareButtons = ({ url, position = "text-end" }) => {
  return (
    <div className={position}>
      <span className="m-1">
        <FacebookShareButton url={url}>
          <FacebookIcon style={{ width: "45px" }} />
        </FacebookShareButton>
      </span>
      <span className="m-1">
        <LinkedinShareButton url={url}>
          <LinkedinIcon style={{ width: "45px" }} />
        </LinkedinShareButton>
      </span>
      <span className="m-1">
        <EmailShareButton url={url}>
          <EmailIcon style={{ width: "45px" }} />
        </EmailShareButton>
      </span>
      <span className="m-1">
        <WhatsappShareButton url={url}>
          <WhatsappIcon style={{ width: "45px" }} />
        </WhatsappShareButton>
      </span>
    </div>
  );
};
export default ShareButtons;
