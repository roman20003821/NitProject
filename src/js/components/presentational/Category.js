import React, {Component} from "react";
import {loadProducts} from "../../ajax/getCategoryProducts";

class Category extends React.Component {

    render() {
        return <li className="nav-item">
            <a onClick={() => loadProducts(this.props.id)} className="nav-link" href="#">{this.props.name}</a>
        </li>
    };

}

export default Category;