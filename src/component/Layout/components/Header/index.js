import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faMagnifyingGlass,
   faSpinner,
   faCircleXmark,
   faPlus,
   faEllipsisVertical,
   faLanguage,
   faCircleQuestion,
   faKeyboard,
   faCloudUpload,
   faUser,
   faCoins,
   faGear,
   faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import TippyHeadless from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';

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
   const [results, setReSults] = useState([]);
   // useEffect(() => {
   //    setReSults([1, 2, 4]);
   // }, []);

   const currentUser = true;
   const handleOnChange = (menuItem) => {
      console.log(menuItem);
   };
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <img className={cx('logo')} src={images.logo} />

            <TippyHeadless
               interactive
               visible={results.length > 0}
               render={(attts) => (
                  <div className={cx('search-results')} tabIndex={-1} {...attts}>
                     <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />

                        <AccountItem />

                        <AccountItem />

                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input type="text" placeholder="Search accounts and videos" />
                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                  <button className={cx('clear')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </TippyHeadless>
            <div className={cx('actions')}>
               {currentUser ? (
                  <Tippy content="Upload video" placement="bottom" trigger="click">
                     <button className={cx('action-btn')}>
                        <FontAwesomeIcon icon={faCloudUpload} />
                     </button>
                  </Tippy>
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
                     <img
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/eb05d659d29530f9093586872cdf8c50~c5_100x100.jpeg?x-expires=1662087600&x-signature=AEUj4DSXuaGQk%2FuomcnMxDpeNaA%3D"
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
