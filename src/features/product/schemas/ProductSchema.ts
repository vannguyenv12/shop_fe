import * as yup from 'yup';

export const productCreateSchema = yup
  .object({
    name: yup.string().required(),
    longDescription: yup.string().required(),
    shortDescription: yup.string().required(),
    quantity: yup.number().positive().integer().required(),
    price: yup.number().positive().required(),
    main_image: yup.string().required(),
    categoryId: yup.number().positive().required(),
  })
  .required();
