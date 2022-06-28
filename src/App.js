import './App.css';
import productsData from './data/productsData'
import { Component } from 'react';
import Navbar from "./components/Navbar";
import ProductsList from './components/ProducstsList';

class App extends Component {
  state = {    //rerenders entire application
     productsData: productsData,
     productName: '',
     productPrice: 0,
     productDescription:''
    //  shoppingCart:[],
    //  userData:{
    //    address:{

    //    } 
    //  }
  }
  //  addNewProduct(){
  //    this.setState({productsData: [...this.state.productsData, {}]}) 
  //  }
 
  handleChange = (event) => {
    //console.log(event.target.value);
    // console.log(this);
    // this.state.value = event.target.value
    // this.setState({value:event.target.value})
       this.setState({ [event.target.id] : event.target.value }  )
     // this.setState({ ["productName"] : event.target.value }  )
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newProduct = {
      name: this.state.productName,
      price: this.state.productPrice,
      description: this.state.productDescription
    }
     // set the new values in the state
    this.setState({
      productsData: [newProduct, ...this.state.productsData],
      productName: '',
      productPrice: 0,
      productDescription: ''
    })
  }
  render() {
  console.log(productsData)
  return (
    <div className="App">
    <Navbar text='Products App' />
    <Navbar text="Second Heading"/>
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="productName">Product Name</label>
      <input type="text" value={this.state.productName} onChange={this.handleChange} id="productName"/>
      <br/>
      <label htmlFor="productPrice">Product Price</label>
      <input type="text" value={this.state.productPrice} onChange={this.handleChange} id="productPrice"/>
     
      <label htmlFor="productDescription">Product Description</label>
      <input type="text" value={this.state.productDescription} onChange={this.handleChange} id="productDescription"/>
     
      <input type="submit"></input>
     </form>
    <ProductsList products={this.state.productsData}/>
    </div>
  );
  }
}



export default App;
