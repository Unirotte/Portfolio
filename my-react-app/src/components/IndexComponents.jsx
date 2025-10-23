import {lazy} from "react";

const Projet = lazy(() => import("./Projet.jsx"));
const Skills = lazy(() => import("./Skills.jsx"));
const Contact = lazy(() => import("./Contact.jsx"));
const FunnyPhrase = lazy(() => import("./FunnyPhrase.jsx"));
const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const IceBergPage = lazy(() => import("../pages/IceBergPage.jsx"));
const GalleryPage = lazy(() => import("../pages/GalleryPage.jsx"));
const PageDigital = lazy(() => import("../pages/PageDigital.jsx"));
const AllDigitalDraw = lazy(() => import("./AllDigitalDraw.jsx"));

import useFadeInOnScroll from "./HookScrool.jsx";
import Me from "./Me.jsx";
import LinkToiles from "./LinkToiles.jsx";
import GallerySection from "./GallerySection.jsx";
import TriggerWarningModal from "./TriggerWarning.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import ScrollToAnchor from "./SrollToAnchor.jsx";

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
