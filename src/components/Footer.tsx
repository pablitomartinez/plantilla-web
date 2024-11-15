//iconos de SVG
import Instagram from "../../public/svg/ig";
import Facebook from "../../public/svg/facebook";
import Linkedin from "../../public/svg/linkedin";
import TikTok from "../../public/svg/tiktok";



const Footer = () => (
  <footer>
    <div className="bg-blue-800 py-10 flex flex-col justify-center items-center space-y-4">
      <p>&copy; 2024 Mi Proyecto. Todos los derechos reservados.</p>
      <div className="flex space-x-4">
        <a
          href="https://www.facebook.com"
          target="_blank"
          className="social-icon"
        >
          <Facebook />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          className="social-icon"
        >
          <Instagram />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          className="social-icon"
        >
          <Linkedin />
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          className="social-icon"
        >
          <TikTok />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
