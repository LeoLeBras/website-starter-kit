import config from './config.js';
import path from 'path';

let entry = {};
config.javascript.entry.map(item => {
    entry = { ...entry, [item]: `${config.dir.srcDir}${config.dir.jsDir}${item}` };
});

export default {
    devtool: 'source-map',
    entry: entry,
    output: {
        path: config.dir.distDir + config.dir.jsDir,
        filename: '[name]'
    },
    resolve: {
        extensions: ['', '.js'],
        modulesDirectories: [
            'node_modules',
            'src/js/',
            'src/js/vendors',
            'src/js/utils'
        ]
    },
    watch: true,
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: config.javascript.babel,
            exclude: [
                path.resolve(__dirname, 'node_modules/'),
                path.resolve(__dirname, 'src/js/vendors/')
            ]
        }]
    }
};
