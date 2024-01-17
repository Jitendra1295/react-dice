class DiseComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'JEET',
            diseSize:1,
            diceValue:6,
            dieValue:[],
        }
    } 

    randomNumber=(min, max)=> {
        const randomGenrateNumber = Math.floor(Math.random() * (max - min) + min);
        console.log("randomNumber ::", randomGenrateNumber);
        return randomGenrateNumber
    } 

    rollingDice=()=>{
        let dieVal=this.state.dieValue;
        for(let i=0; i<this.state.diseSize;i++){
            dieVal[i]=this.randomNumber(1,20);
        }
        // setTimeout(() => {
            this.setState({dieValue : dieVal})
        //   }, 2000);
        console.log("rollingDice ::",this.state.dieValue,dieVal);
    }

    incrementDiseSize=()=>{
        this.setState({diseSize : this.state.diseSize+1})
        let dieVal=[];
        for(let i=0; i<this.state.diseSize;i++){
            dieVal.push(this.state.diceValue)
        }
        console.log("incrementDiseSize ::",this.state,dieVal);
        this.setState({dieValue : dieVal})
    }
    reset=()=>{
        this.setState({diseSize : 1})
        console.log("reset ::",this.state);
    }

    handleChange=(e)=>{
        let value = e.target.value
        console.log("handleChange ::", value, e.target.type);
        if (e.target.type === 'number') {
            value = parseInt(e.target.value, 10)
            if (value < e.target.min) {
                value = e.target.min
            } else if (value > e.target.max) {
                value = e.target.max
            }
        }
        this.setState({diceValue: value,dieValue:[]})
    }

    render(){
        return(
            <>
                <h2>React Dice.</h2>
                <div id='roll' class='roll-button'>
                    <button className='btn btn-primary' onClick={this.incrementDiseSize}>
                        Number Of Dice
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='btn btn-primary' onClick={this.reset}>
                        Reset
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button className='btn btn-primary' onClick={this.rollingDice}>
                        Roll All
                    </button>
                    <h4 className='text-primary'>
                        Dice Size:
                        <span
                            style={{
                                display: this.state.rolling ? 'none' : 'inline-block',
                                paddingLeft: '5px',
                            }}
                        >
                            {this.state.diseSize}
                        </span>
                    </h4>
                </div>
                <div>
                    <label htmlFor='numDice'> Number Of Size</label>
                    <input
                        type='number'
                        name='numDice'
                        id='numDice'
                        className='form-control'
                        value={this.state.diceValue}
                        onChange={this.handleChange}
                        min='1'
                        max='20'
                    />
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <DiceContainer randomNumber={this.randomNumber} dieSize={this.state.diceValue} dieValue={this.state.dieValue} numberOfDise={this.state.diseSize} />
            </>
        )
    }

}