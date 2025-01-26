import React from 'react'

function Dropdown({ title, category, setFilter }) {
    return (
        <select name="menu" id="meun-items" className='' defaultValue={0} onChange={(e) => {
            e.preventDefault()
            setFilter(e.target.value)
        }}>
            <option disabled>{title}</option>
            {
                category.map((c, i) => <option key={i} value={c} >{c.toUpperCase()}</option>
                )
            }
        </select>
    )
}

export default Dropdown


