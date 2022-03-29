import React from 'react'

const Index = ({food}) => {

const foodItemStyle = {
  marginBottom : "8px",
  backgroundColor : "gray",
  display : "flex",
  flexDirection : "column",
  justifyContent : "center",
  height: "150px",
  alignItems : "center",
  backgroundImage : `url(http://localhost:8080/food/image/${food._id})`,
  backgroundRepeat : "no-repeat",
  backgroundSize : "%100 %100",
  backgroundPosition : "center",
  fontSize : "24px"
}


  return (
    <>
        <div style={foodItemStyle}>
          {food ? 
          
          <>
          {food.name}
            <div style={{fontSize : "20px"}}>
              {food.price}₺
            </div>

            </>
          
          
          
          : null}
        </div>
    </>
  )

}

export default Index