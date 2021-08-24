import Base from '.';
import baseTemplateMock, { childrenMock } from '../../mocks/BaseTemplate';

export default {
  title: 'Templates/Base',
  component: Base,
  args: {
    ...baseTemplateMock,
    ...childrenMock,
  },
  argTypes: {
    children: { type: '' },
    links: { type: '' },
    logoData: { type: '' },
    footerHtml: { type: 'string' },
  },
};

export const Template = (args) => <Base {...args} />;
