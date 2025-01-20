import Button from "../components/general/Button";
import Article from "../components/general/Article";

import { Slider,Card } from "../components/general/Slider";

function Home(){
  return(
    <>
      <section>
        Header
        <Button texto="Hola mundo"></Button>
        <Article>
          <h2>Titulo</h2>
          <p>parrafo</p>
        </Article>
      </section>
      <section>
        Products
      </section>
      <section>
        More Info
      </section>
    </>
  );
}

export default Home;