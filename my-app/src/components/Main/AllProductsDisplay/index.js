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
                            <ProductsDisplayRow
								name={"Nombre del producto"}
								desc={"Descripcion del producto"}
								price={"Precio del producto"}
								preview={"Preview"}
								categories={"Categorias"}
								color={"Color del producto"}
							/>
							<ProductsDisplayRow
								name={"Nombre del producto"}
								desc={"Descripcion del producto"}
								price={"Precio del producto"}
								preview={"Preview"}
								categories={"Categorias"}
								color={"Color del producto"}
							/>
							<ProductsDisplayRow
								name={"Nombre del producto"}
								desc={"Descripcion del producto"}
								price={"Precio del producto"}
								preview={"Preview"}
								categories={"Categorias"}
								color={"Color del producto"}
							/>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default AllProductsDisplay;