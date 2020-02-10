import React from 'react'

export default function ArticleBox(props) {
    return (
        <div style={{display: "inline-box"}} className="article-box">
            <img src={props.imageSrc} alt={props.alt} height="256px" width="256px"/>
            <h4>{props.title}</h4>
        </div>
    );
}
