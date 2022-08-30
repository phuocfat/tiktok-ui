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
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images/images';
import Tippy from '@tippyjs/react/headless';
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
               children: {
                  title: 'Languages',
                  data: [
                     {
                        code: 'vi',
                        title: 'Vietnamese1',
                     },
                     {
                        code: 'en',
                        title: 'Enghlish1',
                     },
                  ],
               },
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
function Header() {
   const [results, setReSults] = useState([]);
   // useEffect(() => {
   //    setReSults([1, 2, 4]);
   // }, []);
   const handleOnChange = (menuItem) => {
      console.log(menuItem);
   };
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <img className={cx('logo')} src={images.logo} />

            <Tippy
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
            </Tippy>
            <div className={cx('actions')}>
               <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  Upload
               </Button>
               <Button primary>Login</Button>
               <Menu items={MENU_ITEMS} onChange={handleOnChange}>
                  <button className={cx('more-icon')}>
                     <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
               </Menu>
            </div>
         </div>
      </header>
   );
}
export default Header;
