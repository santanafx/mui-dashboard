import { Typography } from '@mui/joy';
import { Controller } from 'react-hook-form';

import { InputFormProps } from './InputForm.interface';
import { InputFormData, TypographyError } from './InputForm.styles';

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
            <InputFormData placeholder={placeholder} type={type} {...field} />
            {error && <TypographyError>{error.message}</TypographyError>}
          </div>
        )}
      />
    </>
  );
};
