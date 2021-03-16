import React from 'react';
import Category from '../Category/Category'


function Article(props) {
    return ( 
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
        </div>
        <div className="card-body">
            <div className="row">
                        {
                            props.Categories.map(category =>
                                <Category
                                    name={category}                            
                                />
                            )
                        }                 
            </div>
        </div>
    </div>
    );
}
 
export default Article;