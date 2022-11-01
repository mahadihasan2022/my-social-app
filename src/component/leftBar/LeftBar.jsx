import React from 'react';
import user from '../../images/user.svg';
import friends from '../../images/friends.svg';
import watch from '../../images/watch.svg';
import group from '../../images/group.svg';
import marketPlace from '../../images/marketPlace.svg';
import memories from '../../images/memories.svg';
import event from '../../images/event.svg';
import gaming from '../../images/gaming.svg';
import gallery from '../../images/gallery.svg';
import videos from '../../images/videos.svg';
import message from '../../images/message.svg';
import fundraiser from '../../images/fundraiser.svg';
import tutorials from '../../images/tutorials.svg';
import courses from '../../images/courses.svg';


import './leftBar.scss';

const LeftBar = () => {
    return (
        <div className='leftbar'>
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={user} alt="" />
                        <span>Mahadi Hasan</span>
                    </div>
                    <div className="items">
                        <img src={friends} alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="items">
                        <img src={group} alt="" />
                        <span>Groups</span>
                    </div>
                    <div className="items">
                        <img src={marketPlace} alt="" />
                        <span>Marketplace</span>
                    </div>
                    <div className="items">
                        <img src={watch} alt="" />
                        <span>Watch</span>
                    </div>
                    <div className="items">
                        <img src={memories} alt="" />
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Your shortcuts</span>
                    <div className="items">
                        <img src={event} alt="" />
                        <span>Event</span>
                    </div>                    
                    <div className="items">
                        <img src={gaming} alt="" />
                        <span>Gaming</span>
                    </div>                    
                    <div className="items">
                        <img src={gallery} alt="" />
                        <span>Gallery</span>
                    </div>                    
                    <div className="items">
                        <img src={videos} alt="" />
                        <span>Videos</span>
                    </div>                    
                    <div className="items">
                        <img src={message} alt="" />
                        <span>Message</span>
                    </div>                    
                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <div className="items">
                        <img src={fundraiser} alt="" />
                        <span>Fundraiser</span>
                    </div>                     
                    <div className="items">
                        <img src={tutorials} alt="" />
                        <span>Tutorials</span>
                    </div>                     
                    <div className="items">
                        <img src={courses} alt="" />
                        <span>Courses</span>
                    </div>                     

                </div>
            </div>
        </div>
    );
};

export default LeftBar;