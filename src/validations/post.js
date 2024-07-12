import * as yup from "yup";

const postValidator = yup.object().shape({
  description: yup
    .string()
    .required("متن را به وارد کنید")
    .min(3, "  باید حداقل ۶ کارکتر باشد"),
  hashtags: yup.string().optional(),
});

export default postValidator;
