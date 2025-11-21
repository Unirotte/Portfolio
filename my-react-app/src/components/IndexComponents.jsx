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
const ScrollUp = lazy(() => import("./arrow-up.jsx"));
const SkillsDynamic = lazy(() => import("../components/SkillsDynamic.jsx"));
const SkillsDynamicPage = lazy(() => import("../pages/SkillsDynamicPage.jsx"));

import Me from "./Me.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import useFadeInOnScroll from "../hooks/HookScrool.jsx";
import TriggerWarningModal from "./TriggerWarning.jsx";
import ScrollToAnchor from "../hooks/SrollToAnchor.jsx";
import SmartImage from "./SmartImage.jsx";

export { 
  SkillsDynamic,
  SkillsDynamicPage,
  ScrollUp,
  SmartImage,
  Me,
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
