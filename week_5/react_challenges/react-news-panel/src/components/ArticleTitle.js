import React from 'react'

export default function ArticleTitle(props) {
    return (
        <div style={{clear: "both", verticalAlign: "middle"}}>
            <h2 style={{float: "left"}} className="article-title">{props.SectionTitle}</h2>
            <h5 style={{float: "right"}}>SEE ALL >></h5>
            <hr className="middle-hr"/>
        </div>
    )
}
