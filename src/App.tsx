import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import Careers from './pages/Careers'
import Footer from './layouts/Footer'

function App() {
	return (
		<>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home></Home>} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/careers" element={<Careers />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	)
}

export default App
