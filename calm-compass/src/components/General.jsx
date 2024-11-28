import React from 'react';

function General(){

    return(
        <div className="content-box">
            <header>
                <h1>Popular Articles</h1>
                <p>Here's some of our favorite and most popular articles of this week!</p>
            </header>
            
            <div className="articles">
                <div className="stickers">
                    <div className="reactive_text_box_secondary">
                        <h2>Needing Therapy</h2>
                        <p className="text_box_secondary">Needing Therapy</p>
                        <a href="https://www.health.harvard.edu/mind-and-mood/why-you-may-need-therapy">
                            <img src="/images/article1.jpg" alt="Article"/>
                        </a>
                    </div>
                    <div className="reactive_text_box_secondary">
                        <h2>Treat Mental Health</h2>
                        <p className="text_box_secondary">How to support someone with a mental health problem</p>
                        <a href="https://www.mentalhealth.org.uk/explore-mental-health/articles/how-support-someone-mental-health-problem">
                            <img src="/images/article2.jpg" alt="Article"/>
                        </a>
                    </div>
                    <div className="reactive_text_box_secondary">
                        <h2>Managing and Reducing Stress</h2>
                        <p className="text_box_secondary">Managing and Reducing Stress</p>
                        <a href="https://www.news-medical.net/health/Managing-and-Reducing-Stress.aspx">
                            <img src="/images/article3.webp" alt="Article"/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="lifestyle-choices">
                <div className="category">
                    <h5 className="category-title">Lifestyle Choices</h5>
                    <div className="category-section">
                        <p className="category-subheading"><strong>Healthy Habits</strong></p>
                        <ul>
                            <li>Exercise: Describes the importance of regular physical activity for both mental and physical health.</li>
                            <li>Sleep well: Highlights the benefits of quality sleep for mental and physical recovery.</li>
                            <li>Balanced diet: Emphasizes the need for nutritious food and its role in maintaining health.</li>
                            <li>Stay away from harmful substances: Discusses avoiding harmful behaviors to preserve health.</li>
                        </ul>
                    </div>
            
                    <div className="category-section">
                        <p className="category-subheading"><strong>Self Care</strong></p>
                        <ul>
                            <li>Take breaks: Suggests the importance of taking regular breaks to prevent burnout.</li>
                            <li>Create a routine: Explains how a structured routine improves focus and mental well-being.</li>
                            <li>Don't be afraid of treating yourself: Encourages moments of self-compassion and reward.</li>
                        </ul>
                    </div>
            
                    <h5 className="category-title"><strong>Preventative Measures</strong></h5>
                        <div className="category-section">
                            <p className="category-subheading"><strong>Stress</strong></p>
                            <ul>
                                <li>Know when to stop: Recognizing when to take a step back helps manage feelings of overwhelm.</li>
                                <li>Set realistic goals: Breaking tasks into manageable steps helps reduce stress.</li>
                                <li>Talk to someone: Sharing your stress with others provides emotional relief and support.</li>
                            </ul>
                        </div>
            
                        <div className="category-section">
                            <p className="category-subheading"><strong>Anxiety</strong></p>
                            <ul>
                                <li>Challenging avoidance: Gradually facing your fears diminishes the power of anxiety.</li>
                                <li>Practice mindfulness: Mindfulness techniques calm the mind and reduce anxiety.</li>
                                <li>Deep breathing: Breathing exercises help manage anxiety by activating relaxation responses.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>            
    );
}

export default General;