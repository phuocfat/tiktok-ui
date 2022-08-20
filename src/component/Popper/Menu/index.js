import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
   const renderItems = () => {
      return items.map((item, index) => <MenuItem key={index} data={item}></MenuItem>);
   };
   return (
      <Tippy
         placement="bottom-end"
         delay={[0, 750]}
         interactive
         render={(attts) => (
            <div className={cx('menu-list')} tabIndex={-1} {...attts}>
               <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
            </div>
         )}
      >
         {children}
      </Tippy>
   );
}
export default Menu;
