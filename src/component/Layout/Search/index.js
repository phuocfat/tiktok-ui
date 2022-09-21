import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import { SearchIcon } from '~/component/Icon';

const cx = classNames.bind(styles);

function Search() {
   const [results, setReSults] = useState([]);

   const [searchResult, setSearchReSult] = useState('');

   const [showResult, setShowResult] = useState(true);

   const inputRef = useRef();

   const handleClear = () => {
      setSearchReSult('');
      setReSults([]);
      inputRef.current.focus();
   };

   const handleHideResult = () => {
      setShowResult(false);
   };
   useEffect(() => {
      setReSults([1, 2, 4]);
   }, [showResult]);

   return (
      <TippyHeadless
         interactive
         visible={showResult && results.length > 0}
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
         onClickOutside={handleHideResult}
      >
         <div className={cx('search')}>
            <input
               ref={inputRef}
               value={searchResult}
               type="text"
               placeholder="Search accounts and videos"
               onChange={(e) => setSearchReSult(e.target.value)}
               onFocus={() => setShowResult(true)}
            />
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            {!!searchResult && (
               <button className={cx('clear')} onClick={handleClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}
            <button className={cx('search-btn')}>
               <SearchIcon />
            </button>
         </div>
      </TippyHeadless>
   );
}
export default Search;
