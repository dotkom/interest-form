import React, { useState, ComponentProps } from 'react';
import { Checkbox as DsCheckbox } from '@dotkomonline/design-system';
import { useField, ArrayHelpers } from 'formik';

interface CheckboxProps<T> extends ComponentProps<typeof DsCheckbox> {
  arrayHelpers: ArrayHelpers;
  data: T;
  key: string;
  index: number;
  name: string;
}
function Checkbox<T>({ data, arrayHelpers, label, index, name, ...props }: CheckboxProps<T>) {
  const [checked, setChecked] = useState(false);
  const [field] = useField<T[]>(name);
  const handleOnCheck = (isChecked: boolean): void => {
    setChecked(isChecked);
    if (isChecked) {
      arrayHelpers.insert(index, data);
    } else {
      arrayHelpers.remove(index);
    }
  };

  return <DsCheckbox onCheck={handleOnCheck} isChecked={checked} label={label} {...props} {...field} />;
}

export default Checkbox;
