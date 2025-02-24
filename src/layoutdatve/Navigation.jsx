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
                    <button onClick="takeData()">Start Selecting</button>
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
                <div className='seatStructure txt-center'style={{overflowX: 'auto'}}>
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
                            <tr>
                                <td>A</td>
                                <td>
                                    <input type="checkbox" className='seats' value="A1" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="A2" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="A3" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="A4" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="A5" disabled></input>
                                </td>
                                <td className='seatGap'></td>
                                <td>
                                    <input type="checkbox" className='seats' value="A6" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="A7" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="A8" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="A9" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="A10" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="A11" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="A12" disabled></input>
                                </td>
                            </tr>
                            <tr>
                                <td>B</td>
                                <td>
                                    <input type="checkbox" className='seats' value="B1" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="B2" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="B3" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="B4" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="B5" disabled></input>
                                </td>
                                <td></td>
                                <td>
                                    <input type="checkbox" className='seats' value="B6" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="B7" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="B8" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="B9" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="B10" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="B11" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="B12" disabled></input>
                                </td>
                            </tr>
                            <tr>
                                <td>C</td>
                                <td>
                                    <input type="checkbox" className='seats' value="C1" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="C2" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="C3" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="C4" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="C5" disabled></input>
                                </td>
                                <td></td>
                                <td>
                                    <input type="checkbox" className='seats' value="C6" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="C7" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="C8" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="C9" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="C10" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="C11" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="C12" disabled></input>
                                </td>
                            </tr>
                            <tr>
                                <td>D</td>
                                <td>
                                    <input type="checkbox" className='seats' value="D1" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="D2" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="D3" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="D4" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="D5" disabled></input>
                                </td>
                                <td></td>
                                <td>
                                    <input type="checkbox" className='seats' value="D6" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="D7" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="D8" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="D9" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="D10" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="D11" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="D12" disabled></input>
                                </td>
                            </tr>
                            <tr>
                                <td>E</td>
                                <td>
                                    <input type="checkbox" className='seats' value="E1" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="E2" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="E3" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="E4" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="E5" disabled></input>
                                </td>
                                <td></td>
                                <td>
                                    <input type="checkbox" className='seats' value="E6" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="E7" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="E8" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="E9" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="E10" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="E11" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="E12" disabled></input>
                                </td>
                            </tr>
                            <tr className='seatVGap'></tr>
                            <tr> 
                                <td>F</td>
                                <td>
                                    <input type="checkbox" className='seats' value="F1" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="F2" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="F3" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="F4" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="F5" disabled></input>
                                </td>
                                <td></td>
                                <td>
                                    <input type="checkbox" className='seats' value="F6" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="F7" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="F8" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="F9" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="F10" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="F11" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="F12" disabled></input>
                                </td>
                            </tr>
                            <tr>
                                <td>G</td>
                                <td>
                                    <input type="checkbox" className='seats' value="G1" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="G2" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="G3" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="G4" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="G5" disabled></input>
                                </td>
                                <td></td>
                                <td>
                                    <input type="checkbox" className='seats' value="G6" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="G7" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="G8" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="G9" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="G10" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="G11" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="G12" disabled></input>
                                </td>
                            </tr>
                            <tr>
                                <td>H</td>
                                <td>
                                    <input type="checkbox" className='seats' value="H1" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="H2" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="H3" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="H4" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="H5" disabled></input>
                                </td>
                                <td></td>
                                <td>
                                    <input type="checkbox" className='seats' value="H6" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="H7" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="H8" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="H9" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="H10" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="H11" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="H12" disabled></input>
                                </td>
                            </tr>
                            <tr>
                                <td>I</td>
                                <td>
                                    <input type="checkbox" className='seats' value="I1" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="I2" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="I3" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="I4" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="I5" disabled></input>
                                </td>
                                <td></td>
                                <td>
                                    <input type="checkbox" className='seats' value="I6" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="I7" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="I8" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="I9" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="I10" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="I11" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="I12" disabled></input>
                                </td>
                            </tr>
                            <tr>
                            <td>J</td>
                                <td>
                                    <input type="checkbox" className='seats' value="J1" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="J2" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="J3" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="J4" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="J5" disabled></input>
                                </td>
                                <td></td>
                                <td>
                                    <input type="checkbox" className='seats' value="J6" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="J7" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="J8" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="J9" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="J10" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="J11" disabled></input>
                                </td>
                                <td>
                                    <input type="checkbox" className='seats' value="J12" disabled></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='screen'>
                        <h2 className='wthree'>Screen this way</h2>
                    </div>
                    <button onClick="updateTextArea()" disabled>Confirm Selection</button>
                </div>
                <div className='displayerBoxes txt-center' style={{overflowX: 'auto'}}>
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
