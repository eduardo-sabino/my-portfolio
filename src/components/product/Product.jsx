import "./product.css";

const Product = ({ img,desc, title, tech }) => {
  const rowLength = tech.length - 1
  const rowHandler = (item, i) => {
    if(i !== rowLength) return ` ${item} — `
    return `${item} `
  }
  return (
    <div className="wrapper">
      <div className="text-wrapper">
        <h3>{title}</h3>
        <p className="wrapper-desc" >
          {desc}
          <p className="tech">
          [
            {
              tech.map((item, i) => rowHandler(item, i))
            }
          ]</p>  
        </p>
        
      </div>
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
          <img src={img} alt="" className="p-img" />
      </div>
    </div>
  );
};

export default Product;