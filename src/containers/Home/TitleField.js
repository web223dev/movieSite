import React from 'react';
import TitleList from './TitleList';

const tdetails = [    
    {
        id: 0,
        title: 'Continue Watching',
        urlString: 'now_playing'
    },
    {
        id: 1,
        title: 'Originals Contents',
        urlString: 'popular'        
    },
    {
        id: 2,
        title: 'Trending Now',
        urlString: 'top_rated'        
    }
]

const TitleField = () => {
    return (
        <div className="collections-container home"> 
            <TitleList title="Search Result" urlString="" />           
            {
                tdetails.map((tdetail) =>
                    <TitleList 
                        title={tdetail.title}
                        urlString={tdetail.urlString}
                        sectionId={tdetail.id}
                        key={tdetail.id}
                    />
                )
            }
        </div>
    );
};

export default TitleField;