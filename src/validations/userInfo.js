import * as yup from "yup";

const userValidator = yup.object().shape({
  name: yup.string().min(3, "نام حداقل باید ۳ کارکتر باشد").optional(),
  username: yup.string().min(3, "نام حداقل باید ۳ کارکتر باشد").optional(),
  email: yup.string().email("ایمیل را به درستی وارد کنید").optional(),
});

export default userValidator;

export const passwordValidator = yup.object().shape({
  password: yup
    .string()
    .required("رمز عبور خود را وارد نمایید")
    .min(6, "رمز عبور باید حداقل ۶ کارکتر باشد")
    .max(20, "رمز عبور باید حذاکثر ۲۰ کارکتر باشد")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "رمز عبور باید حاوی حروف بزرگ و کوچک و اعداد و علائم باشد"
    ),
  confirmPassword: yup
    .string()
    .min(6, "this field must be at least 6 chars")
    .max(20, "this field must be less than 20 chars")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "رمز عبور باید حاوی حروف بزرگ و کوچک و اعداد و علائم باشد"
    )
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
