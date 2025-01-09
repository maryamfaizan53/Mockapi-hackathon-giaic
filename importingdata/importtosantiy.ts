import sanityClient from './sanityClient';
import axios from 'axios';

const apiUrl = 'https://677d3ee94496848554c9b585.mockapi.io/api/inventoryupdate';



async function fetchAndImportProducts() {
  try {
    const response = await axios.get(apiUrl);
    const products = response.data;

    const productDocuments = await Promise.all(products.map(async (product: any) => ({
      _type: 'product',
      product_id: product.product_id,
      product_name: product.product_name,
      description: product.description,
      price: product.price,
      tags: product.tags,
      sizes: product.sizes,
      stock_quantity: product.stock_quantity,
      category: product.category,
      supplier: product.supplier, // You may need to adjust this depending on its structure
      image: {
        _type: 'image',
        asset: {
          _ref: await uploadImage(product.image), // You'll need to implement image uploading
        },
      },
    })));

    // Import the documents into Sanity
    const transaction = sanityClient.transaction();

    productDocuments.forEach((doc) => {
      transaction.create(doc);
    });

    await transaction.commit();
    console.log('Products imported successfully!');
  } catch (error) {
    console.error('Error importing products:', error);
  }
}

async function uploadImage(imageUrl: string) {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'base64');

    const asset = await sanityClient.assets.upload('image', buffer, {
      filename: 'product-image.svg',
    });

    return asset._id;
  } catch (error) {
    console.error('Error uploading image:', error);
    return null;
  }
}

fetchAndImportProducts();




// import { client } from './sanityClient';

// import axios from 'axios';


// interface MockAPIData {
//     inventory: any[];
//     // shipments: any[];
//     // tracking: any[];
//     // sales: any[];
//   }
  
//   async function fetchMockAPIData(mockApiUrl: string): Promise<MockAPIData> {
//     try {
//       const response = await axios.get(mockApiUrl);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching from MockAPI:', error);
//       throw error;
//     }
//   }
  
//   async function importToSanity() {
//     try {
//       // 1. Fetch data from MockAPI
//       const mockApiUrl = 'https://677d3ee94496848554c9b585.mockapi.io/api/inventory'; // Replace with your MockAPI URL
//       const data = await fetchMockAPIData(mockApiUrl);
  
//       // 2. Import inventory/products
//       console.log('Importing products...');
//       for (const product of data.inventory) {
//         const sanityProduct = {
//           _type: 'inventory',
//           product_id: product.product_id,
//           product_name: product.product_name,
//           description: product.description,
//           price: product.price,
//           tags: product.tags,
//           sizes: product.sizes,
//           stock_quantity: product.stock_quantity,
//           category: product.category,
//           supplier: {
//             supplier_name: product.supplier.supplier_name,
//             contact_number: product.supplier.contact_number,
//           },
//           created_at: product.created_at,
//           updated_at: product.updated_at,
//         };
  
//         await client.create(sanityProduct);
//       }
  
//       // // 3. Import shipments
//       // console.log('Importing shipments...');
//       // for (const shipment of data.shipments) {
//       //   const sanityShipment = {
//       //     _type: 'shipment',
//       //     shipment_id: shipment.shipment_id,
//       //     order_id: shipment.order_id,
//       //     tracking_number: shipment.tracking_number,
//       //     shipment_status: shipment.shipment_status,
//       //     estimated_delivery_date: shipment.estimated_delivery_date,
//       //     carrier: {
//       //       carrier_name: shipment.carrier.carrier_name,
//       //       contact_number: shipment.carrier.contact_number,
//       //     },
//       //     origin_address: shipment.origin_address,
//       //     destination_address: shipment.destination_address,
//       //     shipped_date: shipment.shipped_date,
//       //     delivery_date: shipment.delivery_date,
//       //   };
  
//       //   await client.create(sanityShipment);
//       // }
  
//       // // 4. Import tracking data
//       // console.log('Importing tracking data...');
//       // for (const track of data.tracking) {
//       //   const sanityTracking = {
//       //     _type: 'tracking',
//       //     tracking_id: track.tracking_id,
//       //     shipment_id: track.shipment_id,
//       //     location_history: track.location_history,
//       //     current_status: track.current_status,
//       //     last_updated: track.last_updated,
//       //   };
  
//       //   await client.create(sanityTracking);
//       // }
  
//       // // 5. Import sales/orders
//       // console.log('Importing sales...');
//       // for (const sale of data.sales) {
//       //   const sanitySale = {
//       //     _type: 'order',
//       //     order_id: sale.order_id,
//       //     customer_id: sale.customer_id,
//       //     order_date: sale.order_date,
//       //     total_price: sale.total_price,
//       //     products: sale.products.map((product: any) => ({
//       //       product_id: product.product_id,
//       //       quantity: product.quantity,
//       //       price: product.price,
//       //     })),
//       //     payment_status: sale.payment_status,
//       //     shipment_status: sale.shipment_status,
//       //     customer_details: {
//       //       name: sale.customer_details.name,
//       //       email: sale.customer_details.email,
//       //       phone: sale.customer_details.phone,
//       //       address: sale.customer_details.address,
//       //     },
//       //   };
  
//       //   await client.create(sanitySale);
//       // }
  
//       console.log('Import completed successfully!');
//     } catch (error) {
//       console.error('Error during import:', error);
//     }
//   }
  
//   // Run the import
//   importToSanity();