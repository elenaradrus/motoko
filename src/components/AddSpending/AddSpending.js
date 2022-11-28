import { DatePicker, Space } from 'antd';


const AddSpending = () => {

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div>
            <Space direction="vertical">
                <DatePicker onChange={onChange} />
            </Space>
        </div>
    );
}

export default AddSpending;