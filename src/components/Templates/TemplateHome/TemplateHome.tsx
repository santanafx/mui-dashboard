import { Headbar } from '../../Molecules/Headbar/Headbar';
import { CardTable } from '../../Organisms/CardTable/CardTable';
import {
  DivHeaderContainer,
  DivTemplateContainer,
  SectionMainContent,
} from './TemplateHome.styles';

export const TemplateHome = () => {
  return (
    <>
      <DivHeaderContainer>
        <Headbar />
      </DivHeaderContainer>
      <DivTemplateContainer>
        <SectionMainContent>
          <CardTable />
        </SectionMainContent>
      </DivTemplateContainer>
    </>
  );
};
