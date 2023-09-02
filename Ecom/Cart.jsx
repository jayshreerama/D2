import React, { useEffect, useState } from 'react'
import '../Ecom/Cards.css'
import GooglePayButton from '@google-pay/button-react'
const Cart = ({cart,setCart,handleChange}) => {

  // const[add,setAdd]=useState(0)



  const[price,setPrice]=useState(0)

  function handlePrice(){
    let ans =0
    cart.map((item)=>ans+=item.price*item.amount)
    setPrice(ans)
  }

  useEffect(()=>{
    handlePrice()
  })

  function handleRemove(id){
    let arr = cart.filter((item)=>item.id!==id)
    setCart(arr)
  }
  return (
    <div className='cart'>
      <table width={'100%'} border={2}>
        <tr>
          <td>Image</td>
          <td>Title</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Incre</td>
          <td>Decr</td>
          <td>Remove</td>
          <td></td>
          <td></td>
        </tr>
        {cart && cart.map((item)=>{
          return(
            <tbody>
              <tr>
                <td><img src={item.image} alt='' height={'60px'} width={'60px'}></img></td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td><button onClick={()=>handleChange(item,1)}>+</button></td>
                <td><button onClick={()=>handleChange(item,-1)}>-</button></td>
                <td><button onClick={()=>handleRemove(item.id)}>Remove</button></td>
                <td></td>
              </tr>
            </tbody>
          )
        })}
        <tfoot>
          <tr>
            <td><b>Final Amount</b></td>
            <td colSpan={5}><b>{price}</b></td>
            <td><button>
            <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
            </button></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Cart
