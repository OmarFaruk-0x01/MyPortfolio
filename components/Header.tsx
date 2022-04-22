import Link from "next/link";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useRef, useState } from "react";

const Header = () => {
  const router = useRouter();
  const [width, setWidth] = useState<number>(0);
  const [isOpen, setIsNavOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!width) {
      setWidth(window.innerWidth);
    }
    const handler = window.addEventListener("resize", (ev) => {
      const w = ev.target as Window;
      setWidth(w.innerWidth);
    });
    return () => window.removeEventListener("resize", () => {});
  }, []);

  return (
    <header>
      <div className="logo">
        <div className="logo-div">O</div>
        <div className="logo-txt">
          <span>Omar</span>Faruk
        </div>
      </div>
      <div
        onClick={() => {
          if (width < 950) {
            setIsNavOpen(!isOpen);
          }
        }}
        className={isOpen ? "navBtn open" : "navBtn"}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul className="menu-list">
          <li>
            <Link href={"/"}>
              <a
                className={`menu-list__item ${
                  router.asPath == "/" ? "active" : ""
                }`}
              >
                About Me
                {/* <i className="fas fa-chevron-down"></i> */}
              </a>
            </Link>
            {/* <ul className="menu-list-sub">
              <li>
                <Link href={'/about'}>
                <a href="#" className="menu-list-sub__item">
                  About-One
                </a>
                </Link>
              </li>
              <li>
                <a href="#" className="menu-list-sub__item">
                  About-One
                </a>
              </li>
            </ul> */}
          </li>
          <li>
            <Link href={"/resume"}>
              <a
                className={`menu-list__item ${
                  router.asPath == "/resume" ? "active" : ""
                }`}
              >
                Resume
              </a>
            </Link>
          </li>
          <li>
            <Link href={"/works"}>
              <a
                className={`menu-list__item ${
                  router.asPath == "/works" ? "active" : ""
                }`}
              >
                Works
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href={"/blogs"}>
              <a
                className={`menu-list__item ${
                  router.asPath == "/blogs" ? "active" : ""
                }`}
              >
                Blogs
              </a>
            </Link>
          </li> */}
          <li>
            <Link href={"/contact"}>
              <a
                className={`menu-list__item ${
                  router.asPath == "/contact" ? "active" : ""
                }`}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
