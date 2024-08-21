import { CardTable } from '../../Molecules/CardTable/CardTable';
import { Headbar } from '../../Molecules/Headbar/Headbar';
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
