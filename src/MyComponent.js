import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number : 0
        }
    }
    static defaultProps = {
        name : '기본 이름'
    }

    static propTypes = {
        name : PropTypes.string,
        age : PropTypes.number.isRequired
    }

    render() {
        return (
            <div>
                {/*<p>나의 새롭고 멋진 컴포넌트</p>*/}
                <p>안녕하세요. 제 이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age}살 입니다.</p>
                <p>숫자 :  {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number : this.state.number + 1
                    })
                }
                }>더하기</button>
            </div>
        )
    }

    /*
        * 쉬어가는 타임.
        function twice(value) {
            return value * 2 ;
        }
        ↕ 상하동일
        const triple = (value) => value * 3;

        
    */
}
/*
MyComponent.defaultProps = {
    name : '기본 이름'
}
*/

export default MyComponent;