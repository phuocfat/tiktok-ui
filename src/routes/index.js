import { DefaultLayout, HeaderOnly } from '~/component/Layout';

import configRoutes from '~/config/routes';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Search from '~/pages/Search';
import UpLoad from '~/pages/UpLoad';
import Profile from '~/pages/Profile';
export const publicRoute = [
   {
      path: configRoutes.home,
      component: Home,
      layout: DefaultLayout,
   },
   {
      path: configRoutes.following,
      component: Following,
      layout: DefaultLayout,
   },
   {
      path: configRoutes.search,
      component: Search,
      layout: HeaderOnly,
   },
   {
      path: configRoutes.profile,
      component: Profile,
      layout: DefaultLayout,
   },
   {
      path: configRoutes.upload,
      component: UpLoad,
      layout: HeaderOnly,
   },
];
