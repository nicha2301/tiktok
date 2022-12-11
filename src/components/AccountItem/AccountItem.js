import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Images from "../Images";
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Images
                className={cx('avatar')}
                src={data.avatar}
                alt={data.full_name}
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('usernames')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;