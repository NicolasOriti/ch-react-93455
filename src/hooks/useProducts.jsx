import { useState, useEffect, useCallback } from 'react';

import { getProducts } from '../services/products.service.js';

export const useProducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [cursor, setCursor] = useState(null);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    const loadFirstPage = async () => {
      setLoading(true);
      setError(null);

      try {
        const productsPage = await getProducts({ category });

        if (!active) return;

        setProducts(productsPage.products);
        setCursor(productsPage.cursor);
        setHasMore(productsPage.hasMore);
      } catch (err) {
        console.log(err);
        if (active) setError(err);
      } finally {
        if (active) setLoading(false);
      }
    };

    loadFirstPage();

    return () => {
      active = false;
    };
  }, [category]);

  const loadMore = useCallback(async () => {
    if (!cursor || loadingMore) return;

    setLoadingMore(true);
    try {
      const productsPage = await getProducts({ category, cursor });
      setProducts((prevProducts) => [...prevProducts, ...productsPage.products]);
      setCursor(productsPage.cursor);
      setHasMore(productsPage.hasMore);
    } catch (err) {
      console.log('loadmore', err);
      setError(err);
    } finally {
      setLoadingMore(false);
    }
  }, [cursor, loadingMore, category]);

  return { products, loading, loadingMore, error, hasMore, loadMore };
};
