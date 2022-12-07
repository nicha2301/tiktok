import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/dc8a50da47b802687a9e7b1f11c126ff~c5_300x300.webp?x-expires=1670569200&x-signature=2GoX3QOCaJO%2F6WKj1E9nlNL%2BIPQ%3D"
                alt="Hoaa"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('usernames')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;