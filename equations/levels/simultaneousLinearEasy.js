// levels/simultaneousLinearEasy.js
import { BaseLevel } from './BaseLevel.js';

const Q = (eq1, eq2, x, y) => ({
    problem: [eq1, eq2],
    inputs: { vars: ['x', 'y'] },
    answer: { x, y }
});

export default new BaseLevel(
    'simultaneousLinearEasy',
    'Simultaneous Linear (Easy)',
    [
        Q('x + y = 7',  'x - y = 1',   '4', '3'),
        Q('x + y = 10', 'x - y = 4',   '7', '3'),
        Q('x + y = 5',  'x - y = 3',   '4', '1'),
        Q('x + y = 9',  'x - y = 1',   '5', '4'),
        Q('x + y = 6',  'x - y = 2',   '4', '2'),
        Q('x + y = 12', 'x - y = 2',   '7', '5'),
        Q('x + y = 8',  '2x + y = 11', '3', '5'),
        Q('x + y = 11', '2x + y = 15', '4', '7'),
        Q('x + 2y = 10','x - y = 1',   '4', '3'),
        Q('2x + y = 9', 'x - y = 0',   '3', '3'),
        Q('x + y = 4',  'x - y = -2',  '1', '3'),
        Q('x + y = 3',  '2x - y = 0',  '1', '2'),
        Q('x + y = 13', 'x - y = 5',   '9', '4'),
        Q('x + y = 7',  '2x + 3y = 17','4', '3'),
        Q('x + y = 5',  '3x + y = 11', '3', '2'),
        Q('x - y = 1',  '2x + y = 11', '4', '3'),
        Q('x + y = 6',  '2x - y = 6',  '4', '2'),
        Q('x + y = 8',  'x - 2y = -1', '5', '3'),
        Q('2x + y = 7', 'x + y = 5',   '2', '3'),
        Q('3x + y = 10','x + y = 4',   '3', '1'),
    ]
);
