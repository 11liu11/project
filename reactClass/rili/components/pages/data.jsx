import React, { Component } from 'react';
import {store,actions,SHOWDATE,HIDEDATA } from "../../reduxs";

class Data extends Component {
    constructor(props){
        super(props)
      
        this.state = {
            date:store.getState().nowDate,
            arr:[],
            num:store.getState().num,
            showdate:null,
            unsubscribe: store.subscribe(this.onchange.bind(this))
        }
      
       
    }
    changeData(i){
       
        var str=store.getState().newDate.getFullYear()+"年"+(store.getState().newDate.getMonth()+1)+"月"+i+"日"
       
        store.dispatch(actions[SHOWDATE](str))
        store.dispatch(actions[HIDEDATA](true))
       
    }
    onchange(){
            this.setState({
                num:store.getState().num,
                arr:[],
            })
    }
   componentWillUnmount(){
        this.state.unsubscribe()
    }
    render() {
        console.log(this.state.date)

        let now =this.state.date,
            year = now.getFullYear(),
            mon = now.getMonth(),
            day = now.getDate(),
            prevAllDay = new Date(year,mon+this.state.num,0).getDate(),
            prevDates = new Date(year,mon+this.state.num,0).getDay(),
            nowAllDay = new Date(year,mon+this.state.num+1,0).getDate(),
            trs = Math.ceil((prevDates+nowAllDay)/7);
        for(var i=0;i<trs;i++){
            var brr = [];
            for(var j=0;j<7;j++){
                var num = ((i*7)+j+1)-prevDates;
                if(num<1){
                    brr.push(
                        <td key={i+"-"+j} className="not-active">{num+prevAllDay}</td>
                    )
                }else if(num>nowAllDay){
                    brr.push(
                        <td key={i+"-"+j} className="not-active">{num-nowAllDay}</td>
                    )
                }else{
                    brr.push(
                        <td key={i+"-"+j} className="active" onClick={this.changeData.bind(this,num)}>{num}</td>
                    )
                }
            }
            this.state.arr.push(
                <tr key={i}>{brr}</tr>
            )
        }

        return (
            <table className="table">
                <thead>
                    <tr>
                        <td>一</td>
                        <td>二</td>
                        <td>三</td>
                        <td>四</td>
                        <td>五</td>
                        <td>六</td>
                        <td>日</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.arr}
                </tbody>
            </table>
        );
    }
    
}

export default Data;