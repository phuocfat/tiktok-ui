const { useState, useEffect } = require('react');

function useDebounce(value, delay) {
   const [debouncedValue, setDeboundedValue] = useState(value);

   useEffect(() => {
      const handler = setTimeout(() => setDeboundedValue(value), delay);
      return () => {
         clearTimeout(handler);
      };
   }, [value]);
   return debouncedValue;
}
export default useDebounce;
