import React from 'react'
import propTypes from "prop-types";

function FuncComponent({name, age}) {
    // console.log(props)
   return <div>
       <p>
           {name}下着有些伤心的小雨{age}
       </p>
   </div> 
}

// 设置检查的类型
FuncComponent.propTypes = {
    name: propTypes.string.isRequired,
    age: propTypes.number.isRequired
}

// 设置默认值
FuncComponent.defaultProps = {
    age: 100
}

export default FuncComponent