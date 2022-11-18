/* eslint-disable */

import React, {createContext, useEffect, useState} from 'react';
import cafeApi from '../api/cafeApi';
import {Producto, ProductsResponse} from '../interfaces/appInterfaces';

type ProductsContextProps = {
  products: Producto[];
  loadProducts: () => Promise<void>;
  addProduct: (categoryId: string, productName: string) => Promise<Producto>;
  updateProduct: (
    categoryId: string,
    productName: string,
    productId: string,
  ) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  loadProductById: (id: string) => Promise<Producto>;
  uploadImage: (data: any, id: string) => Promise<void>;
};

export const ProductsContext = createContext({} as ProductsContextProps);

export const ProductsProvider = ({children}: any) => {
  const [products, setProducts] = useState<Producto[]>([]);
  useEffect(() => {
    loadProducts();
  }, []);
  const loadProducts = async () => {
    const resp = await cafeApi.get<ProductsResponse>('/productos?limite=50');
    setProducts([...products, ...resp.data.productos]);
  };

  const addProduct = async (
    categoryId: string,
    productName: string,
  ): Promise<Producto> => {
    try {
      const resp = await cafeApi.post<Producto>('/productos', {
        nombre: productName,
        categoria: categoryId,
      });
      setProducts([...products, resp.data]);

      return resp.data;
    } catch (error) {
      throw new Error('Not implemented');
    }
  };

  const updateProduct = async (
    categoryId: string,
    productName: string,
    productId: string,
  ) => {
    try {
      const resp = await cafeApi.put<Producto>(`/productos/${productId}`, {
        nombre: productName,
        categoria: categoryId,
      });
      setProducts(
        products.map(product => {
          return product._id === productId ? resp.data : product;
        }),
      );
    } catch (error) {
      throw new Error('Not implemented');
    }
  };

  const deleteProduct = async (id: string) => {};

  const loadProductById = async (id: string): Promise<Producto> => {
    try {
      const resp = await cafeApi.get<Producto>(`/productos/${id}`);

      return resp.data;
    } catch (error) {
      throw new Error('Not implemented');
    }
  };

  const uploadImage = async (data: any, id: string) => {};

  return (
    <ProductsContext.Provider
      value={{
        products,
        loadProducts,
        addProduct,
        updateProduct,
        deleteProduct,
        loadProductById,
        uploadImage,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};
