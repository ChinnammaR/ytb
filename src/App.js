
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/redux-store/appStore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainConatiner from './components/MainConatiner';
import Header from './components/Header';
import WatchPage from './components/WatchPage';

function App() {

console.log()
  
  const appRouter=createBrowserRouter([{

    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainConatiner/>
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ]

  }]);

  return (

  <Provider store={appStore}>
      <Header/>
      <RouterProvider router={appRouter} />
      </Provider>
  
  );
}

export default App;
