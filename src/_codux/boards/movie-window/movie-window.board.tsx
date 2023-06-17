import { createBoard } from '@wixc3/react-board';
import { Movie_window } from '../../../components/movie-window/movie-window';
import React from 'react';

export default createBoard({
    name: 'Movie_window',
    Board: () => <Movie_window />
});
