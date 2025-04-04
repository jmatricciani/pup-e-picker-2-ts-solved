export const handleError = (error: unknown): void => {
  if (error instanceof Error) {
    throw new Error(error.message);
  } else {
    console.error(error);
  }
};

const NAME_MIN = 1;
const NAME_MAX = 55;
const DESCRIPTION_MIN = 1;
const DESCRIPTION_MAX = 255;

const validateName = (name: string) => {
  if (name.length > NAME_MAX) {
    return new Error(`Dog name cannot be greater than ${NAME_MAX} characters.`);
  }

  if (name.length < NAME_MIN) {
    return new Error('Dog name is required.');
  }

  return true;
};

const validateDescription = (description: string) => {
  if (description.length > DESCRIPTION_MAX) {
    return new Error(
      `Description cannot be greater than ${DESCRIPTION_MAX} characters.`
    );
  }

  if (description.length < DESCRIPTION_MIN) {
    return new Error('Description is required.');
  }

  return true;
};

export const validateForm = (name: string, description: string) => {
  const errors: Error[] = [];

  const isNameValid = validateName(name);
  const isDescriptionValid = validateDescription(description);

  if (isNameValid instanceof Error) {
    errors.push(isNameValid);
  }
  if (isDescriptionValid instanceof Error) {
    errors.push(isDescriptionValid);
  }

  if (errors.length > 0) {
    throw errors;
  } else {
    return true;
  }
};
