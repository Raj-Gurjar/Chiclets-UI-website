import React, { useEffect, Suspense } from "react";
import "./Home.scss";
import Loader from "../../components/Loader/Loader";
import star_img from "../../assets/Backgrounds/star01.png";
// import RandomFigures from "../../components/RandomFigures/RandomFigures";

const Navbar = React.lazy(() =>
  import("../../components/Header/Navbar/Navbar")
);

const HomeTopSection = React.lazy(() => import("./HomeTopSection"));
const HomePick = React.lazy(() => import("./HomePick"));
const HomePick2 = React.lazy(() => import("./HomePick2"));
const HomeStore = React.lazy(() => import("./HomeStore"));
const HomeFollow = React.lazy(() => import("./HomeFollow"));
const Footer = React.lazy(() => import("../../components/Footer/Footer"));

const CenterText = React.lazy(() => import("./CenterText"));
const HomeFeature = React.lazy(() => import("./HomeFeature"));

export default function Home({ setbg }) {
  useEffect(() => {
    setbg("#0358d6");
  }, [setbg]);

  return (
    <div className="home-main1 pb-[30px]">
      <div className="home-main">
        <div className="header2">
          <Suspense fallback={<Loader />}>
            <Navbar />
          </Suspense>
        </div>

        <div className="star-fixed">
          <img src={star_img} alt="" />
        </div>

        <div>
          <Suspense fallback={<Loader />}>
            <HomeTopSection />
          </Suspense>
        </div>

        <div>
          {/* <Suspense fallback={<Loader />}>
            <RandomFigures />
          </Suspense> */}
        </div>

        <div>
          <Suspense fallback={<Loader />}>
            <HomePick />
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<Loader />}>
            <HomeStore />
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<Loader />}>
            <CenterText />
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<Loader />}>
            <HomeFeature />
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<Loader />}>
            <HomeFollow />
          </Suspense>
        </div>

        <div>
          <Suspense fallback={<Loader />}>
            <HomePick2 />
          </Suspense>
        </div>
      </div>

      <div className="footer-margin">
        <Suspense fallback={<Loader />}>
          <Footer pt={"150px"} />
        </Suspense>
      </div>
    </div>
  );
}
