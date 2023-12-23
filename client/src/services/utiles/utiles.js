const toFormData = (data) => {
  let formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
};
const validateSlug = (input) => {
  const regex = /[\s\?\%\&]/g;

  const result = regex.test(input);

  return !result;
}
const generateUniqueID = () => {
  const characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let id = "";
  // Id length 5 
  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * characters.length);
    id += characters[index];
  }

  return id;
}

export {
    toFormData,
    validateSlug,
    generateUniqueID
}