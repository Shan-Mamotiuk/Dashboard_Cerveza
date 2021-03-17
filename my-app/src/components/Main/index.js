import React, {useState, useEffect, Component} from 'react';
import Article from './Article'
import Card from './Card/Card'
import LastProduct from './LastProduct';
import AllProductsDisplay from './AllProductsDisplay'

// let Categories = ["Category 1","Category 2","Category 3","Category 4","Category 5",]

class Main extends Component {
    constructor (props) {
        super(props);
        this.state = {
            products: "",
            users: "",
            categories: "",
            errors: true,
            id: "",
            name: "",
            descripcion:"",
            image: ""
        }
    }

    fetchCall (endpoint, call, config = null) {
        fetch(endpoint, config)
            .then(res => res.json())
            .then(data => call(data))
    }
    

    componentDidMount() {
        let endpointProducts = 'http://localhost:3001/api/products';
        let callProducts = (data) => {
            
            this.setState({products: data.productos,categories: data.cantidadPorCategoría})
        }

        
        let endpointUsers = 'http://localhost:3001/api/users';
        let callUsers = (data) => {
            
            this.setState({users: data})
        }
        
        this.fetchCall(endpointProducts, callProducts);
        this.fetchCall(endpointUsers, callUsers);
    }
    componentDidUpdate(){
        // console.log("-----------------")
        // console.log(this.state.products)
        // console.log("-----------------")
        // console.log(this.state.users)
    }

    handleChange (e) {
        if (e.target.value.length !== 0) {
            this.setState({ 
                errors: false,
                [e.target.name]: e.target.value
            })
            return;
        }
        this.setState({ errors: true })
    }


   render () {
        // products="";
       let {products, users, categories} = this.state;
       
       let Categories = Object.keys(categories); 
       let productosCargados=[
           {
               category:{
                   name:""
               },
               srm_index:{
                   code:""
               }
           }
       ]
       
       if(products){
        var ultimoName= products[products.length-1].name;
        var ultimoDescripcion= products[products.length-1].description;
        var ultimoImage= products[products.length-1].image;
        var ultimoId= products[products.length-1].id;
        productosCargados= products
        
       } 
       var precioTotal=0;
       for (let i = 0; i < products.length; i++) {
           
           precioTotal = products[i].price+precioTotal;           
       }
       
       return (
        <div 
        // onLoadStart={handleClick}
        className="container-fluid">
            
            
    
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
            
        <div className="row">
            <Card
                title = {"Products in Data Base"}
                info = {products.length}
                colorTheme = {"primary"}
                icon = {<i className="fas fa-clipboard-list fa-2x text-gray-300"></i>}
            />
            <Card
                title = {"Amount in products"}
                info = {"$"+precioTotal}
                colorTheme = {"success"}
                icon = {<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>}
            />
            <Card
                title = {"Users quantity"}
                info = {users.cantidad}
                colorTheme = {"warning"}
                icon = {<i className="fas fa-user-check fa-2x text-gray-300"></i>}
            />
           
        </div>
    
        <div className="row">
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                    </div>
    
                    <LastProduct
                        name = {ultimoName}
                        image = {ultimoImage}
                        desc ={ultimoDescripcion}
                        id = {ultimoId}
                    />
    
                </div>
            </div>            
            <Article
                Categories = {Categories}
            />
        <AllProductsDisplay
            Productos = {productosCargados}    
        
        />
        </div>
        </div>
        
           
       )
   }
}

export default Main;


// // const Main = () => {
// //     const [products, setProducts] = useState({});
// //     const handleClick = () =>{
// //         fetch("http://localhost:3001/api/products")
// //         .then(res => res.json())
// //         .then(data => setProducts(data))
// //     }
// //     const [users, setUsers] = useState({});
// //     const handleUsers = () =>{
// //         fetch("http://localhost:3001/api/users")
// //         .then(res => res.json())
// //         .then(data => setUsers(data))
// //     }
 
    
    

// //     return ( 
// //     <div 

// //     onLoadStart={handleClick}
// //     className="container-fluid">
        
// //         <button
// //         className="btn btn-primary"
// //         onClick={handleClick}
// //         >
// //             cargar info
// //         </button>
// //         <button
// //         className="btn btn-primary"
// //         onClick={handleUsers}
// //         >
// //             cargar users
// //         </button>

// //     <div className="d-sm-flex align-items-center justify-content-between mb-4">
// //         <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
// //     </div>

// //     <div className="row">
// //         <Card
// //             title = {"Products in Data Base"}
// //             info = {products.cantidad}
// //             colorTheme = {"primary"}
// //             icon = {<i className="fas fa-clipboard-list fa-2x text-gray-300"></i>}
// //         />
// //         <Card
// //             title = {"Amount in products"}
// //             info = {"$546.456"}
// //             colorTheme = {"success"}
// //             icon = {<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>}
// //         />
// //         <Card
// //             title = {"Users quantity"}
// //             info = {users.cantidad}
// //             colorTheme = {"warning"}
// //             icon = {<i className="fas fa-user-check fa-2x text-gray-300"></i>}
// //         />
       
// //     </div>

// //     <div className="row">
// //         <div className="col-lg-6 mb-4">
// //             <div className="card shadow mb-4">
// //                 <div className="card-header py-3">
// //                     <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
// //                 </div>

// //                 {/* <LastProduct
// //                     name={"products.productos[5].name"}
// //                     image={products.productos[3].image}
// //                     desc={"http://localhost:3001/uploads/"+products.productos[3].image}
// //                     id={"products.productos[5].id"}
// //                 /> */}

// //             </div>
// //         </div>
        
// //         <Article
// //             Categories = {Categories}
// //         />

// //     </div>
// //     </div>
// //  );
// // }
 
// export default Main;