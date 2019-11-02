import React from 'react'
import propTypes from "prop-types";
// react 数据驱动视图
class ClassComponent extends React.Component {
    // 构造器
    // class组件中接收父组件传来的值
    // 简化对实例属性的赋值
    constructor(props){
        // 调用父类的构造函数
        super()

        this.state = {
            message: '哈哈',
            myName: props.name,
            myAge: props.age
            // 这里不能用this
        }
    }
    // 这个是声明周期钩子之一
    render() {
        return <div>
            {this.state.message} 这是一个寂寞的天<br />
            {this.props.name}-----{this.props.age}
        </div>
    }
}

// 类型检查
ClassComponent.propTypes = {
    name: propTypes.string.isRequired,
    age: propTypes.number.isRequired
}

// 设置默认值
ClassComponent.defaultProps = {
    name: '杨过'
}

export default ClassComponent