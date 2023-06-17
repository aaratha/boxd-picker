import { createBoard } from '@wixc3/react-board';
import { AI } from '../../../components/ai/ai';

export default createBoard({
    name: 'AI',
    Board: () => <AI />
});
