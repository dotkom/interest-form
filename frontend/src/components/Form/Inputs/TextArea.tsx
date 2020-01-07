import { useField } from 'formik';
import React, { FC, ComponentProps } from 'react';
import { TextArea as DsTextArea } from '@dotkomonline/design-system';

type TextAreaProps = ComponentProps<typeof DsTextArea>;

const TextArea: FC<TextAreaProps> = (props) => {
  const { name, onBlur, onChange, value } = props;
  const [field, meta] = useField<string>({ name, onBlur, onChange, value });
  return <DsTextArea errorMessage={meta.error && meta.touched ? meta.error : undefined} {...field} {...props} />;
};

export default TextArea;
