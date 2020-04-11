module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions/register',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
  ],
};
