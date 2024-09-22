import { InputFormAtomProps } from './InputFormAtom.interface';
import { InputFormData } from './InputFormAtom.styles';

export const InputFormAtom = ({
  placeholder,
  type,
  ...field
}: InputFormAtomProps) => {
  return <InputFormData placeholder={placeholder} type={type} {...field} />;
};
