import React from 'react'

export default function Navigation() {
  return (
    <div>
        <div className='container'>
            <div className='w3ls-reg'>
                <div className='inputForm'>
                    <h2>fill the required details below and select your seats</h2>
                    <div className='mr_agilemain'>
                        <div className='agileits-left'>
                            <label>
                                Name
                                <span>*</span>
                            </label>
                            <input type="text" id='Username' required/>
                        </div>
                        <div className='agileits-right'>
                            <label>
                                Number of Seats
                                <span>*</span>
                            </label>
                            <input type="number" id='Numseats' required min="1"/>
                        </div>
                    </div>
                    <button onClick="">Start Selecting</button>
                </div>
                <ul className='seat_w3ls'>
                    <li className='smallBox greenBox'>
                    Selected Seat
                    </li>
                    <li className='smallBox redBox'>
                    Reserved Seat
                    </li>
                    <li className='smallBox emptyBox'>
                    Empty Seat
                    </li>
                </ul>
                <div className='seatStructure txt-center' style="overflow-x:auto;">
                    <p id='notification'></p>
                    <table id='seatsBlock'>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td>11</td>
                                <td>12</td>
                            </tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr className='seatVGap'></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                        </tbody>
                    </table>
                    <div className='screen'></div>
                    <button onClick="" disabled>Confirm Selection</button>
                </div>
                <div className='displayerBoxes txt-center' style="overflow-x:auto;">
                    <table className='Displaytable w3ls-table'width="100%">
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <th>Number of Seats</th>
                                <th>Seats</th>
                            </tr>
                            <tr>
                                <td>
                                    <textarea id="nameDisplay" disabled></textarea>
                                </td>
                                <td>
                                    <textarea id="NumberDisplay" disabled></textarea>
                                </td>
                                <td>
                                    <textarea id="seatsDisplay" disabled></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
