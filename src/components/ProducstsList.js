import ProductItem from './ProductItem'

const ProductsList = (props) => {
  //  console.log('FROM PRODUCTSLIST COMPONENT', props.products);
    // const { products } = props
    return (
      <div>
        <h2>Products</h2>
        {/* Here we map over the array */}
        {/* {props.products.map((product) => (
            <div>
              <h3>{product.name}</h3>
              <h2>$ {product.price}</h2>
              <p>{product.description}</p>
            </div>
        ))} */}
     {props.products.map((item,idx) => <ProductItem product={item} key={idx} /> )}

      </div>
    );
};

export default ProductsList