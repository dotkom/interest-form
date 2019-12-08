import { useField } from 'formik';
import React, { FC, ComponentProps } from 'react';
import { TextField as DsTextField } from '@dotkomonline/design-system';

type TextFieldProps = ComponentProps<typeof DsTextField>;

const TextField: FC<TextFieldProps> = (props) => {
  const { name, onBlur, onChange, value } = props;
  const [field, meta] = useField({ name, onBlur, onChange, value });
  return (
    <DsTextField
      errorMessage={meta.error && meta.touched ? meta.error : undefined}
      status={meta.touched ? (meta.error ? 'error' : 'success') : undefined}
      {...field}
      {...props}
    />
  );
};

export default TextField;
