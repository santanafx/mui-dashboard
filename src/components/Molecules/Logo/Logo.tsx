import { Typography } from '@mui/joy';

import randomImage from '../../../assets/images/random.png';
import { DivImageContainer, DivLogoContainer, ImgLogo } from './Logo.styles';

export const Logo = () => {
  return (
    <DivLogoContainer>
      <DivImageContainer>
        <ImgLogo src={randomImage} alt="Logo" />
      </DivImageContainer>
      <Typography>Dashboard INC.</Typography>
    </DivLogoContainer>
  );
};
