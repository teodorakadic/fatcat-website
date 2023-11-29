import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import ContactUs from './pages/ContactUs'
import FrontPage from './pages/FrontPage'

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<FrontPage></FrontPage>} />
					<Route path="/contact-us" element={<ContactUs />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
