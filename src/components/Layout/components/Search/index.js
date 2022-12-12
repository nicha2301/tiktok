import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import styles from './Search.module.scss';

import AccountItem from "~/components/AccountItem";
import { Wrapper as PopperWrapper } from "~/components/Popper";
// import Tippy from '@tippyjs/react';
import Tippy from '@tippyjs/react/headless';
import { ClearIcon, SearchIcon, SpinnerIcon } from "~/components/Icon";
import { useDebounce } from "~/Hooks";
import * as searchService from "~/apiService/searchService";

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)
    const debounced = useDebounce(searchValue, 750)

    const inputRef = useRef()



    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([])
            return;
        }
        setLoading(true)

        const fetchApi = async () => {
            setLoading(true)

            const res = await searchService.search(debounced)
            setSearchResult(res)

            setLoading(false)
        }

        fetchApi();

    }, [debounced])

    const handleClearInput = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handlespace = (e) => {
        if (e.target.value[0] !== ' ') {
            setSearchValue(e.target.value);
        }
    };

    return (

        <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        {searchResult.map(result => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={e => handlespace(e)}
                    onFocus={() => setShowResult(true)}
                />

                <button
                    className={cx('clear-btn')}
                    onClick={handleClearInput}
                >
                    {!!searchValue && !loading && <ClearIcon />}
                </button>
                {loading && <SpinnerIcon classname={cx('loading')} />}
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;