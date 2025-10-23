import {lazy} from "react";

const Projet = lazy(() => import("./projet.jsx"));
const Skills = lazy(() => import("./skills.jsx"));
const Contact = lazy(() => import("./contact.jsx"));
const FunnyPhrase = lazy(() => import("./funny-phrase.jsx"));
const HomePage = lazy(() => import("../pages/home-page.jsx"));
const IceBergPage = lazy(() => import("../pages/ice-berg-page.jsx"));
const GalleryPage = lazy(() => import("../pages/gallery-page.jsx"));
const PageDigital = lazy(() => import("../pages/page-digital.jsx"));
const AllDigitalDraw = lazy(() => import("./all-digital-draw.jsx"));

import useFadeInOnScroll from "./hook-scrool.jsx";
import Me from "./me.jsx";
import LinkToiles from "./link-toiles.jsx";
import GallerySection from "./gallery-section.jsx";
import TriggerWarningModal from "./trigger-warning.jsx";
import Footer from "./footer.jsx";
import Header from "./header.jsx";
import ScrollToAnchor from "./sroll-to-anchor.jsx";

export { Me,
  Projet,
  Skills,
  Contact,
  useFadeInOnScroll,
  FunnyPhrase,
  LinkToiles,
  GallerySection,
  TriggerWarningModal,
  Footer,
  Header,
  ScrollToAnchor,
GalleryPage,
IceBergPage,
PageDigital,
HomePage,
AllDigitalDraw,
};
