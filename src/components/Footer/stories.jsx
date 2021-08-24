import Footer from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="https://github.com/BrunoLucena99">Feito com ❤ por Bruno Lucena</a></p>`,
  },
  argTypes: {
    html: { type: 'string' },
  },
};

export const Template = (args) => <Footer {...args} />;
