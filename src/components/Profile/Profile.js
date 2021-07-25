import React from 'react'
import TopCard from './Cards/TopCard'
import MiddleCard from './Cards/MiddleCard'
import BottomCard from './Cards/BottomCard'
import './Profile.css'

const Profile = () => {
    return (
        <div className="main-container">
            <div className="container">
                <TopCard />
                <MiddleCard />
                <BottomCard />
            </div>
        </div>
    );
}

export default Profile;
