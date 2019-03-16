import React from "react"
import onClickOutside from "react-onclickoutside"

import { Link } from "gatsby"

import styles from "./styles.module.scss"

const Navigation = props => {
    const { isNavOpen, onNavClose } = props

    Navigation.handleClickOutside = () => onNavClose()

    return (
        <div
            className={`${styles.navigation} ${
                isNavOpen ? styles.navigationVisible : ""
            }`}
        >
            <div className={styles.inner}>
                <nav className={styles.list}>
                    <Link
                        activeClassName={styles.listItemActive}
                        className={styles.listItem}
                        to="/"
                    >
                        Home
                    </Link>

                    <Link
                        activeClassName={styles.listItemActive}
                        className={styles.listItem}
                        to="/portfolio"
                    >
                        Portfolio
                    </Link>

                    <Link
                        activeClassName={styles.listItemActive}
                        className={styles.listItem}
                        to="/contact"
                    >
                        Contact
                    </Link>
                </nav>

                <div className={styles.footer}>
                    <div className={styles.socialLinks}>
                        <a
                            href="https://www.linkedin.com/in/adhammoussa"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin" />
                        </a>

                        <a
                            href="https://github.com/AdhamMoussa"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github" />
                        </a>

                        <a
                            href="https://codepen.io/AdhamMoussa/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-codepen" />
                        </a>

                        <a
                            href="https://twitter.com/AdM_ssa"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                    </div>

                    <div className={styles.copyright}>
                        &copy; Adham Moussa. {new Date().getFullYear()}
                    </div>
                </div>
            </div>

            <div className={styles.closeIcon} onClick={onNavClose}>
                <div className={styles.firstLine} />
                <div className={styles.secondLine} />
            </div>
        </div>
    )
}

const clickOutsideConfig = {
    handleClickOutside: () => Navigation.handleClickOutside,
}

export default onClickOutside(Navigation, clickOutsideConfig)
