import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { migrator } from './utils/database/migrator.ts';

(async () => {
  navigator.storage.persist().then((isPersisted) => {
    if (isPersisted){
      console.log("Data will be persisted!");
    } else {
      console.log("Data might not be persisted!");
    }
  })
  await migrator.migrateToLatest();
})();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
