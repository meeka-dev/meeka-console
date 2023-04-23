import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import setupRouter from './router'
import setupPlugins from './plugins'

async function bootstrap() {
  const app = createApp(App)
  await setupRouter(app)
  setupPlugins()
  app.mount('#app')
}

void bootstrap()
