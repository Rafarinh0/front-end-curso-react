import React, { Component } from "react";
import api from "../../services/api";

export default class Main extends Component{
    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        console.log(response.data.docs);
    };
// quando a função é criada por mim e não pelo react,
// eu preciso usar arrow function!
    render(){
        return <h1>Hello World</h1>;
    }
}