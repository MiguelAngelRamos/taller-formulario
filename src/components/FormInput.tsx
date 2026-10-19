import { useState } from "react";
import { View, Text, TextInput, TextInputProps, StyleSheet } from "react-native";
import { Controller, type Control, type FieldValues, type FieldPath } from 'react-hook-form';
import { colors } from "../theme";
// useForm() devuelve un tipo de objeto llamado control
// FieldValues, tipo base de valores del formulario para tratarlo como clave y valor
// FieldPath representa el nombre valido de un campo de formulario