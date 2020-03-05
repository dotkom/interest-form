import { useField } from 'formik';
import React, { FC, ComponentProps } from 'react';
import { TextField as DsTextField } from '@dotkomonline/design-system';
import styled from 'styled-components';

type TextFieldProps = ComponentProps<typeof DsTextField>;

const TextField: FC<TextFieldProps> = (props) => {
  const { name, onBlur, onChange, value } = props;
  const [field, meta] = useField<string>({ name, onBlur, onChange, value });
  return (
    <S.Wrapper>
      <S.InputDiv>
        <DsTextField
          errorMessage={meta.error && meta.touched ? meta.error : undefined}
          status={meta.touched ? (meta.error ? 'error' : 'success') : undefined}
          {...field}
          {...props}
        />
      </S.InputDiv>
    </S.Wrapper>
  );
};

const S = {
  InputDiv: styled.div`
    margin: 0.7rem 0;
    width: 85%;
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
  `,
};

export default TextField;
