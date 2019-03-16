import React, { useState } from "react"

import Navigation from "../Navigation"
import Seo from "../Seo"

import styles from "./styles.module.scss"

const Header = () => {
    const [isNavOpen, setNavState] = useState(false)

    return (
        <>
            <Seo />
            <header className={styles.header}>
                <div className={styles.wrapper}>
                    <div className={styles.headerInner}>
                        <div className={styles.logo}>
                            <h1>AM</h1>
                        </div>
                        <div className={styles.menuIconContainer}
                            onClick={() => setNavState(true)}
                        >
                            <span>Menu</span>
                            <div className={styles.menuIcon}>
                                <div />
                                <div />
                                <div />
                            </div>
                        </div>
                    </div>
                </div>

                <Navigation isNavOpen={isNavOpen}
                    onNavClose={() => setNavState(false)}
                />
            </header>
        </>
    )
}

export default Header
