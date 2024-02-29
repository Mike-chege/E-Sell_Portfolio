import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="footer-container">
      <p>2024 E-SELL_Portfolio All rights reserverd</p>
      <p className="icons">
        <AiFillGithub />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
