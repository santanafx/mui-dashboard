//TODO alterar o signOut quando for criado o botao de deslogar
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Divider, Typography } from '@mui/joy';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';

import { auth, googleProvider } from '../../../firebaseConfig.js';
import { LoginProps } from './Login.interface';
import {
  DivButtons,
  DivContainer,
  DivForm,
  DivFormButtons,
  DivTitle,
  InputForm,
  TypographyError,
} from './Login.styles';

const loginSchema = z.object({
  user: z
    .string()
    .min(1, { message: 'User is required' })
    .email('Enter a valid email address'),
  password: z.string().min(1, { message: 'Password is required' }).max(8, {
    message: 'Password must be less than 8 characters',
  }),
});

type loginSchemaType = z.infer<typeof loginSchema>;

export const Login = () => {
  const { handleSubmit, control } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      user: '',
      password: '',
    },
  });

  const navigate = useNavigate();

  //TODO remover console que serve somente para desbugar
  console.log(auth?.currentUser?.email);

  const handleLoginForm = async (data: LoginProps) => {
    const { user, password } = data;
    try {
      await createUserWithEmailAndPassword(auth, user, password);
    } catch (error) {
      console.error(error);
    }
    navigate('/home');
  };

  const handleLoginWithGoogleForm = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
    navigate('/home');
  };

  //TODO remover funcao handleLogOut
  const handleLogOut = () => {
    try {
      signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DivContainer>
      <DivTitle>
        <Typography level="h1">Login</Typography>
      </DivTitle>
      <Divider sx={{ marginBottom: '20px' }} />
      <DivFormButtons>
        <DivForm>
          <Typography>User</Typography>
          <Controller
            control={control}
            name="user"
            render={({ field, fieldState: { error } }) => (
              <div>
                <InputForm placeholder="Email" type="text" {...field} />
                {error && <TypographyError>{error.message}</TypographyError>}
              </div>
            )}
          />
          <Typography>Password</Typography>
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState: { error } }) => (
              <div>
                <InputForm placeholder="Password" type="password" {...field} />
                {error && <TypographyError>{error.message}</TypographyError>}
              </div>
            )}
          />
        </DivForm>
        <DivButtons>
          <Button onClick={handleSubmit(handleLoginForm)}>Sign in</Button>
          <Button onClick={handleSubmit(handleLoginWithGoogleForm)}>
            Sign in with google
          </Button>
          {/* TODO remover botao de logout */}
          <Button onClick={handleLogOut}>LogOut</Button>
        </DivButtons>
      </DivFormButtons>
    </DivContainer>
  );
};
