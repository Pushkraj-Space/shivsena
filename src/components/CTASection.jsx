import React from 'react'

const CTASection = () => {
    const ctaItems = [
        {
            id: 1,
            icon: 'fas fa-user-plus',
            title: 'सदस्यता नोंदणी करा',
            description: 'शिवसेना पक्षात सामील व्हा आणि आमच्या कार्यात सहभागी व्हा. जनतेच्या हितासाठी कार्य करण्यासाठी आपल्या सहकार्याची आवश्यकता आहे.',
            buttonText: 'नोंदणी करा',
            buttonLink: '#register'
        },
        {
            id: 2,
            icon: 'fas fa-hands-helping',
            title: 'स्वयंसेवक व्हा',
            description: 'स्वयंसेवक म्हणून आमच्या कार्यात सहभागी व्हा. जनतेच्या सेवेसाठी आपल्या कौशल्यांचा वापर करा.',
            buttonText: 'स्वयंसेवक व्हा',
            buttonLink: '#volunteer'
        },
        {
            id: 3,
            icon: 'fas fa-hand-holding-heart',
            title: 'देणगी द्या',
            description: 'आमच्या कार्यासाठी देणगी द्या. आपली देणगी जनतेच्या कल्याणासाठी वापरली जाईल.',
            buttonText: 'देणगी द्या',
            buttonLink: '#donate'
        }
    ]

    return (
        <section className="section cta-section">
            <div className="container">
                <h2 className="section-title">सक्रियपणे सहभागी व्हा</h2>
                <p className="section-subtitle">
                    आमच्या कार्यात सहभागी होऊन जनतेच्या सेवेसाठी कार्य करा
                </p>

                <div className="row">
                    {ctaItems.map((item) => (
                        <div key={item.id} className="col-33">
                            <div className="cta-card">
                                <i className={item.icon} style={{ fontSize: '3rem', color: 'var(--primary-color)', marginBottom: '2rem' }}></i>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <a href={item.buttonLink} className="btn btn-primary btn-lg">
                                    {item.buttonText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CTASection 