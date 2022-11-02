import React from 'react';
import './rightBar.scss';

const RightBar = () => {
    return (
        <div className='rightbar'>
            <div className="container">
                <div className="items">
                    <span>Suggestion For  You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ibb.co/Zgqt4QH/mariam.jpg" alt="" />
                            <span>Mariam Zim</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>discard</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ibb.co/rxKf8NG/arian.jpg" alt="" />
                            <span>Arian Shuvo</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>discard</button>
                        </div>
                    </div>
                </div>
                <div className="items">
                    <span>Latest Activity</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ibb.co/8bR2DCb/zim.jpg" alt="" />
                            <p><span>Md Zim</span> Update Profile Picture</p>
                        </div>
                       <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ibb.co/WKMM8t4/rezwan.jpg" alt="" />
                            <p><span>SM Rezwanul</span> Changed cover photo</p>
                        </div>
                       <span>2 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ibb.co/Fsx8fys/israt.jpg" alt="" />
                            <p><span>Israt Jahan</span> Update her Status</p>
                        </div>
                       <span>5 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ibb.co/zbyRBbJ/mahdi.jpg" alt="" />
                            <p><span>Mahdi Hasan</span> Add a photo</p>
                        </div>
                       <span>20 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ibb.co/gdC9zJQ/mmm.jpg" alt="" />
                            <p><span>Md Maruf</span> Love your comment</p>
                        </div>
                       <span>1 hour ago</span>
                    </div>
                </div>
                <div className="items">
                    <span>Active Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ibb.co/8bR2DCb/zim.jpg" alt="" />
                            <div className="online"/>
                            <span>Md Zim</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ibb.co/WKMM8t4/rezwan.jpg" alt="" />
                            <div className="online"/>
                            <span>SM Rezwanul Hasan</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ibb.co/Fsx8fys/israt.jpg" alt="" />
                            <div className="online"/>
                            <span>Israt Jahan Moon</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ibb.co/zbyRBbJ/mahdi.jpg" alt="" />
                            <div className="online"/>
                            <span>Mahdi Hasan</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ibb.co/gdC9zJQ/mmm.jpg" alt="" />
                            <div className="online"/>
                            <span>Md Maruf Sheikh</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ibb.co/0K9wG1K/tafsia.jpg" alt="" />
                            <div className="online"/>
                            <span>Tafsia Tarannum Niladri</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ibb.co/Lx2bpFL/jahan.jpg" alt="" />
                            <div className="online"/>
                            <span>Jahan Ajmary</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ibb.co/6RvPwr8/sadia.jpg" alt="" />
                            <div className="online"/>
                            <span>Sadia Kabir</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RightBar;