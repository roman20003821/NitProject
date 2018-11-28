import $ from 'jquery';

import React from 'react';
import ReactDOM from "react-dom";
import BinItem from "../components/presentational/BinItem"

function loadProduct(productId, elementId) {
    $.ajax({
        url: 'http://nit.tron.net.ua/api/product/' + productId,
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            const wrapper = document.getElementById(elementId);
            wrapper ? ReactDOM.render(<BinItem product={result}/>, wrapper) : false;
        },
        error: function (xhr) {
            alert('Error while loading data!');
        },
    });
    return false;
}



export {loadProduct};
