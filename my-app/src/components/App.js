import SideBar from './SideBar'
import Header from './Header'
import Main from './Main';
import Footer from './Footer'
import Card from './Main/Card.js'

function App() {
  return (
    <>
        <SideBar/>

		<div id="content-wrapper" className="d-flex flex-column">
			<div id="content">


				<Header/>		

				<Main/>



				 
				
				
			</div>			
			<Footer/>

		</div>
    </>
  );
}

export default App;
