import React, { FC } from 'react';
import { TextField } from '@dotkomonline/design-system';
import { FieldProps, Field, FieldValidator } from 'formik';

interface BaseTextFieldProps {
  validate: FieldValidator;
}

const BaseTextField: FC<BaseTextFieldProps & TextField> = ({ name, label, validate, ...props }) => {
  return (
    <Field name={name} validate={validate}>
      {({ field, meta }: FieldProps<FormData>) => (
        <TextField
          label={label}
          errorMessage={meta.error && meta.touched ? meta.error : null}
          status={meta.touched ? (meta.error ? 'error' : 'success') : null}
          {...field}
          {...props}
        />
      )}
    </Field>
  );
};

export default BaseTextField;
