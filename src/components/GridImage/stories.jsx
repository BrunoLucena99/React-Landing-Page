import GridImage from '.';
import mock from '../../mocks/GridImage';

export default {
  title: 'GridImage',
  component: GridImage,
  args: mock,
  argTypes: {},
};

export const Template = (args) => <GridImage {...args} />;
