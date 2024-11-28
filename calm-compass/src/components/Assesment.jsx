import React from 'react';

function Assesment(){

    return(
        <div className="content-box">
        <div className="lifestyle-choices">                
            <div className="category">
                <h5 className="category-title">General Evaluation</h5>
                <div className="category-section">
                    <p>Here, you will be able to perform a general evaluation anytime for free. A lot of people don't know that they need help, so doing a regular checkup on yourself like this one could really help you start an amazing healing journey.</p>
                    <a href="https://docs.google.com/forms/u/1/d/1u8924105vImlvHHSQrLAaG1kXSZ6szse07lbv6lbHko/edit?usp=forms_home&ths=true" className="btn">Start Your Evaluation</a>
                </div>
            </div>
    
            <div className="category">
                <h5 className="category-title">Chatbot</h5>
                <div className="category-section">
                    <p>Meet your friendly companion, Amadeus. This chatbot is able to assist anyone who needs to talk, learn about mental health, and even perform symptom checks. Amadeus will provide direct resources from which it found the information, and any conversation will be kept private between you and Amadeus. <strong>Don't share your private information, as data is still recorded for support purposes.</strong></p>
                    <form action="/chatbot" method="get">
                        <button type="submit" className="btn">Talk with Amadeus</button>
                    </form>
                </div>
            </div>
        </div>
    
        <header>
            <h1>Quizzes</h1>
            <p>Here's some of our favorite quizzes from this week!</p>
        </header>
        
        <div className="stickers">
            <div className="reactive_text_box_secondary">
                <h2>Mental Health</h2>
                <p className="text_box_secondary">Looking after your mental health quiz</p>
                <a href="https://www.beintheknow.org/resources/quizzes/looking-after-your-mental-health-quiz?page=start">
                    <img src="/images/quiz1.webp" alt="Quiz"/>
                </a>
            </div>
    
            <div className="reactive_text_box_secondary">
                <h2>Health and Wellness</h2>
                <p className="text_box_secondary">Discover your Health and Wellness Performance Score</p>
                <a href="https://www.goldenbaywellness.org/healthquiz?gad_source=1&gclid=Cj0KCQjw7Py4BhCbARIsAMMx-_Llb2P4iisOvAMKcZ9MZaQkGyiqCp8k9NLaKnFpOwv0qz2Fe46mN4IaAhQpEALw_wcB">
                    <img src="/images/quiz2.avif" alt="Quiz"/>
                </a>
            </div>
            
            <div className="reactive_text_box_secondary">
                <h2>Daily Test</h2>
                <p className="text_box_secondary">Your Mental Health Today Test</p>
                <a href="https://www.psychologytoday.com/intl/tests/health/mental-health-assessment">
                    <img src="/images/quiz3.webp" alt="Quiz"/>
                </a>
            </div>
        </div>
    </div> 
    );
}

export default Assesment;