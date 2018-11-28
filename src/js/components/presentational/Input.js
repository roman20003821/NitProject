import React, {Component} from "react";
import {loadProducts} from "../../ajax/getCategoryProducts";

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 1};
    }

    changeCount(differense) {
        if (this.state.count + differense <= 0) return;
        this.setState({count: this.state.count + differense});
    }

    render() {
        return <div className="input-group">
            <button onClick={() => this.changeCount(-1)} type="button" className="btn btn-default">
                <span className="glyphicon glyphicon-minus"
                      aria-hidden="true">-</span>
            </button>
            <div id={"count_form_container_" + this.props.id}>
                <input readOnly className="form-control" value={this.state.count}/>
            </div>
            <button onClick={() => this.changeCount(1)} type="button" className="btn btn-default">
                <span className="glyphicon glyphicon-plus"
                      aria-hidden="true">+</span>
            </button>
        </div>
    }
}

export default Input;