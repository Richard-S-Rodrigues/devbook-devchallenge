import Header from "../../components/Header";
import Users from "../Users";

import Octocat from "../../assets/octocat.png";

import styles from "./index.module.css";

const Home = () => {
    return (
        <>
            <Header />

            <div className={styles.mainContainer}>
                <h1>See the stats from Github users</h1>
                <img src={Octocat} alt="Octocat" />
            </div>

            <>
                <Users />
            </>
        </>
    );
};

export default Home;
