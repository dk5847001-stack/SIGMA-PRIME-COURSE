function Price({ oldPrice, newPrice }) {
    return (
        <div className="d-flex gap-3 align-items-center green">
            <span className="offset-3">
                <del>₹{oldPrice}</del>
            </span>

            <span>
                <b>₹{newPrice}</b>
            </span>
        </div>
    );
}

export default Price;