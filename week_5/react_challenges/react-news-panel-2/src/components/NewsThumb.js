import React from 'react';
import NewsObject from './NewsObject';

export default function NewsThumb(props) {
    return (
        <div className="news-thumb-container">
            <img src={props.Article1.imgSrc} alt={props.thumbAlt}/>
            <div className="news-text-container">
                <h4>This is a headline</h4>
                <h5>This is the sub heading</h5>
            </div>
        </div>
    )
}
