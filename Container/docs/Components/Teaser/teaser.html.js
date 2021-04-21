import React from "react";
import CakeExampleImage from "@root/build/CakeExampleImage";

export const Teaser = ( { className="",
                            c_href="#",
                            c_subhead="Subhead",
                            c_title="Title",
                            c_addon,
                            ...props } ) => (
    <article className={"card teaser-card " + className} {...props}>
        <a href={c_href} className="teaser-image-ratio ratio-4-3 teaser-card-link">
            {c_addon}
            <CakeExampleImage callFilePath={__dirname} className="card-img" />
            {!c_subhead && !c_title ? '' :
                <div className="card-body">
                    <header class="teaser-header">
                        {c_title ? <h2 className="teaser-card-title">{c_title}</h2> : ''}
                        {c_subhead ? <h3 className="teaser-card-subhead">{c_subhead}</h3> : ''}
                    </header>
                </div>
            }
        </a>
    </article>
);

export const TeaserNotLinked = ( { className="",
                                    c_subhead="Subhead",
                                    c_title="Title",
                                    c_addon,
                                    ...props } ) => (
    <article className={"card teaser-card " + className} {...props}>
        <div class="teaser-image-ratio ratio-4-3">
            {c_addon}
            <CakeExampleImage callFilePath={__dirname} className="card-img" />
            {!c_subhead && !c_title ? '' :
                <div class="card-body">
                    <header class="teaser-header">
                        {c_title ? <h2 className="teaser-card-title">{c_title}</h2> : ''}
                        {c_subhead ? <h3 className="teaser-card-subhead">{c_subhead}</h3> : ''}
                    </header>
                </div>
            }
        </div>
    </article>
);
