import "../scss/description.css"
import {loadProductToDesc} from "./ajax/getProductDescription";

init();

function init() {
    let id = localStorage.getItem("productId");
    loadProductToDesc(id, "create_product_description");
}