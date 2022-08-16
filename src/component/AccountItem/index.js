import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6ba392942170e9eec69cb68b1013e3e1~c5_300x300.webp?x-expires=1660633200&x-signature=PBXzTlNTbwz%2BXEMfOBJYvKw2feM%3D"
         />
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>quanh__102</span>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <p className={cx('username')}>Quanh🍃</p>
         </div>
      </div>
   );
}
export default AccountItem;
