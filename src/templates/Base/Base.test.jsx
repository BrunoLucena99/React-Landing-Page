import { screen } from '@testing-library/react';
import Base from '.';
import { renderTheme } from '../../styles/RenderTheme';
import mock, { childrenMock } from '../../mocks/BaseTemplate';

describe('<Base />', () => {
  it('should render Base', () => {
    const { container } = renderTheme(<Base {...mock} {...childrenMock} />);
    expect(container).toMatchSnapshot();
  });

  it('should without menu links', () => {
    renderTheme(<Base {...mock} {...childrenMock} links={undefined} />);
    const navigation = screen.getByRole('navigation');
    expect(navigation.firstChild).toBeNull();
  });
});
