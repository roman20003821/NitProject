import React, {Component} from "react";
import Input from "./Input";
import ReactDOM from "react-dom";
import BinItemsContainer from "../container/BinItemsContainer";
import {start} from "../../bin";

class BinItem extends React.Component {

    removeFromBin(id) {
        var array = localStorage.getItem("BIN_ARRAY") === "" ? [] : JSON.parse(localStorage.getItem("BIN_ARRAY"));
        for (let i = 0; i < array.length; i++) {
            if (array[i] === id) {
                this.swap(array, i, array.length - 1);
                array.pop();
            }
        }
        localStorage.setItem("BIN_ARRAY", JSON.stringify(array));
        start();
    }

    swap(array, firstPos, secondPos) {
        let temp = array[firstPos];
        array[firstPos] = array[secondPos];
        array[secondPos] = temp;
    }

    renderPrice(price, salePrice) {
        if (salePrice === null) {
            return <p><span className="real_price">{price}</span></p>
        } else {
            return <p><span className="wrong_price">{price}</span><br/><span className="new_price">{salePrice}</span>
            </p>
        }
    }

    openDescription(id) {
        localStorage.setItem("productId", id);
    }

    render() {
        return <div className="row justify-content-around bin_item">
            <div className="col-12 col-sm-12 col-lg-4">
                <img src={this.props.product.image_url}/>
            </div>
            <div className="col-12 col-sm-12 col-lg-8">
                <div className="caption">
                    <h3>{this.props.product.name}</h3>
                    {this.renderPrice(this.props.product.price, this.props.product.special_price)}
                    <Input id={this.props.product.id}/>
                    <div className="buttons_container">
                        <span><button onClick={() => this.removeFromBin(this.props.product.id)} type="button"
                                      className="btn btn-primary">Remove from bin</button></span>
                        <span><a href="itemDeatails.html" onClick={() => this.openDescription(this.props.product.id)}
                                 type="button"
                                 className="btn btn btn-info">Open</a></span>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default BinItem;