import React, { Component } from "react";
import api from "../../services/api";
import './styles.css';

export default class Main extends Component {
    state = {
        products: [], 
        productInfo: {},
        page: 1,
    }
    //Sempre que tivermos uma variável num state, o método
    //render vai ouvir qualquer alteração de qualquer variável
    //e vai renderizar essas alterações em tela

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const {docs, ...productInfo} = response.data;

        this.setState({ products: docs, productInfo, page})
    };
    // quando a função é criada por mim e não pelo react,
    // eu preciso usar arrow function!

    prevPage = () =>{
        const {page, productInfo} = this.state;

        if(page===productInfo.page){
            return;
        }
        else{
            const pageNumber = page-1;
            this.loadProducts(pageNumber);
        }
    }

    nextPage = () =>{
        const {page, productInfo} = this.state;

        if(page===productInfo.pages){
            return;
        }
        else{
            const pageNumber = page+1;
            this.loadProducts(pageNumber);
        }
    }

    render() {
        const {products, page, productInfo} = this.state;

        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <a href="">Acessar</a>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page===1}onClick={this.prevPage}>Anterior</button>
                    <button disabled={page===productInfo.pages}onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }
}