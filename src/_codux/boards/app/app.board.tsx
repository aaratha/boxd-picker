import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import React from 'react';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 942,
        windowHeight: 640,
        canvasWidth: 1000,
    },
});
