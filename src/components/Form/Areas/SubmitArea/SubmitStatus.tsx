import { Spinner, Message } from '@dotkomonline/design-system';
import React, { FC } from 'react';
import styled from 'styled-components';

interface SubmitStatusProps {
  loading: boolean;
  submitCount: number;
  hasErrors: boolean;
  submitted: boolean;
}

const SubmitStatus: FC<SubmitStatusProps> = ({ loading, submitCount, hasErrors, submitted }) => {
  if (loading) return <Spinner />;
  if (submitted) return <Message status="success">Din interesse har blitt sendt inn</Message>;
  if (submitCount > 0 && hasErrors)
    return <Message status="error">Venligst sjekk alle at alle feltene er gyldig</Message>;
  return <div />;
};

export default SubmitStatus;
