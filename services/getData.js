export const getData = async () => {
  const response = await fetch('/api/employee');
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return response.json();
};
