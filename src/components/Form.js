import React, { useState } from 'react'

const Form = () => {
  const [weight, setWeight] = useState('')
  const [hight, setHight] = useState('')
  const [alert,setAlert]=useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    if(isNaN(weight)||isNaN(hight)){
      console.log('Not Valid');
      setAlert(true)
    }else{
      setAlert(false)
      console.log(weight);
      console.log(hight);
    }
  }
  
  return (
    
   
      <div className="col-sm-4 shadow rounded px-5">
        <h1 className="text-center pt-3 text-secondery h2">BMI Calculator</h1>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col col-sm-6">
              <div className="my-3">
                <label className='form-label'>Weight(kg) :</label>
                <input type="text" className="form-control" value={weight} onChange={(e) => setWeight(e.target.value)} required/>
              </div>
            </div>
            <div className="col col-sm-6">
              <div className="my-3">
                <label className='form-label'>Hight(m) :</label>
                <input type="text" value={hight} className="form-control" onChange={(e) => setHight(e.target.value)} required/>
              </div>
            </div>
          </div>
          <input type="submit" className='btn btn-primary my-3' value='Get Bmi' />
        </form>
        {alert===true&&<div className="alert alert-danger" role='alert'>Please Enter Valid Data </div>}
      </div>
    
  )
}

export default Form