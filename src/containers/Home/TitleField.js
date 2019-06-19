import React from 'react';
import TitleList from './TitleList';

const tdetails = [
    {
        id: 0,
        title: 'Continue Watching',
        urlString: 'genre/27/movies?sort_by=popularity.desc&page=1'        
    },
    {
        id: 1,
        title: 'Originals Contents',
        urlString: 'genre/878/movies?sort_by=popularity.desc&page=1'        
    },
    {
        id: 2,
        title: 'Trending Now',
        urlString: 'genre/35/movies?sort_by=popularity.desc&page=1'        
    }
]

const TitleField = () => {
    return (
        <div>
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