import SideBar from './Main/SideBar/index'
import Header from './Header/Header'
import Main from './Main';
import Footer from './Footer/Footer'
import AllProductsDisplay from './Main/AllProductsDisplay/index.js'

function App() {
  return (
    <main>
        <div id="wrapper">
        <SideBar/>

		<div id="content-wrapper" className="d-flex flex-column">
			<div id="content">
				
				<Header/>		

				<Main/>

			</div>
			<AllProductsDisplay/>			
			<Footer/>

		</div>
		</div>
	</main>
  );
}

export default App;
