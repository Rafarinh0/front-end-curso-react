import React, { Component } from "react";
import api from "../../services/api";

export default class Main extends Component{
    state = {
        products: [],
    }
    //Sempre que tivermos uma variável num state, o método
    //render vai ouvir qualquer alteração de qualquer variável
    //e vai renderizar essas alterações em tela

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        this.setState({ products: response.data.docs })};
// quando a função é criada por mim e não pelo react,
// eu preciso usar arrow function!
    render(){
        return(
            <div className="product-list">
                {this.state.products.map(product =>(
                    <h2 key={product._id}>{product.title}</h2>
                ))}
            </div>
        )
    }
}