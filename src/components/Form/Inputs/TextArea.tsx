import { useField } from 'formik';
import React, { FC, ComponentProps } from 'react';
import { TextArea as DsTextArea } from '@dotkomonline/design-system';
import styled from 'styled-components';

type TextAreaProps = ComponentProps<typeof DsTextArea>;

const TextArea: FC<TextAreaProps> = (props) => {
  const { name, onBlur, onChange, value } = props;
  const [field, meta] = useField<string>({ name, onBlur, onChange, value });
  return (
    <S.Wrapper>
      <S.InputDiv>
        <DsTextArea
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
    width: 85%;
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
};

export default TextArea;
