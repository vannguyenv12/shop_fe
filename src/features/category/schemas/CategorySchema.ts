import * as yup from 'yup';

export const categoryCreateSchema = yup
  .object({
    name: yup.string().required(),
    icon: yup.string().required(),
  })
  .required();
