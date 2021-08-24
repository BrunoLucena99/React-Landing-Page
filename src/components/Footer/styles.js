import styled from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.footer`
  text-align: center;
  border-top: ${({ theme }) => `0.1rem solid ${theme.colors.mediumGray}`};

  a {
    color: inherit;
    text-decoration: none;
  }

  ${TextComponent} {
    font-size: ${({ theme }) => theme.font.sizes.small};
  }

  ${SectionContainer} {
    padding-top: 0;
    padding-bottom: 0;
  }
`;
