import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import images from "~/assets/images";
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";


const cx = classNames.bind(styles);

function Header() {
    const [show, setShow] = useState([])

    useEffect(() => {
        setTimeout(() => (
            setShow([1, 1])
        ), 1000)
    })
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok"></img>

                <Tippy
                    interactive
                    visible={show.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>
                                    Accounts
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />

                        <button className={cx('clear-btn')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button>asd</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;