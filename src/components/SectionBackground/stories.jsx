import SectionBackground from '.';
import SectionContainer from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <>
        <h1>Section Background</h1>
        <p>
          lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor
          incidunt ut labore et dolore
        </p>
      </>
    ),
  },
  argTypes: {
    children: { type: '' },
    hasBackground: { type: 'boolean' },
  },
};

export const Template = (args) => <SectionBackground {...args} />;
