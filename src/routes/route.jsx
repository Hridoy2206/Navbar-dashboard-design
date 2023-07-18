import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../component/Home";
import Dashboard from "../component/Dashboard";
import AllApps from "../pages/AllApps";
import Authentication from "../pages/Authentication";
import Build from "../pages/Build";
import Setting from "../pages/Setting";
import Stroage from "../pages/Stroage";
import Analytics from "../pages/Analytics";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                children: [
                    {
                        path: "all-apps",
                        element: <AllApps />
                    },
                    {
                        path: "settings",
                        element: <Setting />
                    },
                    {
                        path: "storage",
                        element: <Stroage />
                    },
                    {
                        path: "authentication",
                        element: <Authentication />
                    },
                    {
                        path: "analytics/:aID",
                        element: <Analytics />
                    },
                    {
                        path: "build/:bID",
                        element: <Build />
                    },
                ]
            },

        ]
    },
    // {
    //     path: "/dashboard",
    //     element: <Dashboard />,
    //     children: [
    //         {
    //             path: "all-apps",
    //             element: <AllApps />
    //         },
    //         {
    //             path: "settings",
    //             element: <Setting />
    //         },
    //         {
    //             path: "storage",
    //             element: <Stroage />
    //         },
    //         {
    //             path: "authentication",
    //             element: <Authentication />
    //         },
    //         {
    //             path: "analytics/:aID",
    //             element: <Analytics />
    //         },
    //         {
    //             path: "build/:bID",
    //             element: <Build />
    //         },
    //     ]
    // }
])