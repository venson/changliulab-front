import { extend } from "vee-validate";
import { required,email } from "vee-validate/dist/rules";
extend("email",email)
extend("required", {
  ...required,
//   message: "This {field} field is required"
});
extend("upperCase",{
    message: 'At least one uppercase character',
    validate: value => value.match(/[A-Z]/g) !== null
})
extend("lowerCase",{
    message: 'At least one lowercase character',
    validate: value => value.match(/[a-z]/g) !== null
})
extend("number",{
    message: 'At least one number',
    validate: value => value.match(/[0-9]/g) !== null
})
extend("length8",{
    message: 'At least 8 characters',
    validate: value => Array.from(value).length >= 8
})
extend('password', {
    params: ['target'],
    validate(value, { target }) {
      return value === target;
    },
    message: 'Password confirmation does not match'
  });