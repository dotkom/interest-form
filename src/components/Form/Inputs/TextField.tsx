import { useField } from 'formik';
import React, { FC } from 'react';
import { TextField as DsTextField } from '@dotkomonline/design-system';

const TextField: FC<DsTextField> = (props) => {
  const [field, meta] = useField<FormData>(props);
  return (
    <DsTextField
      errorMessage={meta.error && meta.touched ? meta.error : null}
      status={meta.touched ? (meta.error ? 'error' : 'success') : null}
      {...field}
      {...props}
    />
  );
};

export default TextField;
