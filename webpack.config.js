import config from './config.js';
let entry = {};
config.javascript.entry.map(item => {
    entry = { ...entry, [item]: `${config.dir.srcDir}${config.dir.jsDir}${item}` };
});

module.exports = {
    devtool: 'source-map',
    entry: entry,
    output: {
        path: config.dir.distDir + config.dir.jsDir,
        filename: '[name]',
    },
    watch: true,
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: config.javascript.babel
        }]
    }
};
