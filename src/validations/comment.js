import * as yup from "yup";

const commentValidator = yup.object().shape({
  content: yup.string().required("وارد کرد متن الزامی است"),
});

export default commentValidator;
