import {
  Bot,
  MessageCircle,
  Send,
  Youtube,
  Facebook,
  Instagram,
  TreePine,
  Heart,
  Star,
  Sun,
  Flower,
  Smile,
  Rainbow,
  Sparkles,
  Contact2,
} from "lucide-react";
import "./styles/main.scss";
import { logo } from "./utils/img";

export default function App() {
  const socialLinks = [
    {
      name: "Murojaat",
      description: "Kamchiliklar va takliflar",
      icon: Bot,
      href: "https://t.me/smart_kids_kinder_gardenbot",
      colorClass: "social-link-murojaat",
    },
    {
      name: "Telegram",
      description: "Yangiliklar va e'lonlar",
      icon: Send,
      href: "https://t.me/smartt_kidsss",
      colorClass: "social-link-telegram",
    },
    {
      name: "YouTube",
      description: "Videolar va o'quv darsliklari",
      icon: Youtube,
      href: "https://youtube.com/@smart_kids_kindergarden?si=B-wmPI_HRB2c4pIO",
      colorClass: "social-link-youtube",
    },
    {
      name: "Facebook",
      description: "Jamiyat bilan aloqa",
      icon: Facebook,
      href: "https://www.facebook.com/share/1Az5sTdwht/",
      colorClass: "social-link-facebook",
    },
    {
      name: "Instagram",
      description: "Rasmlar va voqealar",
      icon: Instagram,
      href: "https://www.instagram.com/smart_kidskindergarden",
      colorClass: "social-link-instagram",
    },
    {
      name: "Aloqa",
      description: "Biz bilan bog'lanish",
      icon: Contact2,
      href: "tel: +998996692079",
      colorClass: "social-link-aloqa",
    },
  ];

  return (
    <div className="main-container">
      <div className="container">
        <div className="decorative-container">
          {/* <div className="sun-decor">
            <Sun className="icon" />
          </div> */}
          {/* <div className="heart-decor-1">
            <Heart className="icon" />
          </div>
          <div className="heart-decor-2">
            <Heart className="icon" />
          </div> */}
          <div className="star-decor-1">
            <Star className="icon" />
          </div>
          <div className="star-decor-2">
            <Star className="icon" />
          </div>
          <div className="tree-decor-1">
            <TreePine className="icon" />
          </div>
          <div className="tree-decor-2">
            <TreePine className="icon" />
          </div>
          <div className="flower-decor-1">
            <Flower className="icon" />
          </div>
          <div className="flower-decor-2">
            <Flower className="icon" />
          </div>
          <div className="sparkles-decor-1">
            <Sparkles className="icon" />
          </div>
          <div className="sparkles-decor-2">
            <Sparkles className="icon" />
          </div>
          <div className="circle-decor-1"></div>
          <div className="circle-decor-2"></div>
          <div className="circle-decor-3"></div>
          <div className="circle-decor-4"></div>
          <div className="rainbow-decor">
            <Rainbow className="icon" />
          </div>
        </div>

        <div className="content-wrapper">
          <div className="header-container">
            <div className="logo-container">
              <img
                src={logo}
                alt="Kindergarten Logo"
                width={256}
                height={256}
                className="logo"
              />
            </div>
            <div className="header-title-container">
              <div>
                <h1 className="header-title">Bolalar Bog‘chasi</h1>
                <div className="header-subtitle">
                  <Smile className="icon-yellow" />
                  <span className="header-subtitle-text">
                    Baxtli bolalar - kuchli kelajak
                  </span>
                  <Smile className="icon-yellow" />
                </div>
              </div>
            </div>
            <div className="description-box">
              <p className="description-text">
                <Sparkles className="inline-icon icon-yellow" />
                Farzandlaringiz uchun xavfsiz va quvnoq ta'lim muhiti. Bizning
                barcha resurslar va yangiliklar bilan tanishing!
                <Sparkles className="inline-icon icon-yellow" />
              </p>
            </div>
          </div>

          <div className="social-links-container">
            <div className="social-links-grid">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    className={`social-link ${link.colorClass}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="social-link-content">
                      <div className="social-link-icon-container">
                        <IconComponent className="social-link-icon" />
                      </div>
                      <div>
                        <h3 className="social-link-title">{link.name}</h3>
                        <p className="social-link-description">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-container">
            <div className="footer-box">
              <div className="footer-icons">
                <Heart className="footer-icon-heart-large" />
                <Heart className="footer-icon-heart-small" />
                <Sparkles className="footer-icon-sparkles" />
                <Heart className="footer-icon-heart-small" />
                <Heart className="footer-icon-heart-large" />
              </div>
              <p className="footer-text">
                Bolalaringizning rivojlanishi bizning eng muhim vazifamiz!
              </p>
              <p className="footer-subtext">
                Har bir bola bizning kichik yulduzimiz ⭐
              </p>
            </div>
          </div>

          <div className="decorative-dots">
            <div className="dot dot-red" style={{ animationDelay: "0s" }}></div>
            <div
              className="dot dot-yellow"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="dot dot-green"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div
              className="dot dot-blue"
              style={{ animationDelay: "0.6s" }}
            ></div>
            <div
              className="dot dot-purple"
              style={{ animationDelay: "0.8s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
