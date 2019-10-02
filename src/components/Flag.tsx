import React, { Component } from "react";
import styles from "./scss/Flag.scss";

import Switch from "../utility_components/Switch";
import KebabMenu from "../utility_components/KebabMenu";

interface Props {
    name: string;
}
interface State {

}

export default class Flag extends Component<Props, State> {
    state = {};

    render() {
        let { name } = this.props;
        return (
            <div className={styles.flagContainer}>
                <div className={styles.switchWrapper}>
                    <Switch className={styles.centerElement} />
                </div>
                <li key={name}>{name}</li>
                <div className={styles.kebabMenuWrapper}>
                    <KebabMenu className={styles.centerElement} />
                </div>
            </div>
        );
    }
}