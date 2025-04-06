export default {
    presets: [
        "@babel/preset-env",
        "@babel/preset-typescript",
        {
            targets: {
                node: '16'
            }
        }

    ]
}