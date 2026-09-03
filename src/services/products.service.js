import { collection, getDocs, query, where, startAfter, limit } from 'firebase/firestore';

import { db } from '../firebase/config.js';

const PAGE_SIZE = 10;

export const getProducts = async ({ category, priceRange, cursor } = {}) => {
  const constraints = [];

  if (category) {
    constraints.push(where('category', '==', category));
  }

  if (priceRange) {
    constraints.push(where('price', '>=', priceRange[0]));
    constraints.push(where('price', '<=', priceRange[1]));
  }

  if (cursor) {
    constraints.push(startAfter(cursor));
  }

  constraints.push(limit(PAGE_SIZE));

  const snapshot = await getDocs(query(collection(db, 'products'), ...constraints));

  console.log('este es snapshot', { snapshot });

  return {
    products: snapshot.docs.map((snapshot) => ({ id: snapshot.id, ...snapshot.data() })),
    cursor: snapshot.docs.at(-1) ?? null,
    hasMore: snapshot.docs.length === PAGE_SIZE,
  };
};
