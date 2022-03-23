import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(error: ValidationError): Errors {
  const validationsErrors: Errors = {};

  error.inner.forEach(e => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    validationsErrors[e.path!] = e.message;
  });

  return validationsErrors;
}
