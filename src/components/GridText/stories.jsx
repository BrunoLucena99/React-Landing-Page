import GridText from '.';
import mock from '../../mocks/GridText';

export default {
  title: 'GridText',
  component: GridText,
  args: mock,
  argTypes: {
    hasBackground: { type: 'boolean' },
  },
};

export const Template = (args) => <GridText {...args} />;
