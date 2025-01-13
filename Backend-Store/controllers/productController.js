import Product from '../models/productModel.js';
import fetchImagesFromS3 from '../utils/fetchImagesFromS3.js'; 

// Fetch images from S3 and save products to MongoDB
export const saveProducts = async (req, res) => {
    try {
        const images = await fetchImagesFromS3();

        const groupedImages = images.reduce((acc, image) => {
            const folder = image.folder;
            acc[folder] = acc[folder] || [];
            acc[folder].push(image.url);
            return acc;
        }, {});

        for (const [folder, imageUrls] of Object.entries(groupedImages)) {
            const productData = {
                title: folder.replace(/_/g, ' '),
                description: `Description for ${folder}`,
                price: Math.floor(Math.random() * 1000) + 100,
                discount: 0,
                sizes: ['S', 'M', 'L'],
                images: imageUrls,
                category: 'MensCollection',
            };

            const product = new Product(productData);
            await product.save();
        }

        res.status(200).json({ message: 'Products saved successfully' });
    } catch (error) {
        console.error('Error saving products:', error);
        res.status(500).json({ error: 'Failed to save products' });
    }
};

// Fetch products for the frontend
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};
