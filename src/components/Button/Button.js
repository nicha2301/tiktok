import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

function Button({ to, href, primary, outline, small, text, large, thin, disabled, rounded,upload, children, ...passProps }) {
    let Comp = 'button';

    const props = {
        ...passProps
    }

    if (disabled) {
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        })
    }

    if (to) {
        props.to = to;
        Comp = Link
    } else if (href) {
        props.href = href;
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        thin,
        upload,
    })
    return (
        <Comp
            className={classes}
            {...props}
        >
            <span>
                {children}
            </span>
        </Comp>
    )
}

export default Button;