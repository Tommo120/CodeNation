import React from 'react'

export default function UserInfo(props) {
    return (
        <div style={{display: "flex", flexDirection: "row", height: "75px"}}>
        <img style={{width: "75px", height: "75px", float: "left"}} src={props.userAvatarSrc} alt={props.userName}/>
            <div style={{float: "right", display: "flex", flexDirection: "column"}}>
                <h5 style={{margin: "10px"}}>{props.userName}</h5>
                <h6 style={{margin: "10px"}}>{props.userLocation}</h6>
            </div>
        </div>
    )
}
