import { View, Text, Pressable, TextInput } from "react-native";

const FirstTry = () => {
  return (
    <View>
    <TextInput placeholder="Correo" />
    <TextInput placeholder="Contraseña" secureTextEntry />
    <Pressable onPress={() => console.log('¿Qué envío?')}>
      <Text>Entrar</Text>
    </Pressable>
  </View>
  );
};

export default FirstTry;