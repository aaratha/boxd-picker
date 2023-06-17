import styles from './movie-window.module.scss';
import classNames from 'classnames';
import React from 'react';
import img from './19573-the-hourglass-sanatorium-0-500-0-750-crop.jpg'

export interface Movie_windowProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Movie_window = ({ className }: Movie_windowProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src={img}
                className={styles.images}
            />
            <img
                src={img}
                className={styles.images}
            />
            <img
                src={img}
                className={styles.images}
            />
        </div>
    );
};
