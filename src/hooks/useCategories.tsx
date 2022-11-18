import {useEffect, useState} from 'react';
import cafeApi from '../api/cafeApi';
import {Categoria, CategoryResponse} from '../interfaces/appInterfaces';

export const useCategories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<Categoria[]>([]);

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCategories = async () => {
    const resp = await cafeApi.get<CategoryResponse>('/categorias');
    setCategories(resp.data.categorias);
    setIsLoading(false);
  };

  return {
    categories,
    isLoading,
  };
};
