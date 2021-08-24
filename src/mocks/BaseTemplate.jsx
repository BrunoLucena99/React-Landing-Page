import links from './links';
import gridTextMock from './GridText';
import GridTextComponent from '../components/GridText';

export const childrenMock = {
  children: (
    <>
      <GridTextComponent {...gridTextMock} />
      <GridTextComponent {...gridTextMock} hasBackground />
      <GridTextComponent {...gridTextMock} />
      <GridTextComponent {...gridTextMock} hasBackground />
      <GridTextComponent {...gridTextMock} />
    </>
  ),
};

export default {
  links,
  logoData: {
    text: 'Logo',
    link: '#target',
  },
  footerHtml: `<p>Feito por <b>Bruno Lucena</b></p>`,
};
