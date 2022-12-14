import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Image.module.scss';
import images from '~/assets/images/images';

const Image = forwardRef(({ className, src, alt, fallaback: customFallback = images.noImage, ...props }, ref) => {
   const [fallaback, setFallback] = useState('');

   const handleError = () => {
      setFallback(customFallback);
   };

   return (
      <img
         className={classNames(styles.wrapper, className)}
         src={fallaback || src}
         alt={alt}
         ref={ref}
         {...props}
         onError={handleError}
      />
   );
});
Image.propTypes = {
   className: PropTypes.string,
   src: PropTypes.string,
   alt: PropTypes.string,
   fallaback: PropTypes.string,
};
export default Image;
