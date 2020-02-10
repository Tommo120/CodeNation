import React from 'react'
import UserInfo from './UserInfo'
import FilledStarSrc from '../images/filled_star.png'
import EmptyStarSrc from '../images/empty_star.png'

export default function UserReview(props) {

    let stars = [];

    for(let i =0; i < props.rating; i++) {
        stars.push(<img src={FilledStarSrc} alt="Full Star" style={{height: "20px", width: "auto"}}/>)
    }

    for(let i = props.rating; i < 5; i++) {
        stars.push(<img src={EmptyStarSrc} alt="Hollow Star" style={{height: "20px", width: "auto"}}/>)
    }

    return (
        <div style={{margin: "10px", width: "300px", height: "450px", display: "flex", flexDirection: "column"}}>
            <img style={{width: "300px", height: "200px", objectFit: "cover"}} src={props.locationImage} alt={props.locationImageAlt}/>
            <div style={{margin: "10px"}}>
                {stars}
            </div>
            <p style={{fontSize: "10pt", margin: "0px 10px 10px 10px", color: "darkgrey", height: "100px"}}>{props.userReviewBody}</p>
            <UserInfo userName={props.userName} userLocation={props.userLocation} userAvatarSrc={props.userAvatarSrc}/>
        </div>
    )
}