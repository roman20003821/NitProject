import React, {Component} from "react";
import {loadProduct} from "../../ajax/getProduct";


class BinItemsContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.loadProducts();
    }

    componentDidUpdate(prevProps) {
        this.loadProducts();
    }

    loadProducts() {
        for (let i = 0; i < this.props.itemsId.length; i++) {
            loadProduct(this.props.itemsId[i], "bin_item_" + this.props.itemsId[i])
        }
    }

    renderAllContainers(itemsId) {
        let indents = [];
        for (let i = 0; i < itemsId.length; i++) {
            indents.push(<div id={"bin_item_" + this.props.itemsId[i]}></div>);
        }
        return indents;
    }

    render() {
        return <div>
            {this.renderAllContainers(this.props.itemsId)}
        </div>
    }
}

export default BinItemsContainer;