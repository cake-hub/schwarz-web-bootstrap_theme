import React from "react";
import CakeExampleImage from "@root/build/CakeExampleImage";
import Card from "@Develop/Components/Card/card.html";

const CardDefault = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <Card style={{maxWidth: "304px"}} />
    </div>
);

const CardBody = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <div className="card">
            <div className="card-body">
                This is some text within a card body.
            </div>
        </div>
    </div>
);

const CardTitlesText = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <div className="card" style={{"width": "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
);

const CardImages = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <div className="card" style={{"width": "18rem"}}>
            <div class="card-image-ratio ratio-4-3">
                <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt="Card image cap" />
            </div>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
);

const CardGridDefault = () => (
    <div className="cake-example-cutted-shadow-fix" id="showbox">
        <div className="row">
            <div className="col-6 col-md-3 mb-2 mb-md-0">
                <Card />
            </div>
            <div className="col-6 col-md-3 mb-2 mb-md-0">
                <Card c_productTitle="A long card headline that has more content that just one line." c_productDescription="This is a example for more then one line copy text. It shows the equal height of the cards in the same row."/>
            </div>
            <div className="col-6 col-md-3 mb-2 mb-md-0">
                <Card />
            </div>
            <div className="col-6 col-md-3 mb-2 mb-md-0">
                <Card />
            </div>
        </div>
    </div>
);

export default {
    CardDefault,
    CardBody,
    CardTitlesText,
    CardImages,
    CardGridDefault,
};
