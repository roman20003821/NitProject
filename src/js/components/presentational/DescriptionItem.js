import React, {Component} from "react";
import ReactDOM from "react-dom";

class DescriptionItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            btn_disabled: this.isExist(this.props.product.id),
        }
    }

    renderPrice(price, salePrice) {
        if (salePrice === null) {
            return <p><span className="real_price">{price}</span></p>
        } else {
            return <p><span className="wrong_price">{price}</span><br/><span className="new_price">{salePrice}</span>
            </p>
        }
    }

    remove(id) {
        var array = localStorage.getItem("BIN_ARRAY") === "" ? [] : JSON.parse(localStorage.getItem("BIN_ARRAY"));
        for (let i = 0; i < array.length; i++) {
            if (array[i] === id) {
                this.swap(array, i, array.length - 1);
                array.pop();
            }
        }
        localStorage.setItem("BIN_ARRAY", JSON.stringify(array));
    }

    swap(array, firstPos, secondPos) {
        let temp = array[firstPos];
        array[firstPos] = array[secondPos];
        array[secondPos] = temp;
    }

    add(id) {
        let array = this.getJSON();
        array[array.length] = id;
        localStorage.setItem("BIN_ARRAY", JSON.stringify(array));
        return array;
    }

    isExist(id) {
        let array = this.getJSON();
        for (let i = 0; i < array.length; i++) {
            if (array[i] === id) {
                return true;
            }
        }
        return false;
    }

    getJSON() {
        if (localStorage.getItem("BIN_ARRAY") === "") return [];
        return JSON.parse(localStorage.getItem("BIN_ARRAY"));
    }


    renderButton() {
        if (this.state.btn_disabled) return <p><a onClick={() => this.removeFromeBinClick()}
                                                  className="btn btn-danger"
                                                  role="button">Remove From Bin</a></p>;
        else
            return <p><a onClick={() => this.addToBinClick()} className="btn btn-primary"
                         role="button">Add to the bin</a></p>
    }

    addToBinClick() {
        if (this.state.btn_disabled) return;
        this.add(this.props.product.id);
        this.setState({
            btn_disabled: true,
        });
    }

    removeFromeBinClick() {
        if (!this.state.btn_disabled) return;
        this.remove(this.props.product.id)
        this.setState({
            btn_disabled: false,
        });
    }

    render() {
        return <div className="row justify-content-center description_item">
            <div className="col-12 col-sm-12 col-lg-3">
                <img src={this.props.product.image_url}/>
            </div>
            <div className="col-12 col-sm-12 col-lg-5">
                <div className="caption">
                    <h3>{this.props.product.name}</h3>
                    <p>{this.props.product.description}</p>
                    {this.renderPrice(this.props.product.price, this.props.product.special_price)}
                    {this.renderButton()}
                </div>
            </div>
        </div>
    }
}

export default DescriptionItem;