import LogoLink from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'Logo',
    link: 'google.com',
  },
  argTypes: {
    text: { type: 'string' },
    image: { type: 'string' },
    link: { type: 'string' },
  },
};

export const WithImage = (args) => <LogoLink {...args} />;
export const OnlyText = (args) => <LogoLink {...args} />;

WithImage.args = {
  image: 'assets/images/logo.svg',
};
