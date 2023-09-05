import './SpentTime.css';

const SpentTime = ({spentTime}) => {
    // const spentTime = props.spentTime;
    // console.log(spentTime);
    // let totalTime= 0;
    // if (spentTime.length > 0) {
    //      totalTime = spentTime.reduce((initial, current) => initial + current, 0);
    // }

    // console.log(totalTime);
    const totalTime = spentTime.length > 0 ?spentTime.reduce((initial, current) => initial + current, 0):0;
    return (
        <div className='spent-time'>
            <p>Spent time on read : {totalTime} min </p>
        </div>
    );
};

export default SpentTime;