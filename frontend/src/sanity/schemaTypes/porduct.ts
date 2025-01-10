const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'ID',
        type: 'number',
        description: 'Unique identifier for the product',
       
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Name of the product',
        
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'Price of the product',
       
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Description of the product',
       
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        description: 'Category of the product',
        options: {
          list: [
            { title: "Men's Clothing", value: "men's clothing" },
            { title: "Women's Clothing", value: "women's clothing" },
            { title: 'Electronics', value: 'electronics' },
            { title: 'Jewelry', value: 'jewelry' },
          ],
        },
     
      },
      {
        name: 'image',
        title: 'Image',
        type: 'url',
        description: 'URL to the product image',
      
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'object',
        description: 'Rating details',
        fields: [
          {
            name: 'rate',
            title: 'Rate',
            type: 'number',
            description: 'Average rating of the product',
          
          },
          {
            name: 'count',
            title: 'Count',
            type: 'number',
            description: 'Number of ratings',
        
          },
        ],
      },
    ],
  };
 export default product; 