import styles from './ai.module.scss';
import classNames from 'classnames';
import React from 'react';

export interface AIProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AI = ({ className }: AIProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1 className={styles.header}>AI Response:</h1>
        </div>
    );
};
