import React from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

// css
import "../style/BackToTop.scss";

function BackToTop () {
    return (
        <React.StrictMode>
            <section className="top_button">
                <a href="#"><ExpandLessIcon /></a>
            </section>
        </React.StrictMode>
    )
}

export default BackToTop;