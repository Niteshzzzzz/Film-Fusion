import React from 'react'

function Dropdown({ title, category, setFilter }) {
    return (
        <select className='md:w-[170px] sm:text-[1rem] sm:w-[140px] md:h-[36px]' name="menu" id="meun-items" defaultValue={0} onChange={(e) => {
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


