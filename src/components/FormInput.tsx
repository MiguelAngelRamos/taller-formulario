import { useState } from "react";
import { View, Text, TextInput, TextInputProps, StyleSheet } from "react-native";
import { Controller, type Control, type FieldValues, type FieldPath } from 'react-hook-form';
import { colors } from "../theme";
// useForm() devuelve un tipo de objeto llamado control
// FieldValues, tipo base de valores del formulario para tratarlo como clave y valor
// FieldPath representa el nombre valido de un campo de formulario

/*
Define las props del componente, TFieldValues es La forma en que se manejan los valores del formulario
(por ejemplo, { email: string, password: string })
*/
interface  FormInputProps<TFieldValues extends FieldValues> extends TextInputProps {
    control: Control<TFieldValues>; // objeto 'control' obtenido de useForm()
    name: FieldPath<TFieldValues>; // Nombre del campo; solo acepta claves que existan en el formulario
    label: string; // Texto que se muestra encima del input
}

export const FormInput = <TFieldValues extends FieldValues>({
  control, // conexion con el formulario
  name, // name nombre del campo a controlar
  label, // texto de la etiqueta
  style, // estilos del input
  onFocus, // enfocar el input
}: FormInputProps<TFieldValues>) => {
  
}
