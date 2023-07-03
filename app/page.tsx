import {
  About,
  Stats,
  Benefits,
  Footer,
  Form,
  Header,
  Hero,
  Packages,
  Where,
} from "../components";

export default function Page() {
  return (
    <>
      <Header id="header" />

      <Hero id="hero" />


      <About id="about" />

      <Where id="where" />

      <Benefits id="benefits" />

      <Packages id="packages" />

      <Form id="contact" />

      <Footer id="footer" />
    </>
  );
}
