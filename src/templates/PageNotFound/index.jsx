import { useEffect } from 'react';
import GridContent from '../../components/GridContent';

const PageNotFound = () => {
  useEffect(() => {
    document.title = 'Página não encontrada';
  }, []);

  return (
    <GridContent
      title="Error 404"
      html={
        '<p>A página que você busca não foi encontrada. <a href="/">Clique aqui para voltar</a></p>'
      }
    />
  );
};

export default PageNotFound;
