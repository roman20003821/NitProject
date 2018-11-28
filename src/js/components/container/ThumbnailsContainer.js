import React, {Component} from "react";
import Thumbnail from "../presentational/Thumbnail";

const COL_NUMBER = 3;

class ThumbnailsContainer extends React.Component {

    constructor(props) {
        super(props);
        if (localStorage.getItem("BIN_ARRAY") === null) {
            var binItemsId = [];
            localStorage.setItem("BIN_ARRAY", JSON.stringify(binItemsId));
        }
    }

    renderRows(items) {
        var indents = [];
        var lo = 0;
        var hi = items.length >= COL_NUMBER ? COL_NUMBER : items.length;
        while (lo < items.length) {
            indents.push(<div className="row justify-content-between">
                {this.renderThumbnailsColumn(items.slice(lo, hi))}
            </div>);
            lo += COL_NUMBER;
            hi += COL_NUMBER;
            if (hi > items.length) hi = items.length;
        }
        return indents;
    }

    renderThumbnailsColumn(items) {
        var indents = [];
        for (var i = 0; i < items.length; i++) {
            indents.push(<div className="col-12 col sm-12 col-lg-3"><Thumbnail
                id={items[i].id}
                name={items[i].name}
                description={items[i].description}
                image_url={items[i].image_url}
                price={items[i].price}
                special_price={items[i].special_price}
            /></div>);
        }
        return indents;
    }


    render() {
        return (
            <div>
                {this.renderRows(this.props.products)}
            </div>
        );
    }
}

export default ThumbnailsContainer;