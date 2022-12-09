import classNames from "classnames/bind";
import styles from "./Menu.module.scss"

import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from "~/components/Popper";
import Header from "./Header";
import MenuItem from "./MenuItem";
import { useState } from "react";

const cx = classNames.bind(styles)

const defaultFn = () => { }

function Menu({ children, items, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children

            return (
                < MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory(prev => [...prev, item.children])
                        } else {
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }

    return (
        <Tippy
            interactive
            // visible
            offset={[14, 8]}
            delay={[0, 600]}
            placement="bottom-end"
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-container')}>
                        {history.length > 1 && <Header title='Language' onBack={() => {
                            console.log(setHistory(prev => prev.slice(0, history.length - 1)));
                        }} />}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}

            onHide={() => setHistory(prev => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;