import * as path from 'path'

export default {
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, './src') },
            { find: '@blackjack', replacement: path.resolve(__dirname, './src/blackjack') },
        ]
    }
}

