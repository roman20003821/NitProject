import $ from 'jquery'
import "../scss/bin.css";
import BinItemsContainer from "./components/container/BinItemsContainer";
import ReactDOM from "react-dom";
import React from 'react';
import FormContainer from './components/container/FormContainer';

$(document).ready(function () {
    start();
});

function start() {
    $("#make_order_create").html("");
    const array = JSON.parse(localStorage.getItem("BIN_ARRAY"));
    if (array === null || array.length === 0) {
        $(".container").append("<h3 class='bin_empty'>The Bin Is Empty</h3>");
        $("#create_bin_items").html("");
        $("#request_form").html("");
    } else {
        const wrapper = document.getElementById("create_bin_items");
        wrapper ? ReactDOM.render(<BinItemsContainer
            itemsId={JSON.parse(localStorage.getItem("BIN_ARRAY"))}/>, wrapper) : false;
        $("#make_order_create").append("<button onclick='showForm()' id=\"make_order\" type=\"button\" class=\"btn btn-outline-success\">Make Order</button>\n");
        $("#make_order").click(function () {
            showForm();
        });
    }
}

function showForm() {
    const wrapper = document.getElementById("create_form");
    wrapper ? ReactDOM.render(<FormContainer/>, wrapper) : false;
    $('html, body').animate({
        scrollTop: $(document).height(),
    }, 1000);
}

export {start}