const DiceContainer = (props) => {
    const [dise, setDise] = React.useState([]);
    const [diseValue, setDiseValue] = React.useState(props.dieValue)
    let item = diseValue[0];
    console.log("DiceContainer ::",item, props,diseValue);
    React.useEffect(() => {
        setDiseValue(props.dieValue)
        createDieValue();
    }, [item, props.numberOfDise, props.dieSize,props.dieValue, diseValue]);

    const rollDie = (e, val) => {
        console.log("rollDie ::1", props, e, val);
        let dieVal = props.dieValue;
        for (let i = 0; i < props.numberOfDise; i++) {
            if (i == e) {
                console.log("rollDie ::2", dieVal, i, e);
                dieVal[i] = props.randomNumber(1, 20);
            }
        }
        setDiseValue(dieVal)
        createDieValue();
        console.log("rollDie ::3", dieVal, diseValue);
    }

    // function randomNumber(min, max) {
    //     const randomGenrateNumber = Math.floor(Math.random() * (max - min) + min);
    //     console.log("randomNumber ::", randomGenrateNumber);
    //     return randomGenrateNumber
    // } 

    const createDieValue = () => {
        console.log("createDieValue ::", diseValue, props.dieSize);
        let dice = [];
        let containerStyle = {
            margin: `20px`,
            display: 'inline-block',
        }
        for (let i = 0; i < props.numberOfDise; i++) {
            dice.push(
                <div
                    className='die-container'
                    onClick={() => rollDie(i, true)}
                    style={containerStyle}
                >
                    <div className="grid-item" > {diseValue[i] ? diseValue[i] : props.dieSize} </div>
                </div>
            )
        }
        setDise(dice)
    }
    // const Dice=()=>{
    //     console.log("CoolButton ::",props);
    //     let faceStyle = {
    //         background: "#6495ED",
    //         outline: true
    //             ? `1px solid ${"#FFBF00"}`
    //             : 'none',
    //         height: `80px`,
    //         position: 'absolute',
    //         width: `100px`,
    //     }
    //     let f1Style = {
    //         transform: `rotateX(180deg) translateZ(${10 / 2}px)`,
    //     }
    //     let dotStyle = {
    //         background: "#000000",
    //         height: `10px`,
    //         width: `15px`,
    //     }
    //     let d4Style = {
    //         top: `${props.dieSize / 2 - 10 / 2}px`,
    //         left: `${props.dieSize / 2 - 10 / 2}px`,
    //     }
    //     let dice = [];
    //     for (let i = 0; i < props.numberOfDise; i++) {
    //         dice.push(
    //             <div className="grid-item" > {props.dieSize} </div>
    //             // <div
    //             //     className='die-container'
    //             //     // onClick={this.props.disableIndividual ? null : () => this.rollDie(null, true)}
    //             //     style={containerStyle}
    //             // >
    //             //     <div
    //             //         // className={`die roll${this.getValue()}`}
    //             //         ref={(die) => (this.die = die)}
    //             //         style={rollStyle}
    //             //     >

    //             //         <div
    //             //             className='face one'
    //             //             style={Object.assign({}, faceStyle, f1Style)}
    //             //         >
    //             //             <span
    //             //                 className='dot'
    //             //                 style={Object.assign({}, dotStyle, d4Style)}
    //             //             />
    //             //         </div>

    //             //     </div>
    //             // </div>
    //             )
    //     }
    //     console.log("dice  ::->>",dice);
    //     setDise(dice)
    // }
    return (
        <>
            <div className="grid-container">
                <div>{dise}</div>
            </div>
        </>
    )
}