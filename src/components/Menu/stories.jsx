import MenuComponent from '.';
import links from '../../mocks/links';

export default {
  title: 'Menu',
  component: MenuComponent,
  args: {
    links,
    logoData: {
      text: 'Logo',
      link: '#target',
    },
  },
  argTypes: {
    links: { type: '' },
  },
};

export const Template = (args) => (
  <div style={{ height: '300vh', background: 'gray' }}>
    <MenuComponent {...args} />
  </div>
);
