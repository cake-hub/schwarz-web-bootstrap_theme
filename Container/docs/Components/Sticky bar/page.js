import React from "react";
import StickyBar from "@Develop/Components/Sticky bar/stickyBar.html";
import Footer from "@Develop/Components/Footer/footer.html";
import FooterList from "@Develop/Components/Footer/footerList.html";
import FooterListItem from "@Develop/Components/Footer/footerListItem.html";

const StickyBarDefault = () => (
    <StickyBar />
);

const StickyBarWithFooter = () => (
    <React.Fragment>
        <div class="container-responsive">
            <h1>Some example content to show the &quot;sticky&quot; behavior ;)</h1>

            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
            <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />

        </div>
        <StickyBar />
        <Footer>
            <ul className="list-unstyled mb-0">
                <li className="mb-2">
                    <strong className="footer-headline">Headline</strong>
                    <FooterList>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                    </FooterList>
                </li>
                <li>
                    <strong className="footer-headline">Headline</strong>
                    <FooterList>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                        <FooterListItem>Main-Nav title</FooterListItem>
                    </FooterList>
                </li>
            </ul>

            <hr />

            <FooterList>
                <FooterListItem>Main-Nav title</FooterListItem>
                <FooterListItem>Meta-Nav title</FooterListItem>
                <FooterListItem>Meta-Nav title</FooterListItem>
                <FooterListItem>Meta-Nav title</FooterListItem>
                <FooterListItem>Meta-Nav title</FooterListItem>
                <FooterListItem>Meta-Nav title</FooterListItem>
                <FooterListItem>Meta-Nav title</FooterListItem>
            </FooterList>
        </Footer>
    </React.Fragment>
);

export default {
    StickyBarDefault,
    StickyBarWithFooter
};
