import { Container } from './styles';
import P from 'prop-types';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import GoTop from '../../components/GoTop';

const BaseTemplate = ({ children, logoData, links = [], footerHtml }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Container>
        {children}
        <Footer html={footerHtml} />
      </Container>
      <GoTop />
    </>
  );
};

BaseTemplate.propTypes = {
  children: P.node.isRequired,
  footerHtml: P.string.isRequired,
  ...Menu.propTypes,
};

export default BaseTemplate;
