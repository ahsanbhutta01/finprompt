import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/lato";
import '@fontsource/michroma';
import '@fontsource/lobster';
import { Provider } from 'react-redux'
import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';




const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  )

} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
