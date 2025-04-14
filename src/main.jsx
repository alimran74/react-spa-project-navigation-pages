import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Mobiles from './components/Mobiles/Mobiles.jsx';
import Laptop from './components/Laptops/Laptop.jsx';
import Users from './components/Users/Users.jsx';
import Users2 from './components/Users2/Users2.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component:Root,
    children:[
      {index:true, Component:Home},
      {path: 'mobiles',Component:Mobiles},
      {path: 'laptops', Component:Laptop},
      {
        path: 'Users', 
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: 'Users2',
        element: <Suspense fallback={<span>Loading......</span>}>
          <Users2 userPromise={userPromise}></Users2>
        </Suspense>
      },
      {
        path: 'users/:userId',
        loader:({ params }) => 
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({params}) => 
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`) ,
        Component: PostDetail
      },
      {
        path: '*',
        element: <h3>Not Found: 404 status</h3>
      }
    ]
  },
  {
    path:'about',
    element: <div>about me here</div>
  },
  {
    path:'blogs',
    element: <div>All my blogs are here</div>
  },
  {
    path:'app',
    Component: App
  },
  {
    path:'app2',
    element:<App></App>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
