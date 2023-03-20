import Header from "./component/Header/Header";
import Intro from "./component/Intro/Intro";
import Article from "./component/Articles/Articles";
import Gallery from "./component/Gallery/Gallery";
import Features from "./component/Features/Features";
import Testimonials from "./component/Testimonials/Testimonials";
import Team from "./component/Team/Team";
import Services from "./component/Services/Services";
import Skills from "./component/Skills/Skills";
import Works from "./component/Works/Works";
import Events from "./component/Events/Events";
import Pricing from "./component/Pricing/Pricing";
import Videos from "./component/Videos/Videos";
import State from "./component/State/State";
import Discount from "./component/Discount/Discount";
import Footer from "./component/Footer/Footer";
import "./assets/styles/globles.scss";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Article />
      <Gallery />
      <Features />
      <Testimonials />
      <Team />
      <Services />
      <Skills />
      <Works />
      <Events />
      <Pricing />
      <Videos />
      <State />
      <Discount />
      <Footer />
    </>
  );
}

export default App;
