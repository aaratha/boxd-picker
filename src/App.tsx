import logo from './assets/logo.svg';
import styles from './App.module.scss';
import React, { useState, useEffect } from 'react';
import { Movie_window } from './components/movie-window/movie-window';
import { Info_window } from './components/info-window/info-window';
import * as puppeteer from 'puppeteer';
import { AI } from './components/ai/ai';

function App() {
    /*
    const [info, setInfo] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('/getInfo');
            if (!response.ok) {
                throw new Error('Failed to fetch data from the server');
            }
            const data = await response.json();
            setInfo(data);
        } catch (error) {
            console.error(error);
        }
    };
    */
    /*
    const puppeteer = require('puppeteer');
    
    const scrapeWebsite = async () => {
        // Launch a headless Chrome browser
        const browser = await puppeteer.launch();

        // Open a new page
        const page = await browser.newPage();

        // Navigate to the URL
        await page.goto('https://example.com');

        // Wait for the page to load
        await page.waitForSelector('#ai-response');

        // Get the content of the ai-response div
        const aiResponse = await page.$eval('#ai-response', (element: { textContent: any; }) => element.textContent);

        // Close the browser
        await browser.close();

        return aiResponse;
    };

    scrapeWebsite().then((aiResponse) => {
        console.log(aiResponse);
    }).catch((error) => {
        console.error(error);
    });
    */

    return (
        <div className={styles.App}>
            {/*
            <div>
                {Object.entries(info).map(([key, value]) => (
                    <div key={key}>
                    <p>Key: {key}</p>
                    <p>Value: {value}</p>
                    </div>
                ))}
            </div>
        */}

            <header className={styles['App-header']}>
                <h1 className={styles['App-header']}>
                    Boxd Picker
                    <div className={styles.input_field}>
                        <input className={styles.bar} />
                        <button className={styles.button}>Submit</button>
                    </div>
                </h1>
            </header>
            <div className={styles.main_window}>
                <div className={styles.window2}>
                    <Info_window />
                    <AI className={styles.AI_window} />
                </div>
                <Movie_window className={styles.movie_window} />
            </div>
        </div>
    );
}

export default App;
