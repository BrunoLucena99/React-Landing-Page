import GridContent from '.';
import mock from '../../mocks/GridContent';

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock,
  argTypes: {},
};

export const Template = (args) => <GridContent {...args} />;
