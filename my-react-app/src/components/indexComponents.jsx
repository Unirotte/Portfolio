import {lazy} from "react";

const Projet = lazy(() => import("../components/Projet.jsx"));
const Skills = lazy(() => import("../components/Skills.jsx"));
const Contact = lazy(() => import("../components/Contact.jsx"));
const FunnyPhrase = lazy(() => import("../components/funnyPhrase.jsx"));
const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const IceBergPage = lazy(() => import("../pages/IceBergPage.jsx"));
const GalleryPage = lazy(() => import("../pages/GalleryPage.jsx"));
const PageDigital = lazy(() => import("../pages/PageDigital.jsx"));
const AllDigitalDraw = lazy(() => import("../components/AllDigitalDraw.jsx"));

import useFadeInOnScroll from "../components/HookScrool.jsx";
import Me from "../components/Me.jsx";
import LinkToiles from "../components/LinkToiles.jsx";
import GallerySection from "../components/GallerySection.jsx";
import TriggerWarningModal from "../components/TriggerWarning.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import ScrollToAnchor from "../components/SrollToAnchor";

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
