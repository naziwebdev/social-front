import * as yup from "yup";

const resetPasswordValidator = yup.object().shape({
  password: yup
    .string()
    .required("رمز عبور خود را وارد نمایید")
    .min(6, "رمز عبور باید حداقل ۶ کارکتر باشد")
    .max(20, "رمز عبور باید حذاکثر ۲۰ کارکتر باشد")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      "رمز عبور باید حاوی حروف بزرگ و کوچک و اعداد و علائم باشد"
    ),
});

export default resetPasswordValidator;
