import * as yup from "yup";

const forgetPasswordValidator = yup.object().shape({
  email: yup.string().email("ایمیل را به درستی وارد کنید").required('وارد کردن این فیلد الزامیست'),

});

export default forgetPasswordValidator;
