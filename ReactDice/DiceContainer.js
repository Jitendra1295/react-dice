const DiceContainer = (props) => {
    const [dise, setDise] = React.useState([]);
    const [diseValue, setDiseValue] = React.useState(props.dieValue)
    let item = diseValue[0];
    console.log("DiceContainer ::", item, props, diseValue);
    React.useEffect(() => {
        setDiseValue(props.dieValue)
        createDieValue();
    }, [item, props.numberOfDise, props.dieSize, props.dieValue, diseValue]);

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

    return (
        <>
            <div className="grid-container">
                <div>{dise}</div>
            </div>
        </>
    )
}