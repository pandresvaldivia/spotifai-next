import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    setupFiles: './testSetup.ts',
  },
  resolve: {
    alias: {
      '@/': '/src/',
      '@styles/': '/src/shared/styles/',
      '@libs/': '/src/shared/libs/',
      '@ui/': '/src/ui/',
      '@icons/': '/src/ui/shared/components/icons/',
      '@modules/': '/src/modules/',
      '@templates': '/src/app/components/templates/index',
      '@models/': '/src/shared/domain/models/',
      '@constants/': '/src/shared/constants/',
      '@helpers/': '/src/shared/helpers/',
      '@services/': '/src/shared/services/',
    },
  },
})
