import $ from "jquery";
import React, {Component} from "react";
import {addOrderToShop} from "../../ajax/addOrder";

class FormContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            touched: {
                name: false,
                phone: false,
                email: false,
            }
        }
    }

    validate(name, phone, email) {
        return {
            name: name.length === 0,
            phone: !phone.startsWith("+380") || !phone.length === 10,
            email: !this.validateEmail(this.state.email),
        };
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    }

    handleNameChanged(event) {
        this.setState({
            name: event.target.value,
        });
    }

    handlePhoneChanged(event) {
        this.setState({
            phone: event.target.value,
        });
    }

    handleEmailChanged(event) {
        this.setState({
            email: event.target.value,
        });
    }

    handleSubmit() {
        const errors = this.validate(this.state.name, this.state.phone, this.state.email);
        if (!this.canBeSubmitted(errors)) {
            event.preventDefault();
            this.setState({
                name: errors.name ? "" : this.state.name,
                phone: errors.phone ? "" : this.state.phone,
                email: errors.email ? "" : this.state.email,
                touched: {
                    name: true,
                    phone: true,
                    email: true,
                }
            });
            return false;
        } else {
            addOrderToShop(this.createPostJSON());
            return true;
        }
    }

    canBeSubmitted(errors) {
        return !errors.name && !errors.email && !errors.phone;
    }

    createPostJSON() {
        return "token=SXtRtii0NK_17qapxQaz&name=" + this.state.name + "&phone=" + this.state.email + "&email=" + this.state.email +
            +this.getOrderedProducts();
    }

    getOrderedProducts() {
        const array = localStorage.getItem("BIN_ARRAY") === "" ? [] : JSON.parse(localStorage.getItem("BIN_ARRAY"));
        let res = "";
        for (let i = 0; i < array.length; i++) {
            res += "&products[" + array[i] + "]=" + $("#count_form_container_" + array[i]).val();
        }
    }

    render() {
        const errors = this.validate(this.state.name, this.state.phone, this.state.email);
        return <form id="request_form">
            <div className="form-group">
                <input onChange={(event) => this.handleEmailChanged(event)} type="email"
                       value={this.state.email}
                       className="form-control "
                       id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder={errors.email && this.state.touched.email ? "Enter email correctly" : "Enter email"}/>
            </div>
            <div className="form-group">
                <input className="form-control"
                       onChange={(event) => this.handlePhoneChanged(event)}
                       type="tel" value={this.state.phone} id="example-tel-input"
                       placeholder={errors.phone && this.state.touched.phone ? "Enter Phone mumber like:+380..." : "Enter Phone number"}/>
            </div>
            <div className="form-group has-warning">
                <input onChange={(event) => this.handleNameChanged(event)} type="text"
                       value={this.state.name}
                       className="form-control form-control-warning"
                       id="exampleInputName" aria-describedby="nameHelp"
                       placeholder={errors.name && this.state.touched.name ? "Enter name correctly" : "Enter name"}/>
            </div>
            <button type="button" onClick={() => this.handleSubmit()} className="btn btn-primary">Submit</button>
        </form>;
    }
}

export default FormContainer;