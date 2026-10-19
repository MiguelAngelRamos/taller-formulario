import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

type LoginErrors = { email?: string; password?: string };

const NaiveLoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<LoginErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const next: LoginErrors = {};
    const trimmed = email.trim();
    if (!trimmed) next.email = 'El correo electrónico es obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed))
      next.email = 'Ingresa un correo electrónico válido';
    if (!password) next.password = 'La contraseña es obligatoria';
    else if (password.length < 8)
      next.password = 'La contraseña debe tener al menos 8 caracteres';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async () => {
    if (isSubmitting || !validate()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
  };

  return (
    <View>
      <TextInput value={email} onChangeText={setEmail} placeholder="nombre@empresa.com" />
      {errors.email ? <Text>{errors.email}</Text> : null}
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      {errors.password ? <Text>{errors.password}</Text> : null}
      <Pressable onPress={onSubmit} disabled={isSubmitting}>
        <Text>{isSubmitting ? 'Entrando…' : 'Entrar'}</Text>
      </Pressable>
    </View>
  );
};

export default NaiveLoginScreen;