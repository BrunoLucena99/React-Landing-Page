import { Container } from './styles';
import GridContent from '../../components/GridContent';

const PageNotFound = () => (
  <GridContent
    title="Error 404"
    html={
      '<p>A página que você busca não foi encontrada. <a href="/">Clique aqui para voltar</a></p>'
    }
  />
);

export default PageNotFound;
