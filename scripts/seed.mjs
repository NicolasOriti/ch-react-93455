import { initializeApp } from 'firebase/app';
import {
  collection,
  connectFirestoreEmulator,
  doc,
  getFirestore,
  Timestamp,
  writeBatch,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const fetchData = async (url) => {
  const response = await fetch('https://dummyjson.com/products?limit=100');
  const { products } = await response.json();

  console.log(products);
  return products;
};

const prettify = (slug) =>
  slug
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

const seed = async () => {
  const products = await fetchData();

  const chunks = [];
  for (let i = 0; i < products.length; i += 400) {
    chunks.push(products.slice(i, i + 400));
  }

  for (const chunk of chunks) {
    const batch = writeBatch(db);

    chunk.forEach((product) => {
      batch.set(doc(db, 'products', String(product.id)), {
        title: product.title,
        titleLower: product.title.toLowerCase(),
        description: product.description,
        price: product.price,
        stock: product.stock,
        rating: product.rating,
        category: product.category,
        thumbnail: product.thumbnail,
        createdAt: Timestamp.now(),
      });
    });

    await batch.commit();
  }

  const slugs = [...new Set(products.map((product) => product.category))].sort();
  const categoriesBatch = writeBatch(db);

  slugs.forEach((slug) => {
    categoriesBatch.set(doc(collection(db, 'categories'), slug), {
      slug,
      name: prettify(slug),
    });
  });

  await categoriesBatch.commit();

  console.log(
    `Seeded ${products.length} products and ${slugs.length} categories into ` +
      `Firestore.`,
  );
};

seed()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
