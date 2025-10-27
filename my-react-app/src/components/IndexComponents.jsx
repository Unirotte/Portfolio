import {lazy} from "react";

const Projet = lazy(() => import("./Projet.jsx"));
const Skills = lazy(() => import("./Skills.jsx"));
const Contact = lazy(() => import("./Contact.jsx"));
const FunnyPhrase = lazy(() => import("./FunnyPhrase.jsx"));
const HomePage = lazy(() => import("../pages/HomePage.jsx"));
const IceBergPage = lazy(() => import("../pages/IceBergPage.jsx"));
const PageExpo = lazy(() => import("../pages/PageExpo.jsx"));
const PageGallery = lazy(() => import("../pages/PageGallery.jsx"));
const AllDraw = lazy(() => import("./AllDraw.jsx"));
const MiniGallery = lazy(() => import( "./MiniGallery.jsx"));
const LinkToiles = lazy(() => import("./LinkToiles.jsx"));

import useFadeInOnScroll from "../hooks/HookScrool.jsx";
import Me from "./Me.jsx";
import TriggerWarningModal from "./TriggerWarning.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import ScrollToAnchor from "../hooks/SrollToAnchor.jsx";

export { Me,
  Projet,
  Skills,
  Contact,
  useFadeInOnScroll,
  FunnyPhrase,
  LinkToiles,
  MiniGallery,
  TriggerWarningModal,
  Footer,
  Header,
  ScrollToAnchor,
PageExpo,
IceBergPage,
PageGallery,
HomePage,
AllDraw,
};
