import { useState, useEffect } from "react";

import { getUser } from "../../services/api";

import styles from "./index.module.css";

import { BiSearchAlt2 } from "react-icons/bi";

const Header = () => {
    const [searchValue, setSearchValue] = useState("");

    const onChangeSearchValue = (event: any) => {
        setSearchValue(event.currentTarget.value);
    };

    useEffect(() => {
        const getData = async () => {
            const data = await getUser(searchValue);

            if (data !== undefined) {
                console.log(data);
            }
        };
        if (searchValue !== "") {
            getData();
        }
    }, [searchValue]);

    return (
        <header className={styles.container}>
            <div className={styles.logoContainer}>
                <h1>
                    Dev<span>Book</span>
                </h1>
            </div>
            <div className={styles.searchBoxContainer}>
                <input
                    type="text"
                    placeholder="Search for user"
                    value={searchValue}
                    onChange={onChangeSearchValue}
                />
                <BiSearchAlt2 className={styles.searchIcon} />
            </div>
        </header>
    );
};

export default Header;
