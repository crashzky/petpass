const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	stories: [
		'../stories/**/*.stories.mdx',
		'../stories/**/*.stories.@(js|jsx|ts|tsx)'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-addon-next-router',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	framework: '@storybook/react',
	core: {
		builder: '@storybook/builder-webpack5'
	},
	webpackFinal: config => { 
		const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
		fileLoaderRule.exclude = /\.svg$/;  
		
		config.module.rules.push({
			test: /\.svg$/,
			enforce: 'pre',
			loader: require.resolve('@svgr/webpack'),
		});

		config.resolve.plugins = [new TsconfigPathsPlugin()];
		
		return config;
	},
}