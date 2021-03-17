function ProductsDisplayRow(props) {
    let colorSrm = props.color;
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
                    
                    <li style={{listStyle: 'none', display: 'flex'}}> 
                        <div style = {{backgroundColor: colorSrm, display:'inline-block',height: '20px', width: '20px', marginRight: '20px', marginLeft:'-10px', borderRadius: '40px' }}></div>
                        <span  style = {{color: colorSrm }} >{colorSrm}</span>
                    </li>
            </ul>
            </td>
            <td>Stock</td>
            <td><a href={props.preview}>Preview</a></td>
        </tr>
    );
}

export default ProductsDisplayRow;