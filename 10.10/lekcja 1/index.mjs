// import {Readable} from 'stream'

// function* randNumGen() {
//     for (let i = 0; i < 20; i++) {
//         const randNum = Math.floor(Math.random() * (2137 - (-420)) + (-420));
//         yield randNum;
//     }
// }
// const readable = Readable.from(randNumGen())

// Readable.on('data', (chunk) => {
//     console.log(chunk);
// });
import { Readable } from 'stream';

function* randNumGen() {
    for (let i = 0; i < 20; i++) {
        const randNum = Math.floor(Math.random() * (2137 - (-420)) + (-420));
        yield randNum;
    }
}
const readable = Readable.from(randNumGen());

readable.on('data', (chunk) => {
    console.log(chunk);
});
