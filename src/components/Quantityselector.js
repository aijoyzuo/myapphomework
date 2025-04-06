
export default function QuantitySelector({value,setValue}) {
    return (
        <div className="input-group input-group-sm my-3">
            <button 
                className="btn btn-outline-secondary" 
                type="button" 
                onClick={()=> setValue(Math.max(1, value-1))}
                >-</button>
            <input 
                type="number" 
                className="form-control text-center" 
                value={value} 
                readOnly />
            <button 
                className="btn btn-outline-secondary" 
                type="button"
                onClick={()=> setValue(Math.max(1, value+1))} 
                >+</button>
        </div>
    )
}
