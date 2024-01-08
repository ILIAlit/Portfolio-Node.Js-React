import {Routes, Route, Navigate} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { useContext } from 'react';
import { Context } from '..';
import { HOME_ROUTE } from '../utils/consts';

const AppRouter = () => {
  const {admin} = useContext(Context);
  console.log(admin);
  return (
    <Routes>
      {admin._isAdmin && (privateRoutes.map(({path, Component}) => 
          <Route key={path} path={path} element={Component}  />
      ))};
      {publicRoutes.map(({path, Component}) => 
        <Route key={path} path={path} element={Component}  />
      )};
      <Route path='*' element={<Navigate to={HOME_ROUTE}/>}/>
    </Routes>
  );
}

export default AppRouter;