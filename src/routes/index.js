import { DefaultLayout, HeaderOnly } from '~/component/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Search from '~/pages/Search';
import UpLoad from '~/pages/UpLoad';

export const publicRoute = [
   {
      path: '/',
      component: Home,
      layout: DefaultLayout,
   },
   {
      path: '/following',
      component: Following,
      layout: DefaultLayout,
   },
   {
      path: '/search',
      component: Search,
      layout: HeaderOnly,
   },
   {
      path: '/upload',
      component: UpLoad,
      layout: HeaderOnly,
   },
];
