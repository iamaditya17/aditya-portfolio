import { BrowserRouter } from "react-router-dom";

import { About, Contact, Education, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Education/>
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
