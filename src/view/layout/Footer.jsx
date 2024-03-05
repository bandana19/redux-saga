import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteData, upDataName} from '../../service/action/UserAction'

const Footer = () => {
  const { student } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [rollNo, setRollNo] = useState("")
  const [indexNo,setIndexNo]=useState(-1)

  function editData(item,index){
    setName(item.name)
    setAddress(item.address)
    setRollNo(item.rollNo)
    setIndexNo(index)
  }

  return (
    <div>
      <div className='mt-4'>
        <input type="text" value={name} placeholder='Enter Name'
          onChange={(e) => setName(e.target.value)} />
        <input type="text" value={address} placeholder='Enter Address'
          onChange={(e) => setAddress(e.target.value)} />
        <input type="text" value={rollNo} placeholder='Enter RollNo'
          onChange={(e) => setRollNo(e.target.value)} />
        <button className='btn btn-success ml-3'
          onClick={() => dispatch(addData({name,address,rollNo}))}>Add Data</button>
        <button className='btn btn-warning'
        onClick={()=>dispatch(upDataName({name,address,rollNo},indexNo))}>Update Name</button>
      </div>
      <table className='mt-4'>
        <thead className='bg-dark text-center text-white '>
          <tr>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>roll NO</th>
            <th>DELETE DATA</th>
            <th>EDIT DATA</th>
          </tr>
        </thead>
        <tbody>
          {
            student.map((item,index) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.rollNo}</td>
                <td><button className='btn btn-danger'
                onClick={()=>dispatch(deleteData(index))}>Delete Data</button></td>
                <td><button className='btn btn-primary'
                onClick={()=>editData(item,index)}>Edit Data</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Footer