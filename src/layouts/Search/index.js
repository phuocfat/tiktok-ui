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
import { useDebounce } from '~/hooks';

import * as searchService from '~/services/search';
const cx = classNames.bind(styles);

function Search() {
   const [results, setReSults] = useState([]);

   const [searchResult, setSearchReSult] = useState('');

   const [showResult, setShowResult] = useState(true);

   const [loading, setLoading] = useState(false);

   const debounced = useDebounce(searchResult, 500);
   const inputRef = useRef();

   const handleClear = () => {
      setSearchReSult('');
      setReSults([]);
      inputRef.current.focus();
   };

   const handleHideResult = () => {
      setShowResult(false);
   };

   const handleChange = (e) => {
      const searchValue = e.target.value;
      if (!searchValue.startsWith(' ')) {
         setSearchReSult(searchValue);
      }
   };
   useEffect(() => {
      if (!debounced.trim()) {
         setReSults([]);
         return;
      }
      const fetchApi = async () => {
         setLoading(true);
         const res = await searchService.search(debounced);
         setReSults(res);
         setLoading(false);
      };
      fetchApi();
   }, [debounced]);

   return (
      // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.

      <div>
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
                  onChange={handleChange}
                  onFocus={() => setShowResult(true)}
               />
               {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
               {!!searchResult && !loading && (
                  <button className={cx('clear')} onClick={handleClear}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
               )}
               <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                  <SearchIcon />
               </button>
            </div>
         </TippyHeadless>
      </div>
   );
}
export default Search;
