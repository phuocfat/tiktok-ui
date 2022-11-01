import { DefaultLayout, HeaderOnly } from '~/layouts';

import config from '~/config/index';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Search from '~/pages/Search';
import UpLoad from '~/pages/UpLoad';
import Profile from '~/pages/Profile';
const publicRoutes = [
   {
      path: config.routes.home,
      component: Home,
      layout: DefaultLayout,
   },
   {
      path: config.routes.following,
      component: Following,
      layout: DefaultLayout,
   },
   {
      path: config.routes.search,
      component: Search,
      layout: HeaderOnly,
   },
   {
      path: config.routes.profile,
      component: Profile,
      layout: DefaultLayout,
   },
   {
      path: config.routes.upload,
      component: UpLoad,
      layout: HeaderOnly,
   },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
