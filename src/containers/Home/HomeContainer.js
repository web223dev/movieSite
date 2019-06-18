import React, { Component } from 'react';
import TitleList from './TitleList';

const tdetails = [
    {
        title: 'Continue Watching',
        url: 'genre/27/movies?sort_by=popularity.desc&page=1'        
    },
    {
        title: 'Originals Contents',
        url: 'genre/878/movies?sort_by=popularity.desc&page=1'        
    },
    {
        title: 'Trending Now',
        url: 'genre/35/movies?sort_by=popularity.desc&page=1'        
    }
]

class HomeContainer extends Component {
    render() {
        return (
            <div>
                {/* {
                    tdetails.map((tdetail, i) =>
                        <TitleList 
                            title={tdetail.title}
                            url={tdetail.url}
                            key={i}
                        />
                    )
                } */}
                <TitleList title="Continue Watching" url='genre/27/movies?sort_by=popularity.desc&page=1' />
                <TitleList title="Originals Contents" url='genre/878/movies?sort_by=popularity.desc&page=1' />
                <TitleList title="Trending Now" url='genre/35/movies?sort_by=popularity.desc&page=1' />
            </div>
        )
    }
}

export default HomeContainer;