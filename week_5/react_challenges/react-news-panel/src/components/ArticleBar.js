import React from 'react';
import ArticleBox from './ArticleBox';
import ArticleTitle from './ArticleTitle'

export default function ArticleBar(props) {
    return (
        <div className="article-bar">
        <ArticleTitle SectionTitle={props.SectionTitle}/>
            <div className="article-content">
                <ArticleBox title={props.ArticleTitle1} imageSrc={props.ArticleImage1} alt={props.AltText1}/>
                <ArticleBox title={props.ArticleTitle2} imageSrc={props.ArticleImage2} alt={props.AltText2}/>
                <ArticleBox title={props.ArticleTitle3} imageSrc={props.ArticleImage3} alt={props.AltText3}/>
                <ArticleBox title={props.ArticleTitle4} imageSrc={props.ArticleImage4} alt={props.AltText4}/>
                <ArticleBox title={props.ArticleTitle5} imageSrc={props.ArticleImage5} alt={props.AltText5}/>
            </div>
        </div>
    )
}
