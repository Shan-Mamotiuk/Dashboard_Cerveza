function ProductsDisplayRow(props) {
    let color= props.color
    return (

        <tr>
            <td>{props.name}</td>
            <td>{props.desc}</td>
            <td>{props.price}</td>
            <td>
            <ul>
                <li>{props.categories}</li>
            </ul>
            </td>
            <td>
            <ul>
                    {/* <li><div style={"background-color:red"}></div></li> */}
                    <li><span className="text-danger"  color={props.color} >{props.color}</span></li>
            </ul>
            </td>
            <td>Stock</td>
            <td><a href={props.preview}>Preview</a></td>
        </tr>
    );
}

export default ProductsDisplayRow;