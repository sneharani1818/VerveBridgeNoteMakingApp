import React from 'react';
import FeatureCard from './FeatureCard';

const Intro = () => {
    return (
        <div className="text-center mt-5">
            <h1 className="display-1">Welcome!</h1>
            <p className="lead">Explore our note-taking app designed to help you stay organized.</p>

            <div className="row mt-5">
                <div className="row mt-2 mx-auto justify-content-center">
                    <FeatureCard title="Stay Organized" description="Efficiently manage your notes in one place." />
                    <FeatureCard title="All Your Notes at One Place" description="Access all your notes anytime, anywhere." />
                    <FeatureCard title="Set Reminders" description="Never miss important tasks or deadlines." />
                </div>
            </div>
            <button className="btn btn-primary btn-lg">Get Started</button>

        </div>
    );
}

export default Intro;
