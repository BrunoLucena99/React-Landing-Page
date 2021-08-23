import NavLinks from '.';
import links from '../../mocks/links';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links,
  },
  argTypes: {
    links: { type: '' },
  },
};

export const Template = (args) => (
  <div>
    <NavLinks {...args} />
  </div>
);
