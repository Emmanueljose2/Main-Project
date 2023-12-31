import React from 'react'
import "../../style/find-car-form.css"
import { Form,FormGroup, } from 'reactstrap'
const FindcarForm = () => {
  return (
    
    <Form className='form'>
    <div className='d-flex align-items-center justify-content-between flex-wrap'>
    <FormGroup className='form__group'>
        <input type='text' placeholder='Form address' required/>
    </FormGroup>
    <FormGroup className='form__group'>
        <input type='text' placeholder='To address' required/>
    </FormGroup>
    <FormGroup className='form__group'>
        <input type='date' placeholder='Journey Date' required/>
    </FormGroup>
    <FormGroup className='form__group'>
        <input className='journey__time' type='time' placeholder='Journey time'  required/>
    </FormGroup>
    <FormGroup className='select__group'>
        <select name='' id=''>
            <option value=''>Ac
            </option>
            <option>Non Ac</option>
        </select>
    </FormGroup>
    <FormGroup className='form__group'>
    <button className="btn find__car-btn">Find car</button>
    </FormGroup>
    
    </div>
    </Form>
  )
}

export default FindcarForm