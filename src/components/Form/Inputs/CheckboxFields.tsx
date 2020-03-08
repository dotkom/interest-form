import React from 'react';
import Checkbox from './Checkbox';
import { FieldArray } from 'formik';
import styled from 'styled-components';
import { CheckboxItem } from 'models/Form/Inputs/Checkbox';

interface CheckboxFieldsProps<T> {
  values: CheckboxItem<T>[];
  name: string;
}

function CheckboxFields<T>({ values, name }: CheckboxFieldsProps<T>) {
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

export default CheckboxFields;
