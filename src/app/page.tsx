import {
  Work,
  Team,
  Hero,
  Testimo,
  Contact,
  Footer,
  About,
} from "@/app/exports";

const Home = () => (
  <>
    <Hero />
    <div className="my-width pb-3">
      <About />
      <hr />
      <Team />
      <hr />
      <Work />
      <hr />
      <Testimo />
      <hr />
      <Contact />
    </div>
    <Footer />
  </>
);

export default Home;
