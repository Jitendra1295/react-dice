class WelcomeBack extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'JEET',
            diseSize:1,
            diceValue:6,
            apppVersion: '1'
        }
    }

    incrementDiseSize=()=>{
        this.setState({diseSize : this.state.diseSize+1})
        console.log("incrementDiseSize ::",this.state);
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
        this.setState({diceValue: value})
    }

    render(){
        return(
            <>
                <h2>Hello {this.state.name || 'Friend'}! Welcome Back.</h2>
                <div id='roll' class='roll-button'>
                    <button className='btn btn-primary' onClick={this.incrementDiseSize}>
                        Number Of Dice
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
                <CoolButton numberOfDise={this.state.diseSize} />
            </>
        )
    }


}