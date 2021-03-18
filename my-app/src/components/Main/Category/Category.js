import React from 'react';
// import Resourses from '../../../requests/Resourses';

function Category(props) {
    return ( 
        <div className="col-lg-6 mb-4">
        <div className="card bg-info text-white shadow">
            <div className="card-body">
                {props.name} : {props.info}
            </div>
        </div>
        </div>  );
}
 
export default Category;