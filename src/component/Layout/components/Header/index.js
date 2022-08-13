import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function Header() {
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <img className={cx('logo')} src={images.logo} />
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
            <div className={cx('actions')}></div>
         </div>
      </header>
   );
}
export default Header;
