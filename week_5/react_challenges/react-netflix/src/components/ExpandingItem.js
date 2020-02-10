import React, { Component } from 'react'

class ExpandingItem extends Component {
    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }

    expandSection() {
        const divider = this.divRef.current;
        divider.classList.toggle('is-open');
    }

    render() {
        return (
            <div style={{justifyItems: "center"}}>
                <div onClick={() => this.expandSection()} style={{margin: "10px", display: "flex", flexDirection: "row", backgroundColor: "rgb(55, 55, 55)", height: "64px", width: "700px", alignSelf: "center", borderRadius: "4px", justifyContent: "space-between"}}>
                    <h3 style={{margin: "0 0 0 20px", alignSelf: "center", color: "white", fontSize: "18pt", fontWeight: "250"}}>{this.props.SectionHeading}</h3>
                    <h3 style={{margin: "0 20px 0 0", alignSelf: "center", color: "white", fontSize: "28pt", fontWeight: "100"}}>+</h3>
                </div>
                <div ref={this.divRef} className="divider">
                    <p style={{color: "lightgrey"}} className="paragraph">{this.props.mainContent}</p>
                </div>
            </div>
        )
    }
}

export default ExpandingItem;
