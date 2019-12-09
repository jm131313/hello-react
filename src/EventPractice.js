import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        username: '',
        message : ''
    }

    handleChange = (e) =>  {
        this.setState({
            [e.target.name] : e.target.value
            // message: e.target.value
        })
    }

    handleClick = () => {
        alert(this.state.username +  ':' + this.state.message);
        this.setState({
            username: '',
            message: ''
            
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    /*

    constructor을 사용하면 매번 추가해 주어야 하는 단점이 있어서, 위처럼 사용

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleClick() {
        alert(this.state.message);
        this.setState({
            message: ''
        });
    }*/

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                 type="text"
                 name="username"
                 placeholder="유저명"
                 value={this.state.username}
                 onChange={this.handleChange}
                 /*onChange={   // 이벤트명은 camelCase로 작성 
                     (e) => {
                         console.log(e.target.value);

                         this.setState({
                            message : e.target.value
                         })
                     }
                 }*/
                />

                <input
                 type="text"
                 name="message"
                 placeholder="아무거나 입력해보세요"
                 value={this.state.message}
                 onChange={this.handleChange}
                 onKeyPress={this.handleKeyPress}
                 /*onChange={   // 이벤트명은 camelCase로 작성 
                     (e) => {
                         console.log(e.target.value);

                         this.setState({
                            message : e.target.value
                         })
                     }
                 }*/
                />

                <button onClick={this.handleClick}
                 /*  onClick = { () => {
                        alert(this.state.message);
                        this.setState({
                            message : ''
                        });

                    }
                }*/>확인</button>
            </div>  
        );
    }
}

export default EventPractice;