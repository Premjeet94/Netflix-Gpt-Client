export const checkValidData = ( email, password) => {

//   const isName = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);
  const isEmailId = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPassword = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

//   if (!isName) return "Invalid Name";
  if (!isEmailId) return "Enter Valid Email Address";
  if (!isPassword)
    return "Password must contain number,uppercase,lowercase,special-character,8-16,without space.";

  return null;
};
