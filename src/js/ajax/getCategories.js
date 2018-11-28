import $ from 'jquery';

import React from 'react';
import ReactDOM from "react-dom";
import CategoriesContainer from "../components/container/CategoriesContainer"

$(document).ready(function () {
    loadCategories();
});

function loadCategories() {
    $.ajax({
        url: 'http://nit.tron.net.ua/api/category/list',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            const wrapper = document.getElementById("create_categories");
            wrapper ? ReactDOM.render(<CategoriesContainer
                categories={result}/>, wrapper) : false;
        },
        error: function (xhr) {
            alert('Error while loading data!');
        },
    });
}

