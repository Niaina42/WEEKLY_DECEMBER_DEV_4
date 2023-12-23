const toFormData = (data) => {
  let formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
};
const validateSlug = (input) => {
  // Create a regular expression to match spaces, ?, %, and & characters
  const regex = /[\s\?\%\&]/g;

  // Test the input against the regular expression
  const result = regex.test(input);

  // !Return true if the input contains any of the disallowed characters, or false if it does not
  return !result;
}
export {
    toFormData,
    validateSlug
}