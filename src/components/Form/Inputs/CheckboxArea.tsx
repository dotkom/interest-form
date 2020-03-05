import React from 'react';
import Checkbox from '../Inputs/Checkbox';
import { FieldArray } from 'formik';
import styled from 'styled-components';
import { CheckboxItem } from 'models/Form/Inputs/Checkbox';

interface CheckboxAreaProps<T> {
  values: CheckboxItem<T>[];
  name: string;
}

function CheckboxArea<T>({ values, name }: CheckboxAreaProps<T>) {
  return (
    <S.Wrapper>
      <FieldArray name={name}>
        {(arrayHelpers) => (
          <S.Checkboxes>
            {values.map((item, i) => (
              <Checkbox
                name={arrayHelpers.name}
                label={item.label}
                value={item.value}
                arrayHelpers={arrayHelpers}
                key={`${arrayHelpers.name}.${i}`}
              />
            ))}
          </S.Checkboxes>
        )}
      </FieldArray>
    </S.Wrapper>
  );
}
const S = {
  Checkboxes: styled.div`
    display: grid;
    gap: 1rem;
    margin-top: 0.5rem;
    width: 85%;
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
};

export default CheckboxArea;
