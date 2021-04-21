import React from "react";
import CakeExampleImage from "@root/build/CakeExampleImage";

const Card = ( { className="",
                            url="#",
                            c_imgAlt="placeholder",
                            c_cardTitle="Card title",
                            c_cardDescription="Card description",
                            children,
                            c_addon,
                            ...props } ) => (
    <a href={ url } className={"card " + className} {...props}>
        <div class="card-image-ratio ratio-4-3">
            <CakeExampleImage callFilePath={__dirname} className="card-img-top" alt={ c_imgAlt } />
        </div>
        {c_addon}
        <div className="card-body">
            <h3 className="card-title">{ c_cardTitle }</h3>
            <p className="card-text">{ c_cardDescription }</p>
            {children}
        </div>
    </a>
);

export default Card;
