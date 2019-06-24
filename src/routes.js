import Home from 'views/Home';
import Dramas from 'views/Dramas';
import Entertainment from 'views/Entertainment';
import News from 'views/News';
import Films from 'views/Films';
import Originals from 'views/Originals';
import RecentlyAdded from 'views/RecentlyAdded';
import MovieDetail from 'views/MovieDetail';

const dashboardRoutes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path:"/movie/:id",
        name: "MovieDetail",
        component: MovieDetail
    },
    {
        path: "/tv-programmes/dramas",
        name: "Dramas",
        component: Dramas
    },
    {
        path: "/tv-programmes/entertainment",
        name: "Entertainment",
        component: Entertainment
    },
    {
        path: "/tv-programmes/news",
        name: "News",
        component: News
    },
    {
        path: "/films",
        name: "Films",
        component: Films
    },
    {
        path: "/originals",
        name: "Originals",
        component: Originals
    },
    {
        path: "/recently-added",
        name: "Recently Added",
        component: RecentlyAdded
    }
];

export default dashboardRoutes;