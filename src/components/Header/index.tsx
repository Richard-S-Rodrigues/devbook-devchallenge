import styles from "./index.module.css";

import { BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.logoContainer}>
                <h1>
                    Dev<span>Book</span>
                </h1>
            </div>
            <div className={styles.searchBoxContainer}>
                <input type="text" placeholder="Search for user" />
                <BiSearchAlt2 className={styles.searchIcon} />
            </div>
        </header>
    );
};

export default Header;
