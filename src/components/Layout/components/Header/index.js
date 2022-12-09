import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
// import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass, faEllipsisVertical, faLanguage, faPlus, faCoins, faGear, faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import images from "~/assets/images";
import styles from './Header.module.scss';
import { Menu, Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import { faCircleQuestion, faKeyboard, faMessage, faMoon, faPaperPlane, faUser } from "@fortawesome/free-regular-svg-icons";
import { FeedBackIcon, GetCoinIcon, KeyBoardIcon, LanguageIcon, LiveIcon, LogOutIcon, MessageIcon, MoonIcon, PaperPlaneIcon, PersonalIcon, PlusIcon, SearchIcon, SettingIcon } from "~/components/Icon";
import Images from "~/components/Images";


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
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
        icon: <FeedBackIcon />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <KeyBoardIcon />,
        title: 'Keyboard shortcuts'
    },
    {
        icon: <MoonIcon />,
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

    //User

    const currentUser = true

    const userMenu = [
        {
            icon: <PersonalIcon />,
            title: 'View profile',
            to: '/user'
        },
        {
            icon: <GetCoinIcon />,
            title: 'Get Coins',
            to: '/getcoin'
        },
        {
            icon: <LiveIcon />,
            title: 'Live Studio',
            to: '/getcoin'
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/setting'
        },
        ...MENU_ITEMS,
        {
            icon: <LogOutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]

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
                            <SearchIcon />
                        </button>
                    </div>
                </Tippy>

                <div className={cx('actions')}>
                    <Button upload thin >
                        <FontAwesomeIcon className={cx('action-upload')} icon={faPlus} />
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <PaperPlaneIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary > Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Images
                                className={cx('user-avatar')}
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/e59f8ba066516faafe8493daa00b6090.jpeg?x-expires=1670731200&x-signature=%2Foze%2Fp4k41lSBgAMjVGrFS17dRk%3D"
                                alt="Chau Annh"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon className={cx('more-icon')} icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div >
        </header >
    );
}

export default Header;