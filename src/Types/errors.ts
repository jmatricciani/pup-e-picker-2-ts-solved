export const handleError = (error: unknown): void => {
  if (error instanceof Error) {
    throw new Error(error.message);
  } else {
    console.error(error);
  }
};
