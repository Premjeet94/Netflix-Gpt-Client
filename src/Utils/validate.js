export const checkValidData = ( email, password) => {

//   const isName = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);
  const isEmailId = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPassword = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(password);

//   if (!isName) return "Invalid Name";
  if (!isEmailId) return "Enter Valid Email Address";
  if (!isPassword)
    return "Password must contain number,uppercase,lowercase,special-character,8-16,without space.";

  return null;
};
