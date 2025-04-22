import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Szkoly from './Pages/Szkoly'
import Uczniowie from './Pages/Uczniowie'
import Klasy from './Pages/Klasy'
import DodajU from './Pages/DodajU'
import UsunU from './Pages/UsunU'
import ModyfikujU from './Pages/ModyfikujU'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes>
			<Route path='/Szkoly' Component={Szkoly} />
			<Route path='/Klasy' Component={Klasy} />
			<Route path='/Uczniowie' Component={Uczniowie} />
			<Route path='/DodajU' Component={DodajU} />
			<Route path='/UsunU' Component={UsunU} />
			<Route path='/ModyfikujU' Component={ModyfikujU} />
		</Routes>
	</BrowserRouter>
)
