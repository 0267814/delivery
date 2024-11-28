import React from 'react';

function Home(){

    return(
        <div className="content-box">
            <div className="stickers">
                <div className="reactive_text_box">
                    <h2>Our Mission</h2>
                    <p >
                        Our mission is to promote mental health awareness and provide accessible resources to everyone. Through education, counseling, and community support, we aim to empower individuals to navigate life's challenges with strength and resilience.
                    </p>
                    <img src="/images/sticker_red.webp" alt="Mission Sticker"/>
                    </div>
        
                <div className="reactive_text_box">
                    <h2>Welcome</h2>
                    <p >
                        Welcome to Calm Compass, where your mental well-being matters. We are here to create a safe and supportive space for individuals to explore their thoughts, feelings, and challenges. Let's take the first step toward healing and growth together.
                    </p>
                    <img src="/images/sticker_green.jpg" alt="Welcome Sticker"/>
                </div>
        
                <div className="reactive_text_box">
                    <h2>How We Can Help</h2>
                    <p >
                        Whether you're seeking support, information, or a community that understands, we’re here for you. Explore our free resources, connect with professionals, or join our workshops to start your journey toward a healthier mind.
                    </p>
                    <img src="/images/sticker_purple.webp" alt="Help Sticker"/>
                </div>
            </div>
        </div>
    );
}

export default Home;