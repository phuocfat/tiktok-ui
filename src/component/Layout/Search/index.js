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

   const [loading, setLoading] = useState(false);
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
      if (!searchResult.trim()) {
         setReSults([]);
         return;
      }
      setLoading(true);
      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchResult)}&type=less`)
         .then((res) => res.json())
         .then((res) => {
            setReSults(res.data);
            setLoading(false);
         })
         .catch(() => {
            setLoading(false);
         });
   }, [searchResult]);

   return (
      <TippyHeadless
         interactive
         visible={showResult && results.length > 0}
         render={(attts) => (
            <div className={cx('search-results')} tabIndex={-1} {...attts}>
               <PopperWrapper>
                  <h4 className={cx('search-title')}>Accounts</h4>
                  {results.map((result) => (
                     <AccountItem key={result.id} data={result} />
                  ))}
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
            {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
            {!!searchResult && !loading && (
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
