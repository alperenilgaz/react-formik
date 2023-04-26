import * as yup from 'yup';

let validations = yup.object({
  email:yup.string().email('Geçerli Bir E-mail giriniz').required('Boş Bırakılamaz'),
  password:yup.string().min(5,'Parolanız en az 5 karakter olmalıdır').required('Boş Bırakılamaz'),
  passwordConfirm:yup.string().oneOf([yup.ref('password')],'Paralolar uyuşmuyor').required('Boş Bırakılamaz')

});

export default validations;