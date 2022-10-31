import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import configRoutes from '~/config/routes';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faPlus,
   faEllipsisVertical,
   faLanguage,
   faCircleQuestion,
   faKeyboard,
   faUser,
   faCoins,
   faGear,
   faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images/images';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import { InBoxIcon, MessageIcon } from '~/component/Icon';
import Image from '~/component/Image';
import Search from '~/layouts/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faLanguage} />,
      title: 'Enghlish',
      children: {
         title: 'Languages',
         data: [
            {
               code: 'vi',
               title: 'Vietnamese',
            },
            {
               code: 'en',
               title: 'Enghlish',
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
   },
];
const userMenu = [
   {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/viewprofile',
   },
   {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
   },
   {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/setting',
   },
   ...MENU_ITEMS,
   {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
   },
];
function Header() {
   const currentUser = true;
   const handleOnChange = (menuItem) => {
      console.log(menuItem);
   };
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <Link to={configRoutes.home} className={cx('logo-link')}>
               <img className={cx('logo')} src={images.logo} />
            </Link>
            <Search />
            <div className={cx('actions')}>
               {currentUser ? (
                  <>
                     <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                     </Button>
                     <Tippy content="Messages" placement="bottom">
                        <button className={cx('action-btn')}>
                           <MessageIcon />
                        </button>
                     </Tippy>
                     <Tippy content="InBox" placement="bottom">
                        <button className={cx('action-btn')}>
                           <InBoxIcon />
                           <sup className={cx('numbers-inbox')}>1</sup>
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                     </Button>
                     <Button primary>Login</Button>
                  </>
               )}
               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleOnChange}>
                  {currentUser ? (
                     <Image
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f0a910d5bb95287c087454681e4db70f~c5_100x100.jpeg?x-expires=1662624000&x-signature=413pCy154cqlKp0aqXqbfR2y%2FnA%3D"
                        alt="NguyenVanA"
                        className={cx('user-avatar')}
                     />
                  ) : (
                     <button className={cx('more-icon')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}
export default Header;
