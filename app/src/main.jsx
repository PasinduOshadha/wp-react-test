// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const root = createRoot(document.getElementById('app-wrap'));
root.render(<App />);

// createRoot(document.getElementById('app-wrap')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
