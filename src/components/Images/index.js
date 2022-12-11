import classNames from "classnames/bind";
import styles from './Image.module.scss';
import { forwardRef, useState } from 'react'
import images from '~/assets/images'



const Images = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('')

    const handleChange = () => {
        setFallback(images.noImage)
    }

    return <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        alt={alt}
        src={fallback || src}
        {...props}
        onError={handleChange}
    />;
})

export default Images;