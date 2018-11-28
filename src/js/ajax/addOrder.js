import $ from 'jquery';
import ReactDOM from "react-dom";
import {start} from "../bin";

function addOrderToShop(data) {
    $.ajax({
        url: 'http://nit.tron.net.ua/api/order/add',
        type: 'POST',
        dataType: 'json',
        success: function (result) {
            alert("Success");
            localStorage.clear();
            start();
        },
        error: function (xhr) {
            alert('Error, please try again later!');
        },
    });
}

export {addOrderToShop};
