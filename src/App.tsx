import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './utils/page-elements/Header'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import Careers from './pages/Careers'
import Footer from './utils/page-elements/Footer'

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
			{/* <Footer /> */}
		</>
	)
}

export default App
