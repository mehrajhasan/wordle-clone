import Key from './Key';

export const Keyboard = () => {
    const keys1 = ['Q','W','E','R','T','Y','U','I','O','P'];
    const keys2 = ['A','S','D','F','G','H','J','K','L'];
    const keys3 = ['Enter','Z','X','C','V','B','N','M','Del'];

    return (
        <div className="keyboard">
            <div className="row1">
                {keys1.map((key) => {
                   return <Key keyVal={key}/>
                })}
            </div>

            <div className="row2">
                {keys2.map((key) => {
                   return <Key keyVal={key}/>
                })}
            </div>

            <div className="row3">
                {keys3.map((key) => {
                   return <Key keyVal={key}/>
                })}
            </div>
        </div>

    )
}

export default Keyboard;