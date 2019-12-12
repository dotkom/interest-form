import React from 'react';
import Checkbox from '../Inputs/Checkbox';
import { FieldArray } from 'formik';
import styled from 'styled-components';
import { CheckboxItem } from 'models/Form/Inputs/Checkbox';

const CheckboxContainer = styled.div`
  display: grid;
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface CheckboxAreaProps<T> {
  values: CheckboxItem<T>[];
  name: string;
}

function CheckboxArea<T>({ values, name }: CheckboxAreaProps<T>) {
  return (
    <>
      <FieldArray name={name}>
        {(arrayHelpers) => (
          <CheckboxContainer>
            {values.map((item, i) => (
              <Checkbox
                name={`${arrayHelpers.name}.${i}`}
                label={item.label}
                value={item.value}
                arrayHelpers={arrayHelpers}
                key={`${arrayHelpers.name}.${i}`}
              />
            ))}
          </CheckboxContainer>
        )}
      </FieldArray>
    </>
  );
}

export default CheckboxArea;
