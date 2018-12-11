import ReactDOM from "react-dom";
import $ from 'jquery';

import React from 'react';
import DescriptionItem from "../components/presentational/DescriptionItem";


function loadProductToDesc(productId, elementId) {
    $.ajax({
        url: 'https://nit.tron.net.ua/api/product/' + productId,
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            const wrapper = document.getElementById(elementId);
            wrapper ? ReactDOM.render(<DescriptionItem product={result}/>, wrapper) : false;
        },
        error: function (xhr) {
            alert('Error while loading data!');
        },
    });
}

export {loadProductToDesc};
