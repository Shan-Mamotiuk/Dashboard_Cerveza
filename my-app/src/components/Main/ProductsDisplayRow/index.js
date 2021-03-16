function ProductsDisplayRow(props) {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.desc}</td>
            <td>{props.price}</td>
            <td>
            <ul>
                <li>{props.categories}</li>
                <li>{props.categories}</li>
                <li>{props.categories}</li>
            </ul>
            </td>
            <td>
            <ul>
                    <li><span className="text-danger">{props.color}</span></li>
            </ul>
            </td>
            <td>Stock</td>
            <td><a href="#productPreview">Preview</a></td>
        </tr>
    );
}

export default ProductsDisplayRow;