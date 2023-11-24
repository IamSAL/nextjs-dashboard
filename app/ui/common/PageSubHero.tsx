import React from 'react';

interface PageHeroProps {
    backgroundImage?: string;
    title?: string;
    subtitle?: string;
}

const PageSubHero: React.FC<PageHeroProps> = ({
    backgroundImage = '/images/cover-bg.jpg',
    title = 'Page title',
    subtitle = 'page description goes here',
}) => {
    return (
        <div className="bg-gray-100">
            <section className="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-16 flex items-center ">
                <div className="h-full w-full absolute top-0 left-0 z-0">
                    <img src={backgroundImage} className="w-full h-full object-cover opacity-20" alt="Background" />
                </div>
                <div className="w-full relative  z-10 lg:mt-16 flex justify-center items-center py-4">
                    <div className="text-center md:mt-12">
                        <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">{title}</h1>
                        <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">{subtitle}</p>
                        {/* Add a button or link for booking appointment if needed */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PageSubHero;
