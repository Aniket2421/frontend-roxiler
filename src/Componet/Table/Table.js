import React, { useState } from 'react';


const Table = ({ fetcheddata, total, perpage, page, setPage, loading }) => {
    const [limit, seTlimit] = useState(10);
    const nextPage = () => {
        setPage(page + 1);
    }
    const previouspage = () => {
        setPage(page - 1);
    }

    return (
        loading ? (
            <h2 className="titel">Loading Table...</h2>
        ) :
            <div className='overflow-auto'>
                <table className="table table-bordered table-hover table-dark border-light">
                    <thead>
                        <tr className='table-secondary'>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Category</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody>

                        {fetcheddata?.map(e =>
                            <tr key={e.id}>
                                <th scope="row">{e.id}</th>
                                <td className='table-warning'>{e.title}</td>
                                <td className='table-warning'>{e.description}</td>
                                <td className='table-warning'>{e.price}</td>
                                <td className='table-warning'>{e.category}</td>
                                <td className='table-warning'>{e.sold.toString()}</td>
                                <td> <div>
                                    <img className="img" src={e.image} alt={e.title} />
                                </div></td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className='d-flex justify-content-center justify-content-around align-items-center'>
                    <button disabled={page === 0} onClick={previouspage} className='btn border-end' style={{ border: 0, cursor: 'pointer' }}>❮ Previous</button>
                    <div>
                        Per Page: {limit}{"  "}
                        <select
                            name=""
                            id=""
                            className="text-black border-2 "
                            onChange={(e) => seTlimit(e.target.value)}
                        >
                            <option value="10">10</option>
                            <option value="5">5</option>
                            <option value="2">2</option>
                        </select>
                    </div>
                    <button disabled={Math.floor(total / perpage) >= (page - 1)} className='btn border-start' style={{ border: 0 }} onClick={nextPage}>Next ❯</button>
                </div>

            </div>
    )
}

export default Table
