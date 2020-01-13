import { useField } from 'formik';
import React, { FC, ComponentProps } from 'react';
import { TextField as DsTextField } from '@dotkomonline/design-system';
import styled from 'styled-components';

type TextFieldProps = ComponentProps<typeof DsTextField>;

const TextFieldContainer = styled.div`
  margin: 0.7rem 0;
  max-width: 400px;
`;

const TextField: FC<TextFieldProps> = (props) => {
  const { name, onBlur, onChange, value } = props;
  const [field, meta] = useField<string>({ name, onBlur, onChange, value });
  return (
    <TextFieldContainer>
      <DsTextField
        errorMessage={meta.error && meta.touched ? meta.error : undefined}
        status={meta.touched ? (meta.error ? 'error' : 'success') : undefined}
        {...field}
        {...props}
      />
    </TextFieldContainer>
  );
};

export default TextField;
