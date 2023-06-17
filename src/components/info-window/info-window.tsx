import styles from './info-window.module.scss';
import classNames from 'classnames';
import React from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

export interface Info_windowProps {
    className?: string;
}



const username = 'MEMBER_USERNAME';
const apiKey = 'YOUR_API_KEY';

const url = `https://api.letterboxd.com/api/v0/user/${username}/watchlist?api_key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

export const Info_window = ({ className }: Info_windowProps) => {
    return (
        <div className={classNames(styles.root, className, styles.windows)}>
            <h1 className={classNames(styles.root, styles.heading)}>The Hourglass Sanitorium</h1>
            <p>1973 ‘Sanatorium pod klepsydrą’ Directed by Wojciech Has</p>
            <p>
                A young man named Josef visits a dilapidated Sanatorium to see his father Jakob. On
                his arrival, a sinister doctor informs him that his father had stopped breathing but
                hasn’t died yet, perhaps due to Josef’s arrival which may have halted time in the
                sanatorium. Josef undertakes a strange journey through the many rooms of the
                sanatorium, each which conjures worlds composed of his memories, dreams and
                nightmares.
            </p>
        </div>
    );
};
