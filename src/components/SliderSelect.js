import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = () => {
  return (
    <>
      <SliderComponent label="Home value" min={0} max={250} defaultValue={20} step={5} onChange={(e, value) => console.log(value)} unit='R$' amount={3000} />

      <SliderComponent label="Down payment" min={0} max={150} defaultValue={20} step={5} onChange={(e, value) => console.log(value)} unit='R$' amount={500} />

      <SliderComponent label="Loan amount" min={0} max={1250} defaultValue={20} step={50} onChange={(e, value) => console.log(value)} unit='R$' amount={700} />

    </>
  )
}

export default SliderSelect