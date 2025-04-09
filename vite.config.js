import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// eslint-disable-next-line no-unused-vars
import { Card, CardContent } from "./src/components/ui/card";
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   https: true,
  //   host: 'localhost',
  //   port: 3000,
  // },
  resolve: {
    alias: {
      '@': path.resolve(path.dirname(new URL(import.meta.url).pathname), './src'),
    },
  },
});
