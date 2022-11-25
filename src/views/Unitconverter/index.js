import React from 'react'
import PublicLayoutBlock from 'layouts/PublicLayoutBlock'
import BlockUnitconverter from './components/BlockUnitconverter'

const Unitconverter = () => {
  const [code, setCode] = React.useState(1)

  const handleChange = (code, wei) => {
    console.log(code)
    setCode(Number(code))
  }

  return (
    <div className="unitconverter-page">
      <h1>Unit Converter</h1>
      <div className="container">
        <p>
          PULSCAN or PULSE is often used in different denominations of its currency, such as Wei for interacting with
          smart contracts and Gwei for calculating gas prices. Use our Unit Converter to easily convert between them!
          For more info on unit conversion, read our <p>knowledge base article.</p>
        </p>
        <div className="block">
          <a href="#">[Reset]</a>

          <BlockUnitconverter handleChange={handleChange} code={code} name={'Wei'} wei={18} />
          <BlockUnitconverter handleChange={handleChange} code={code} name={'KWei'} wei={15} />
          <BlockUnitconverter handleChange={handleChange} code={code} name={'MWei'} wei={12} />
          <BlockUnitconverter handleChange={handleChange} code={code} name={'GWei'} wei={9} />
          <BlockUnitconverter handleChange={handleChange} code={code} name={'Szabo'} wei={6} />
          <BlockUnitconverter handleChange={handleChange} code={code} name={'Finney'} wei={3} />
          <BlockUnitconverter handleChange={handleChange} code={code} name={'Ether'} wei={-0} />
          <BlockUnitconverter handleChange={handleChange} code={code} name={'KEther'} wei={-3} />
          <BlockUnitconverter handleChange={handleChange} code={code} name={'MEther'} wei={-6} />
          <BlockUnitconverter handleChange={handleChange} code={code} name={'GEther'} wei={-9} />
          <BlockUnitconverter handleChange={handleChange} code={code} name={'TEther'} wei={-12} />
        </div>
      </div>
    </div>
  )
}

Unitconverter.Layout = PublicLayoutBlock
export default Unitconverter
