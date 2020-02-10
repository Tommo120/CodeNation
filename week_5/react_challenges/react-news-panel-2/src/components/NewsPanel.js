import React from 'react';
import NewsThumb from './NewsThumb';

import NewsObject from './NewsObject';

export default function NewsPanel(props) {
    return (
        <div className="news-panel-container">
            <h3>News Headlines ></h3>
            <NewsThumb Article1={props.Article1}/>
            <NewsThumb/>
            <NewsThumb/>
        </div>
    )
}
