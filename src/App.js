import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import { useRef, useState } from "react";
import Alert from "./components/alert/Alert";
const App = () => {
  const contactRef = useRef(null)
  /* TODO: change useState name */
  const [hasContactButtonBeenClick, setHasContactButtonBeenClick] = useState(false)
  
  return (
    <div>
      {hasContactButtonBeenClick && <Alert 
          hasContactButtonBeenClick={ hasContactButtonBeenClick }
          onContactButtonClick={ setHasContactButtonBeenClick } 
        />
      }  
      <Intro contactRef={contactRef} />
      <About />
      <ProductList />
      <Contact contactRef={contactRef}
        hasContactButtonBeenClick={ hasContactButtonBeenClick }
        onContactButtonClick={ setHasContactButtonBeenClick }
      />
    </div>
  );
}

export default App;
