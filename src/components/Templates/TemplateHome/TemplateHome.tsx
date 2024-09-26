import { TemplateHomeProps } from './TemplateHome.interface';
import {
  DivHeaderContainer,
  DivTemplateContainer,
  SectionMainContent,
} from './TemplateHome.styles';

export const TemplateHome = ({ Headbar, CardTable }: TemplateHomeProps) => {
  return (
    <>
      <DivHeaderContainer>{Headbar}</DivHeaderContainer>
      <DivTemplateContainer>
        <SectionMainContent>{CardTable}</SectionMainContent>
      </DivTemplateContainer>
    </>
  );
};
