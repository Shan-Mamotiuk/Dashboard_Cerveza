import ProductsDisplayRow from "../ProductsDisplayRow/index"

function AllProductsDisplay(props) {

	return (
		<div className="card shadow mb-4">
			<div className="card-body">
				<div className="table-responsive">
					<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
						<thead>
							<tr>
								<th>Name</th>
								<th>Description</th>
								<th>Price</th>
								<th>Categories</th>
								<th>Colors</th>
								<th>Stock</th>
								<th>Preview</th>
							</tr>
						</thead>
						<tfoot>
							<tr>
								<th>Name</th>
								<th>Description</th>
								<th>Price</th>
								<th>Categories</th>
								<th>Colors</th>
								<th>Stock</th>
								<th>Preview</th>
							</tr>
						</tfoot>
						<tbody>
						{/* {console.log(props.Productos)} */}
						{
							
                            props.Productos.map(producto =>
                                <ProductsDisplayRow
								name={producto.name}
								desc={producto.description}
								price={"$"+producto.price}
								preview={"http://localhost:3001/products/"+producto.id}
								categories={producto.category.name}
								color={producto.srm_index.code}
							/>
                            )
                        }
							
                            
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default AllProductsDisplay;