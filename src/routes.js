import Home from 'views/Home';
import Category from 'views/Category';
import Detail from 'views/Detail';
import Watch from 'views/Watch';

const dashboardRoutes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/category",
        name: "Category",
        component: Category
    },
    {
        path: "/detail",
        name: "Detail",
        component: Detail
    },
    {
        path: "/watch",
        name: "Watch",
        component: Watch
    }
];

export default dashboardRoutes;