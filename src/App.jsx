import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {

  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)

  const [invalidPrinciple,setInvaildPrinciple] = useState(false)
  const [invalidRate,setInvaildRate] = useState(false)
  const [invalidYear,setInvaildYear] = useState(false)


  const validateInputs = (inputTag)=>{
    const {name,value} = inputTag
    if(name=="principle"){
      setPrinciple(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvaildPrinciple(false)
      }else{
        setInvaildPrinciple(true)
      }
    }else if(name=="rate"){
      setRate(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvaildRate(false)
      }else{
        setInvaildRate(true)
      }
    }else if(name=="year"){
      setYear(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvaildYear(false)
      }else{
        setInvaildYear(true)
      }
    }
  }

  const handleCalculate = (e)=>{
    e.preventDefault()
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }else{
      alert("Please fill the form completely!!!")
    }
  }

  const handleReset = ()=>{
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInvaildPrinciple(false)
    setInvaildRate(false)
    setInvaildYear(false)
  }

  return (
    <div style={{width:'100%',minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{width:'600px'}} className='bg-light rounded p-5'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest Easily!</p>
        <div className='bg-warning p-3 text-light text-center rounded'>
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5'>
          {/* principle */}
          <div className='mb-3'>
            <TextField value={principle||""} name='principle' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
          </div>
          {/* invalid principle */}
          {invalidPrinciple && <div className="mb-3 text-danger fw-bolder">
            Invalid Principle Amount!!!
          </div>}
          {/* Rate */}
          <div className='mb-3'>
            <TextField value={rate||""} name='rate' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-rate" label="Rate of Interest (%)" variant="outlined" />
          </div>
          {/* invalid rate */}
          {invalidRate && <div className="mb-3 text-danger fw-bolder">
            Invalid Rate!!!
          </div>}
          {/* Year */}
          <div className='mb-3'>
            <TextField value={year||""} name='year' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-year" label="Time Period (Yr)" variant="outlined" />
          </div>
          {/* invalid year */}
          {invalidYear && <div className="mb-3 text-danger fw-bolder">
            Invalid Year!!!
          </div>}
          <Stack direction="row" spacing={2}>
            <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple||invalidRate||invalidYear} variant="contained" style={{width:'50%',height:'70px'}} className='bg-dark'>CALCULATE</Button>
            <Button onClick={handleReset} variant="outlined" style={{width:'50%',height:'70px'}} className='border border-dark text-dark'>RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
