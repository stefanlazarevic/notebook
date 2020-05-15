module.exports = {
	stories: ["../src/**/*.stories.([tj]sx|mdx)"],
	addons: [
		"@storybook/preset-create-react-app",
		"@storybook/addon-actions/register",
		'@storybook/addon-links/register',
		"@storybook/addon-knobs/register",
		"@storybook/addon-docs",
		'@storybook/addon-a11y/register',
		'@storybook/addon-jest/register',
	],
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.(ts|tsx)$/,
			loader: require.resolve("babel-loader"),
			options: {
				presets: [["react-app", { flow: false, typescript: true }]],
			},
		});
		config.resolve.extensions.push(".ts", ".tsx");
		return config;
	},
};
