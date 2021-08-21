import P from 'prop-types';
import { Container } from './styles';

const MenuLink = ({ children, href, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  return (
    <Container href={href} target={target}>
      {children}
    </Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  href: P.string.isRequired,
  newTab: P.bool,
};

export default MenuLink;
