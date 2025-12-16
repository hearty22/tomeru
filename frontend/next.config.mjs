import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

// 1. Definimos las rutas manualmente (necesario en .mjs)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 2. Cargamos el .env que está en la carpeta de atrás (../.env)
// Esto inyecta las variables en process.env
dotenv.config({ path: join(__dirname, '../.env') });

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Aquí va tu configuración de Next.js
  reactStrictMode: true,
  
  // Opcional: Si usas imágenes de dominios externos
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

// 3. ¡IMPORTANTE! Usar export default, NO module.exports
export default nextConfig;
