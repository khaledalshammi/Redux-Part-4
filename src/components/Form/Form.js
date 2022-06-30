import React from 'react'
import './Form.css'

export default function Form() {
  return (
    <Form>
        <div className='form-group'>
            <input type="text" placeholder='Name'/>
        </div>
        <div className='form-group'>
            <input type="email" placeholder='Email'/>
        </div>
        <div className='form-group'>
            <input type="submit" placeholder='Add User'/>
        </div>
    </Form>
  )
}
