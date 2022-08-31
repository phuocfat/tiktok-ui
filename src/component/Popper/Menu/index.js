import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ items = [], children, onChange = defaultFn }) {
   const [history, setHistory] = useState([{ data: items }]);
   const current = history[history.length - 1];
   const renderItems = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children;
         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory((prev) => [...prev, item.children]);
                  } else {
                     onChange(item);
                  }
               }}
            />
         );
      });
   };
   return (
      <Tippy
         placement="bottom-end"
         interactive
         offset={[12, 12]}
         delay={[0, 750]}
         render={(attts) => (
            <div className={cx('menu-list')} tabIndex={-1} {...attts}>
               <PopperWrapper className={cx('menu-popper')}>
                  {history.length > 1 && (
                     <Header
                        title={current.title}
                        onBack={() => setHistory((prev) => prev.slice(0, history.length - 1))}
                     />
                  )}
                  {renderItems()}
               </PopperWrapper>
            </div>
         )}
         onHide={() => setHistory((prev) => prev.slice(0, 1))}
      >
         {children}
      </Tippy>
   );
}
export default Menu;
