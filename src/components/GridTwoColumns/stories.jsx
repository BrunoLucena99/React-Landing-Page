import GridTwoColumns from '.';
import mock from '../../mocks/GridTwoColumns';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: mock,
  argTypes: {
    text: { type: 'string' },
    title: { type: 'string' },
    image: { type: 'string' },
    hasBackground: { type: 'boolean' },
  },
};

export const Template = (args) => <GridTwoColumns {...args} />;
