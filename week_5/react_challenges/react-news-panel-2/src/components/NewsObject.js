import React, { Component } from 'react'

export default class NewsObject{
    constructor(imgSrc, imgAlt, headline, category) {
        this.imgSrc = imgSrc;
        this.imgAlt = imgAlt;
        this.headline = headline;
        this.category = category;
    }
}
