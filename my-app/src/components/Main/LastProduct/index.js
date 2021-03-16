function LastProduct(props) {
    return (
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={'http://localhost:3000'+props.image} alt="dummy product" />
                <h3>{props.name}</h3>
            </div>
            <p>{props.desc}</p>
            <a target="_blank" rel="nofollow" href={"http://localhost:3000/products/"+props.id}>View more details</a>
        </div>
    );
}

export default LastProduct;