import { Typography } from '@mui/joy';
import { Controller } from 'react-hook-form';

import { InputFormAtom } from '../../Atoms/InputFormAtom/InputFormAtom';
import { InputFormProps } from './InputForm.interface';
import { TypographyError } from './InputForm.styles';

export const InputForm = ({
  control,
  name,
  placeholder,
  label,
  type,
}: InputFormProps) => {
  return (
    <>
      <Typography>{label}</Typography>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) => (
          <div>
            <InputFormAtom placeholder={placeholder} type={type} {...field} />
            {error && <TypographyError>{error.message}</TypographyError>}
          </div>
        )}
      />
    </>
  );
};
