import React from 'react';
import Article from './Article'
import Card from './Card/Card'
import LastProduct from './LastProduct';

let Categories = ["Category 1","Category 2","Category 3","Category 4","Category 5",]

function Main() {
    return ( 
    <div className="container-fluid">


    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
    </div>

    <div className="row">
        <Card
            title = {"Products in Data Base"}
            info = {"135"}
            colorTheme = {"primary"}
            icon = {<i className="fas fa-clipboard-list fa-2x text-gray-300"></i>}
        />
        <Card
            title = {"Amount in products"}
            info = {"$546.456"}
            colorTheme = {"success"}
            icon = {<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>}
        />
        <Card
            title = {"Users quantity"}
            info = {"38"}
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
                    name={"Ultimo Producto"}
                    image={"imagen"}
                    desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?"}
                    id={"4"}
                />

            </div>
        </div>
        
        <Article
            Categories = {Categories}
        />

    </div>
    </div>
 );
}
 
export default Main;