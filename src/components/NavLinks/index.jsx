import P from 'prop-types';
import MenuLink from '../MenuLink';
import { Container } from './styles';

const NavLinks = ({ links = [] }) => {
  return (
    <Container>
      {links.map((link) => (
        <MenuLink key={link.href} {...link} />
      ))}
    </Container>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.node.isRequired,
      href: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};

export default NavLinks;
