import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faLanguage } from "@fortawesome/free-solid-svg-icons";

import images from "~/assets/images";
import styles from './Header.module.scss';
import { Menu, Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import { faCircleQuestion, faKeyboard, faMoon } from "@fortawesome/free-regular-svg-icons";


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts'
    },
    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Dark mode'
    }
]

function Header() {
    const [show, setShow] = useState([])

    useEffect(() => {
        setTimeout(() => (
            setShow([1, 1])
        ))
    })

    //Handle menu
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //change language
                break
            default:
        }
    }

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
                    <Button text> Upload</Button>
                    <Button primary > Log in</Button>
                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon className={cx('more-icon')} icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;