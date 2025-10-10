import type { HTMLInputTypeAttribute } from "react";
import {
  type FieldErrors,
  type FieldValues,
  type Path,
  type UseFormRegister,
  type ValidationRule,
} from "react-hook-form";

interface PrimaryInputProps<T extends FieldValues = FieldValues> {
  register: UseFormRegister<T>;
  name: Path<T>;
  type: HTMLInputTypeAttribute;
  errors: FieldErrors<T>;
  pattern?: ValidationRule<RegExp>;
  minLength?: ValidationRule<number>;
  maxLength?: ValidationRule<number>;
  required?: boolean | string;
  id: string;
  placeholder: string;
}

export const PrimaryInput = <TFieldValues extends FieldValues>(
  props: PrimaryInputProps<TFieldValues>
) => {
  const {
    register,
    errors,
    type,
    maxLength,
    minLength,
    pattern,
    required,
    id,
    placeholder,
    name,
  } = props;
  return (
    <input
      type={type}
      className={`form-control rounded-pill ${
        errors[name] ? "is-invalid" : ""
      }`}
      id={id}
      placeholder={placeholder}
      {...register(name, {
        required: required,
        pattern: pattern,
        minLength: minLength,
        maxLength: maxLength,
      })}
    />
  );
};
