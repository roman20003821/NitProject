import React, {Component} from "react";
import Category from "../presentational/Category"

class CategoriesContainer extends Component {

    renderListItems(items) {
        var indents = [];
        for (var i = 0; i < items.length; i++) {
            indents.push(
                <Category id={items[i].id} name={items[i].name} description={items[i].description}/>);
        }
        return indents;
    }

    render() {
        return (
            <ul className="nav flex-column">
                {this.renderListItems(this.props.categories)}
            </ul>
        );
    }
}

export default CategoriesContainer;
