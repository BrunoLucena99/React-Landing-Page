import Base from '.';
import baseTemplateMock from '../../mocks/BaseTemplate';
import GridText from '../../components/GridText';
import gridTextMock from '../../mocks/GridText';

export const mockBase = {
  ...baseTemplateMock,
  children: (
    <>
      <GridText {...gridTextMock} />
      <GridText {...gridTextMock} hasBackground />
      <GridText {...gridTextMock} />
      <GridText {...gridTextMock} hasBackground />
      <GridText {...gridTextMock} />
    </>
  ),
};

export default {
  title: 'Templates/Base',
  component: Base,
  args: mockBase,
  argTypes: {
    children: { type: '' },
    links: { type: '' },
    logoData: { type: '' },
    footerHtml: { type: 'string' },
  },
};

export const Template = (args) => <Base {...args} />;
