import {Routes, Route, Redirect} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { useContext } from 'react';
import { Context } from '..';

const AppRouter = () => {
  const {developer} = useContext(Context);
  console.log(developer);
  return (
    <Routes>
      {developer.isAuth && (privateRoutes.map(({path, Component}) => 
          <Route key={path} path={path} element={Component}  />
      ))};
      {publicRoutes.map(({path, Component}) => 
        <Route key={path} path={path} element={Component}  />
      )}
    </Routes>
  );
}

export default AppRouter;