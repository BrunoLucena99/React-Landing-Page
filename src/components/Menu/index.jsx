import { useState } from 'react';
import { Button, Container, MenuContainer } from './styles';
import SectionContainer from '../SectionContainer';
import P from 'prop-types';
import LogoLink from '../LogoLink';
import NavLinks from '../NavLinks';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';

const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        aria-label="Open/close menu"
        onClick={() => setVisible((oldVal) => !oldVal)}
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Button>
      <Container onClick={() => setVisible(false)} visible={visible}>
        <SectionContainer>
          <MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </MenuContainer>
        </SectionContainer>
      </Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};

export default Menu;
