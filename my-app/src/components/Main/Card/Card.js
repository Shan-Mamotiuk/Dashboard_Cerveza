function Card(props) {
    return (

        <div className="col-md-4 mb-4">
            <div className={`card border-left-${props.colorTheme} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                            <div className={`"text-xs font-weight-bold text-${props.colorTheme} text-uppercase mb-1"`}>{props.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.info}</div>
                        </div>
                        <div className="col-auto">
                            {props.icon}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card;