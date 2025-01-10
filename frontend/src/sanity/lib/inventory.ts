// /* eslint-disable import/no-anonymous-default-export */
// // // import { Rule } from '@sanity/types';
// // // import { SchemaType } from 'sanity';

// //  export default {
// //   name: 'product',
// //   title: 'Product',
// //   type: 'document',
// //   fields: [
// //     {
// //       name: 'product_id',
// //       title: 'Product ID',
// //       type: 'number',
// //     },
// //     {
// //       name: 'product_name',
// //       title: 'Product Name',
// //       type: 'string',
// //     },
// //     {
// //       name: 'description',
// //       title: 'Description',
// //       type: 'array',
// //       of: [{ type: 'string' }],
// //     },
// //     {
// //       name: 'price',
// //       title: 'Price',
// //       type: 'number',
// //     },
// //     {
// //       name: 'discountPercentage',
// //       title: 'Discount Percentage',
// //       type: 'number',
// //     },
// //     {
// //       name: 'tags',
// //       title: 'Tags',
// //       type: 'array',
// //       of: [{ type: 'string' }],
// //     },
// //     {
// //       name: 'sizes',
// //       title: 'Sizes',
// //       type: 'number',
// //     },
// //     {
// //       name: 'images',
// //       title: 'Images',
// //       type: 'array',
// //       of: [{ type: 'image' }],
// //     },
// //     {
// //       name: 'stock_quantity',
// //       title: 'Stock Quantity',
// //       type: 'number',
// //     },
// //     {
// //       name: 'category',
// //       title: 'Category',
// //       type: 'array',
// //       of: [{ type: 'string' }],
// //     },
// //     {
// //       name: 'rating',
// //       title: 'Rating',
// //       type: 'number',
// //     },
// //     {
// //       name: 'raing',
// //       title: 'Raing', // Assuming this is a typo or another rating-like value.
// //       type: 'number',
// //     },
// //     {
// //       name: 'supplier',
// //       title: 'Supplier',
// //       type: 'array',
// //       of: [{ type: 'string' }], // Adjust the type based on the supplier structure if more details are provided.
// //     },
// //     {
// //       name: 'id',
// //       title: 'ID',
// //       type: 'string',
// //     },
// //   ],
// // };



// // // export default {
// // //   name: 'inventory',
// // //   title: 'Inventory',
// // //   type: 'document',
// // //   fields: [
// // //     { name: 'product_id', title: 'Product ID', type: 'string' },
// // //     { name: 'product_name', title: 'Product Name', type: 'string', validation: (Rule: Rule) => Rule.required() },
// // //     { name: 'description', title: 'Description', type: 'text' },
// // //     { name: 'price', title: 'Price', type: 'number', validation: (Rule: Rule) => Rule.required().min(0) },
// // //     { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
// // //     { name: 'sizes', title: 'Sizes', type: 'array', of: [{ type: 'string' }] },
    
// // //     { name: 'stock_quantity', title: 'Stock Quantity', type: 'number', validation: (Rule: Rule) => Rule.required().min(0) },
// // //     { name: 'category', title: 'Category', type: 'array', of: [{ type: 'string' }] },
// // //     {
// // //       name: 'supplier',
// // //       title: 'Supplier',
// // //       type: 'object',
// // //       fields: [
// // //         { name: 'supplier_name', title: 'Supplier Name', type: 'string', validation: (Rule: Rule) => Rule.optional() },
// // //         { name: 'contact_number', title: 'Contact Number', type: 'string', validation: (Rule: Rule) => Rule.optional() },
// // //       ],
// // //     },
// // //     { name: 'created_at', title: 'Created At', type: 'datetime' },
// // //     { name: 'updated_at', title: 'Updated At', type: 'datetime' },
// // //   ],
// // // };




// // // import { Rule } from '@sanity/types';

// // // export default {
// // //     name: 'inventory',
// // //     title: 'Inventory',
// // //     type: 'document',
// // //     fields: [
// // //       {
// // //         name: 'product_id',
// // //         title: 'Product ID',
// // //         type: 'string',
// // //         description: 'Unique identifier for the product (UUID or Number).',
// // //       },
// // //       {
// // //         name: 'product_name',
// // //         title: 'Product Name',
// // //         type: 'string',
// // //         description: 'The name of the product.',
// // //         validation: (Rule: any) => Rule.required().error('Product name is required.'),
// // //       },
// // //       {
// // //         name: 'description',
// // //         title: 'Description',
// // //         type: 'text',
// // //         description: 'A brief description of the product.',
// // //       },
// // //       {
// // //         name: 'price',
// // //         title: 'Price',
// // //         type: 'number',
// // //         description: 'Price of the product.',
// // //         validation: (Rule: Rule) =>
// // //           Rule.required()
// // //             .min(0)
// // //             .error('Price must be a positive number.'),
// // //       },
// // //       {
// // //         name: 'tags',
// // //         title: 'Tags',
// // //         type: 'array',
// // //         of: [{ type: 'string' }],
// // //         description: 'Tags associated with the product.',
// // //       },
// // //       {
// // //         name: 'sizes',
// // //         title: 'Sizes',
// // //         type: 'array',
// // //         of: [{ type: 'string' }],
// // //         description: 'Available sizes for the product.',
// // //       },
// // //       {
// // //         name: 'images',
// // //         title: 'Images',
// // //         type: 'array',
// // //         of: [{ type: 'image' }],
// // //         description: 'Product images.',
// // //       },
// // //       {
// // //         name: 'stock_quantity',
// // //         title: 'Stock Quantity',
// // //         type: 'number',
// // //         description: 'Number of items in stock.',
// // //         validation: (Rule: Rule) =>
// // //           Rule.required()
// // //             .min(0)
// // //             .error('Stock quantity must be a non-negative number.'),
// // //       },
// // //       {
// // //         name: 'category',
// // //         title: 'Category',
// // //         type: 'string',
// // //         description: 'Category of the product.',
// // //         validation: (Rule: Rule) => Rule.required().error('Category is required.'),
// // //       },
// // //       {
// // //         name: 'supplier',
// // //         title: 'Supplier',
// // //         type: 'object',
// // //         fields: [
// // //           {
// // //             name: 'supplier_name',
// // //             title: 'Supplier Name',
// // //             type: 'string',
// // //             validation: (Rule: Rule) =>
// // //               Rule.required().error('Supplier name is required.'),
// // //           },
// // //           {
// // //             name: 'contact_number',
// // //             title: 'Contact Number',
// // //             type: 'string',
// // //             validation: (Rule: Rule) =>
// // //               Rule.required()
// // //                 .regex(/^[0-9]+$/, { name: 'Phone number' })
// // //                 .error('A valid contact number is required.'),
// // //           },
// // //         ],
// // //       },
// // //       {
// // //         name: 'created_at',
// // //         title: 'Created At',
// // //         type: 'datetime',
// // //         description: 'Timestamp when the product was added.',
// // //         options: {
// // //           dateFormat: 'YYYY-MM-DD',
// // //           timeFormat: 'HH:mm',
// // //           timeStep: 1,
// // //           calendarTodayLabel: 'Today',
// // //         },
// // //       },
// // //       {
// // //         name: 'updated_at',
// // //         title: 'Updated At',
// // //         type: 'datetime',
// // //         description: 'Timestamp when the product was last updated.',
// // //         options: {
// // //           dateFormat: 'YYYY-MM-DD',
// // //           timeFormat: 'HH:mm',
// // //           timeStep: 1,
// // //           calendarTodayLabel: 'Today',
// // //         },
// // //       },
// // //     ],
// // //   };
  
// export default {
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     {
//       name: 'id',
//       title: 'ID',
//       type: 'number',
//       description: 'Unique identifier for the product',
//       validation: (Rule) => Rule.required().integer(),
//     },
//     {
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//       description: 'Name of the product',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//       description: 'Price of the product',
//       validation: (Rule) => Rule.required().min(0),
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//       description: 'Description of the product',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'category',
//       title: 'Category',
//       type: 'string',
//       description: 'Category of the product',
//       options: {
//         list: [
//           { title: "Men's Clothing", value: "men's clothing" },
//           { title: "Women's Clothing", value: "women's clothing" },
//           { title: 'Electronics', value: 'electronics' },
//           { title: 'Jewelry', value: 'jewelry' },
//         ],
//       },
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'image',
//       title: 'Image',
//       type: 'url',
//       description: 'URL to the product image',
//       validation: (Rule) => Rule.required().uri(),
//     },
//     {
//       name: 'rating',
//       title: 'Rating',
//       type: 'object',
//       description: 'Rating details',
//       fields: [
//         {
//           name: 'rate',
//           title: 'Rate',
//           type: 'number',
//           description: 'Average rating of the product',
//           validation: (Rule) => Rule.required().min(0).max(5),
//         },
//         {
//           name: 'count',
//           title: 'Count',
//           type: 'number',
//           description: 'Number of ratings',
//           validation: (Rule) => Rule.required().integer(),
//         },
//       ],
//     },
//   ],
// };
