export interface Product {
  id: number;
  documentId: string;
  Title: string;
  description: Array<{ [key: string]: any }>; // Adjust if you know the shape
  Price: string; // e.g. "₹4,399"
  Images: Image[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Image {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  documentId: string;
  ext: string;
  mime: string;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  size: number; // in KB
  width: number;
  height: number;
  hash: string;
  formats: ImageFormats;
}

export interface ImageFormats {
  thumbnail?: ImageFormat;
  small?: ImageFormat;
  medium?: ImageFormat;
  large?: ImageFormat;
}

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}

