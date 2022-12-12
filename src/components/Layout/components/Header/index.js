import classNames from "classnames/bind";
import styles from './Header.module.scss';
import Tippy from '@tippyjs/react';
// import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon, } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import images from "~/assets/images";
import { Menu } from "~/components/Popper";
import Button from "~/components/Button";
import { FeedBackIcon, GetCoinIcon, KeyBoardIcon, LanguageIcon, LiveIcon, LogOutIcon, MessageIcon, MoonIcon, PaperPlaneIcon, PersonalIcon, SettingIcon } from "~/components/Icon";
import Images from "~/components/Images";
import Search from "../Search";



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

                {/* search */}
                <Search />

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
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f019e41b0ca887f169230c977d8f6482~c5_720x720.jpeg?x-expires=1671001200&x-signature=fAyxm2RgDPf3g8DGOnVosW%2FH%2FnE%3D"
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