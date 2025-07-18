import React from 'react'

const InspirationSection = () => {
    return (
        <section className="section inspiration-section">
            <div className="container">
                <h2 className="section-title">आमचे प्रेरणास्थान</h2>
                <p className="section-subtitle">
                    आमच्या पक्षाच्या प्रेरणास्थान असलेल्या महान नेत्यांची ओळख
                </p>

                <div className="row">
                    <div className="col-50">
                        <div className="leader-card">
                            <div className="leader-image">
                                <img
                                    src="/images/balkadu.jpg"
                                    alt="हिंदू हृदयसम्राट बाळासाहेब ठाकरे"
                                />
                            </div>
                            <div className="leader-info">
                                <h3 className="leader-name">हिंदू हृदयसम्राट बाळासाहेब ठाकरे</h3>
                                <p className="leader-description">
                                    शिवसेना संस्थापक बाळासाहेब ठाकरे यांचे नेतृत्व आणि विचारधारा आमच्या पक्षाचे प्रेरणास्थान आहे.
                                    त्यांच्या मार्गदर्शनाखाली शिवसेना महाराष्ट्रातील जनतेच्या हितासाठी कार्य करत आहे.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-50">
                        <div className="leader-card">
                            <div className="leader-image">
                                <img
                                    src="/images/saheb.jpeg"
                                    alt="धर्मवीर आनंद दिघे साहेब"
                                />
                            </div>
                            <div className="leader-info">
                                <h3 className="leader-name">धर्मवीर आनंद दिघे साहेब</h3>
                                <p className="leader-description">
                                    धर्मवीर आनंद दिघे साहेब यांचे नेतृत्व आणि त्याग आमच्या पक्षाचे प्रेरणास्थान आहे.
                                    त्यांच्या कार्यशैलीने शिवसेनेला नवीन दिशा मिळाली.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InspirationSection 