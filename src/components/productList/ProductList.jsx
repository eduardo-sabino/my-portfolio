import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h2 className="pl-title">Projetos recentes</h2>
        <p className="pl-desc">
          {/* Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside. */}
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} desc={item.desc} title={item.title} tech={item.tech} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;