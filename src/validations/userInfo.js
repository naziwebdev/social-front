import * as yup from "yup";

const userValidator = yup.object().shape({
  name: yup.string().min(3, "نام حداقل باید ۳ کارکتر باشد").optional(),
  username: yup.string().min(3, "نام حداقل باید ۳ کارکتر باشد").optional(),
  email: yup.string().email("ایمیل را به درستی وارد کنید").optional(),
});

export default userValidator;
