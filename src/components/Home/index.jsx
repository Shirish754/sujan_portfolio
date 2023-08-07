import "./index.scss";
import * as Portfolio from "../../assets/images/Portfolio.svg";

export default function Home() {
  // useEffect(() => {
  //   const element = document.querySelector(".About::before");

  //   const animationListener = () => {
  //     element.style.animationPlayState = "paused";
  //   };

  //   element.addEventListener("animationend", animationListener);

  //   return () => {
  //     element.removeEventListener("animationend", animationListener);
  //   };
  // }, []);

  return (
    <div className="hometop">
      <div className="Menu">
        <div className="forIcon">
          <svg
            width="42"
            height="26"
            viewBox="0 0 42 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 13.8573C0.0268723 20.5309 5.46391 26 12.1431 26C18.8387 26 24.2858 20.5529 24.2858 13.8573V12.1431C24.2858 9.38607 26.529 7.14283 29.286 7.14283C32.0435 7.14283 34.2863 9.38607 34.2863 12.1431C34.2863 12.932 34.926 13.5717 35.715 13.5717H40.0009C40.7902 13.5717 41.4295 12.932 41.4295 12.1431C41.4295 5.44747 35.9825 0 29.2864 0C22.5908 0 17.1434 5.44747 17.1434 12.1431V13.8573C17.1434 16.6147 14.9001 18.8572 12.1435 18.8572C9.38647 18.8572 7.14323 16.6147 7.14323 13.8573C7.14323 13.0684 6.50351 12.4287 5.71459 12.4287H1.42865C0.639722 12.4291 0 13.0684 0 13.8573Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="ant-menu">
          <div className="menuContent">
            <p className="menutop">Menu</p>

            <div className="hidden-container">
              <p className="menu">Home</p>
              <p className="menu">Home</p>
            </div>

            <div className="hidden-container">
              <p className="menu">Portfolio</p>
              <p className="menu">Portfolio</p>
            </div>

            <div className="hidden-container">
              <p className="menu">Experience</p>
              <p className="menu">Experience</p>
            </div>

            <div className="hidden-container">
              <p className="menu">Know Me</p>
              <p className="menu">Know Me</p>
            </div>
          </div>
        </div>
        {/* <div className="rotating-ellipse">
          <p>PORTFOLIO</p>
          <p>PORTFOLIO</p>
        </div> */}

        {/* <div className="outer-circle">
          <div className="inner-circle"></div>
        </div>

        <div className="ellipse">
          <div className="moving-circle"></div>
        </div> */}
        <div className="yearcontainer">
          <p className="year">/2023</p>
        </div>
        <div className="decoration">
          <img
            src={Portfolio.default}
            alt="Portfolio"
            style={{
              height: "5em",
              width: "14em",
              // objectFit: "cover",
              zIndex: "1",
              border: "1px solid white",
            }}
          />
        </div>
      </div>

      <div className="About">
        <div className="mainContent">
          <div className="info">
            <p className="welcome">Welcome</p>
            <p className="bolded">IM</p>
            <p className="bolded">SUJAN</p>
            <p className="bolded">KHADKHA</p>
          </div>
          <div className="bottom">
            <div className="about">About Me</div>
            <div className="desc">
              <p>
                I &#39; M A UI / UX / BRAND / INTERACTION DESIGNER . HELPING
                BUSINESS GROW AND DEVELOP USER FRIENDLY WEBSITES & APPS.
              </p>
              <p>BEHANCE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
