import GoTop from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {},
  argTypes: {},
};

export const Template = (args) => (
  <div>
    <h1>Lorem ipsum dolor sit amet, consectetur adip</h1>
    <p>lorem ipsum dolor sit am</p>
    <p>Lorem ipsum dolor sit</p>
    <h1>Lorem ipsum dolor sit amet, consectetur adip</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adip</p>
    <p>lorem ipsum dolor sit am</p>
    <p>Lorem ipsum dolor sit</p>
    <h1>Lorem ipsum dolor sit amet, consectetur adip</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adip</p>
    <p>lorem ipsum dolor sit am</p>
    <h1>Lorem ipsum dolor sit amet, consectetur adip</h1>
    <p>Lorem ipsum dolor sit</p>
    <p>Lorem ipsum dolor sit amet, consectetur adip</p>
    <GoTop {...args} />
  </div>
);
