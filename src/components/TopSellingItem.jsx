import React from 'react'

function TopSellingItem({ item }) {
  return (
    <tr>
        <th scope='row'>
            <a href='#'>
                <img src={item.preview} alt=" " />
            </a>
        </th>
        <td>
            <a href='#' className='text-primary fw-bold'>
                {item.name}
            </a>
        </td>
        <td><span>&#8369;</span>{item.price.toFixed(2)}</td>
        <td className='fw-bold'>{item.sold}</td>
        <td><span>&#8369;</span>{(item.price * item.sold).toLocaleString('en-US')}</td>
    </tr>
  );
}

export default TopSellingItem