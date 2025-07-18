import React from 'react'

const StrengthSection = () => {
    const strengthBlocks = [
        {
            id: 1,
            title: 'मराठी अस्मिता',
            description: 'मराठी भाषा, संस्कृती आणि अस्मितेचे संरक्षण आणि प्रोत्साहन हे आमचे प्रमुख ध्येय आहे.',
            background: 'white'
        },
        {
            id: 2,
            title: 'राष्ट्रनिष्ठा आणि प्रामाणिकपणा',
            description: 'राष्ट्रहिताला प्राधान्य देणे आणि प्रामाणिक राजकारण करणे हे आमचे मूलभूत तत्त्व आहे.',
            background: 'orange'
        },
        {
            id: 3,
            title: 'लोकहित प्रथम',
            description: 'जनतेच्या हितासाठी कार्य करणे आणि त्यांच्या समस्यांचे निराकरण करणे हे आमचे ध्येय आहे.',
            background: 'white'
        },
        {
            id: 4,
            title: 'शब्दांपेक्षा कृतीला प्राधान्य',
            description: 'फक्त बोलण्याऐवजी कृती करून जनतेला परिणाम दाखवणे हे आमचे वैशिष्ट्य आहे.',
            background: 'white'
        },
        {
            id: 5,
            title: 'निर्भय नेतृत्व',
            description: 'कोणत्याही परिस्थितीत निर्भयपणे निर्णय घेणे आणि त्यांची अंमलबजावणी करणे.',
            background: 'white'
        }
    ]

    return (
        <section className="section strength-section">
            <div className="container">
                <h2 className="section-title">मराठी मनाची ताकद शिवसेना</h2>
                <p className="section-subtitle">
                    आमच्या पक्षाची मूलभूत तत्त्वे आणि ध्येये
                </p>

                <div className="strength-grid">
                    {strengthBlocks.map((block) => (
                        <div key={block.id} className={`strength-block strength-block-${block.background}`}>
                            <h3>{block.title}</h3>
                            <p>{block.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StrengthSection 