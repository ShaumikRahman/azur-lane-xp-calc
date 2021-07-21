import AL from "../img/AL.png"
import ReactImg from "../img/React.png"
import SassImg from "../img/Sass.png";

const Footer = () => {
  return (
    <div className="App__Footer">
      <img className="AL" src={AL} alt="Azur Lane" />
      <p>
        This site does not store any personal information, data was used from <a href="https://azurlane.koumakan.jp/Azur_Lane_Wiki">Koumakan</a>. 
        Innacuracies may occur, please email me with any issues/bugs <a href="mailto:shaumikrahman123@gmail.com">here</a>. 
        All rights reserved
        by Manjuu and Yongshi.
      </p>
      <p className="lastText">
          Built with<img src={ReactImg} alt="react" className="react"/>and styled with <img src={SassImg} alt="sass" className="sass" />. Check my github <a href="https://github.com/ShaumikRahman">here</a>.
      </p>
    </div>
  );
};

export default Footer;
