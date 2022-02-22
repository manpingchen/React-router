import classes from "./Products.module.css"

const Products = () => {
  return (
    <section>
      <h1>Products</h1>
      <ul className={classes.grid}>
        <li><Link to="/product-detail/1">Product1</Link></li>
        <li><Link to="/product-detail/2">Product1</Link></li>
        <li><Link to="/product-detail/3">Product1</Link></li>
        <li><Link to="/product-detail/4">Product1</Link></li>
        <li><Link to="/product-detail/5">Product1</Link></li>
      </ul>
    </section>
  );
};

export default Products;
