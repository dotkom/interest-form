import React from 'react';
import Checkbox from '../Inputs/Checkbox';
import { FieldArray } from 'formik';
import styled from 'styled-components';
//import { CategoryTitle } from '../Category';

const CheckboxContainer = styled.div`
  display: grid;
  gap: 1rem;
  padding-left: 10px;
`;
/*
const GroupTitle = styled(CategoryTitle)`
  border-bottom: 1px solid blue;
`;*/

interface CheckboxAreaProps<T> {
  values: T[];
  name: string;
  toLabel: (value: T) => string;
}

function CheckboxArea<T>({ values, name, toLabel }: CheckboxAreaProps<T>) {
  return (
    <>
      <FieldArray name={name}>
        {(arrayHelpers) => (
          <CheckboxContainer>
            {values.map((data, index) => (
              <Checkbox
                name={name}
                label={toLabel(data)}
                data={data}
                arrayHelpers={arrayHelpers}
                key={name + index}
                index={index}
              />
            ))}
          </CheckboxContainer>
        )}
      </FieldArray>
    </>
  );
}

export default CheckboxArea;
