import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

function Button({
   to,
   href,
   primary = false,
   disabled = false,
   outline = false,
   rounded = false,
   text = false,
   small = false,
   large = false,
   leftIcon = false,
   rightIcon = false,
   className,
   passProps,
   onClick,
   children,
}) {
   let Comp = 'button';
   const props = {
      onClick,
      ...passProps,
   };

   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }
   if (disabled) {
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
         }
      });
   }
   const classes = cx('wrapper', {
      [className]: className,
      primary,
      disabled,
      outline,
      rounded,
      text,
      small,
      large,
      leftIcon,
      rightIcon,
   });
   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   );
}
export default Button;
