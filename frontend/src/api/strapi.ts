import { Product } from '../types';

const API_URL = 'https://different-cactus-93e91d596d.strapiapp.com/';

export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${API_URL}api/products?populate=*`);
  const data = await res.json();
  return data.data;
}

export async function loginUser(email: string, password: string) {
  const res = await fetch(`${API_URL}api/auth/local`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ identifier: email, password }),
  });
  return res.json();
}
