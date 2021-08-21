import MenuLink from '.';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: `Inicio`,
    href: 'https://www.google.com/',
  },
  argTypes: {
    children: { type: 'string' },
    newTab: { type: 'boolean' },
    href: { type: 'string' },
  },
};

export const Template = (args) => (
  <div style={{ display: 'flex' }}>
    <MenuLink {...args} />
  </div>
);
