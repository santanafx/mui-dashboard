import { Headbar } from '../../Molecules/Headbar/Headbar';
import { Logo } from '../../Molecules/Logo/Logo';
import { Sidebar } from '../../Molecules/Sidebar/Sidebar';
import { TemplateHomeProps } from './TemplateHome.interface';
import {
  DivHeaderContainer,
  DivSidebarContainer,
  DivTemplateContainer,
} from './TemplateHome.styles';

export const TemplateHome = ({}: TemplateHomeProps) => {
  return (
    <DivTemplateContainer>
      <DivSidebarContainer>
        <Logo />
        <Sidebar />
      </DivSidebarContainer>
      <DivHeaderContainer>
        <Headbar />
      </DivHeaderContainer>
    </DivTemplateContainer>
  );
};
