import { createBoard } from '@wixc3/react-board';
import { Info_window } from '../../../components/info-window/info-window';
import React from 'react';

export default createBoard({
    name: 'Info_window',
    Board: () => <Info_window />
});
