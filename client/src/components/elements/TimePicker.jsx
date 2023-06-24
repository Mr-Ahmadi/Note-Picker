import Form from 'react-bootstrap/Form';

const TimePicker = ({duration, currentTime: {hour, min, sec}}) => {
  return (
    <div className='row'>
        <div className='col'>
            <Form.Select id='hour' defaultValue={hour}>
                {[...Array(duration.hour + 1).keys()].map(num => <option key={`hour-${num}`}>{num}</option>)}
            </Form.Select>
        </div>
        <div className='col'>
            <Form.Select id='min' defaultValue={min}>
                {[...Array((duration.hour === 0) ? (duration.min + 1) : 60).keys()].map(num => <option key={`min-${num}`}>{num}</option>)}
            </Form.Select>
        </div>
        <div className='col'>
            <Form.Select id='sec' defaultValue={sec}>
                {[...Array((duration.min === 0) ? (duration.sec + 1) : 60).keys()].map(num => <option key={`sec-${num}`}>{num}</option>)}
            </Form.Select>
        </div>
    </div>
  )
}

export default TimePicker