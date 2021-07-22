import React from "react";

const HeaderListItem = (  { children,
                    className="",
                    c_itemClassName="",
                    c_ariaLabel=null,
                    c_dataController=null,
                    c_listDataController=null,
                    c_Appendix=null,
                    c_AppendixWrapperClassName=null,
                    ...props }  ) => (
    <li className={"header-list-item" + (c_itemClassName ? " " + c_itemClassName : "")} data-controller={c_listDataController} {...props}>
        { c_Appendix ?
            <div className={c_AppendixWrapperClassName}>
                <a href="#" className={"header-list-item-link" + (className ? " " + className : "")} aria-label={c_ariaLabel} data-controller={c_dataController}>
                    { children }
                </a>
                { c_Appendix }
            </div>
            :
            <a href="#" className={"header-list-item-link" + (className ? " " + className : "")} aria-label={c_ariaLabel} data-controller={c_dataController}>
                { children }
            </a>
        }
    </li>
);

export default HeaderListItem;
