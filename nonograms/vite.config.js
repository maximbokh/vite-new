import { defineConfig} from "vite";
import eslint from 'vite-plugin-eslint';

export default defineConfig ({
    base: '/vite-new/nonograms',
    plugins: [eslint()]
})
