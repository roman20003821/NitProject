import $ from 'jquery';

import React from 'react';
import ReactDOM from "react-dom";
import ThumbnailsContainer from "../components/container/ThumbnailsContainer"

$(document).ready(function () {
    loadProducts(1);
});

function loadProducts(categoryId) {
    $.ajax({
        url: 'https://nit.tron.net.ua/api/product/list/category/' + categoryId,
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            const wrapper = document.getElementById("create_products");
            wrapper ? ReactDOM.render(<ThumbnailsContainer products={result}/>, wrapper) : false;
        },
        error: function (xhr) {
            alert('Error while loading data!');
        },
    });
    return false;
}

export {loadProducts};