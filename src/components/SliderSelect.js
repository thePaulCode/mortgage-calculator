import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({data, setData}) => {
  const bank_limit = 10000
  return (
    <>
      <SliderComponent label="Home value" min={1000} max={bank_limit} defaultValue={data.homeValue} value={data.homeValue} step={100} onChange={(e, value) => setData({ homeValue: value})} unit='R$' amount={data.homeValue} />

      <SliderComponent label="Down payment" min={0} max={150} defaultValue={20} step={5} onChange={(e, value) => console.log(value)} unit='R$' amount={500} />

      <SliderComponent label="Loan amount" min={0} max={1250} defaultValue={20} step={50} onChange={(e, value) => console.log(value)} unit='R$' amount={700} />

    </>
  )
}

export default SliderSelect