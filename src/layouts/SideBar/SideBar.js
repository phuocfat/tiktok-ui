import classNames from 'classnames/bind';
import Menu, { MenuItem } from './Menu';
import styles from './SideBar.module.scss';
import config from '~/config';
import {
   HomeIcon,
   HomeActiveIcon,
   FollowingIcon,
   FollowingActiveIcon,
   LiveIcon,
   LiveActiveIcon,
} from '~/component/Icon';
const cx = classNames.bind(styles);

function SideBar() {
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem to={config.routes.home} title="For You" icon={<HomeIcon />} iconActive={<HomeActiveIcon />} />
            <MenuItem
               to={config.routes.following}
               title="Following"
               icon={<FollowingIcon />}
               iconActive={<FollowingActiveIcon />}
            />
            <MenuItem to={config.routes.live} title="LIVE" icon={<LiveIcon />} iconActive={<LiveActiveIcon />} />
         </Menu>
      </aside>
   );
}
export default SideBar;
