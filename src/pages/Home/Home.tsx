import { Headbar } from '../../components/Molecules/Headbar/Headbar';
import { CardTable } from '../../components/Organisms/CardTable/CardTable';
import { TemplateHome } from '../../components/Templates/TemplateHome/TemplateHome';

export const Home = () => {
  return <TemplateHome Headbar={<Headbar />} CardTable={<CardTable />} />;
};
