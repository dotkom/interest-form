import React, { ComponentProps, useState } from 'react';
import { Checkbox as DsCheckbox } from '@dotkomonline/design-system';
import { FieldArrayRenderProps } from 'formik';

interface CheckboxProps<T> extends ComponentProps<typeof DsCheckbox> {
  arrayHelpers: FieldArrayRenderProps;
  value: T;
  key: string;
  name: string;
}
function Checkbox<T>({ name, label, arrayHelpers, value, ...props }: CheckboxProps<T>) {
  const [checked, setChecked] = useState(false);
  const handleOnChange = (isChecked: boolean): void => {
    setChecked(isChecked);
    if (checked) {
      arrayHelpers.remove(
        arrayHelpers.form.values[name].findIndex((x: T) => JSON.stringify(x) === JSON.stringify(value))
      );
    } else {
      arrayHelpers.push(value);
    }
  };

  return <DsCheckbox name={arrayHelpers.name} isChecked={checked} onChange={handleOnChange} label={label} {...props} />;
}

export default Checkbox;
