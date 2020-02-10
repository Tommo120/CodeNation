import React from 'react';
import './App.css';

//User Avatars
import Avatar_1 from './images/avatars/geek-avatar.jpg'
import Avatar_2 from './images/avatars/lady-avatar.jpg'
import Avatar_3 from './images/avatars/lady-avatar-2.jpg'

//Location images
import Hotel from './images/locations/nicehotel.jpg'
import Motel from './images/locations/motelroom.jpg'
import Shed from './images/locations/shed.jpg'

import UserReview from './components/UserReview'

function App() {
  return (
    <div style={{display: "flex", flexDirection: "row"}}>
    <UserReview locationImage={Hotel} locationImageAlt="A nice hotel room" rating='5' userReviewBody="What a lovely hotel to stay in! The room was absolutely beautiful, very tidy and incredibly clean. The staff were all an absolute delight and always willing to help with any problems you might have. I will definitely be returning to this hotel" userName="John" userLocation="Manchester, UK" userAvatarSrc={Avatar_1}/>
    <UserReview locationImage={Motel} locationImageAlt="A disgusting motel room" rating='1' userReviewBody="Staying in this motel was like walking into the past. A time before hoovers and a sense of style and taste existed. The radiator sounded like a screaming hedgehog and I think something was living in the mattress. At least I didn't have to sleep outside I guess..." userName="Ricardo" userLocation="Chesterfield, UK" userAvatarSrc={Avatar_2}/>
    <UserReview locationImage={Shed} locationImageAlt="It's a shed" rating='3' userReviewBody="I love sleeping in sheds. This shed was pretty average compared to other sheds I have slept in." userName="Elenor" userLocation="Paris, France" userAvatarSrc={Avatar_3}/>
    </div>
  );
}

export default App;
