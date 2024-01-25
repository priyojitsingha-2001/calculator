import { useState } from 'react'

export default function Calculator() {
    const keys = [
        "(", ")", "%", "AC",
        "7", "8", "9", "÷",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "=", "+"
    ]

    function getButtonColor(key) {
        switch (key) {
            case 'AC':
                return 'bg-yellow-500';
            case '=':
                return 'bg-green-500';
            default:
                return 'bg-gray-700';
        }
    }
    const [expression, setExpression] = useState("");
    const handleChange = (e) => setExpression(e.target.value)

    const insertNumber = (key) => {
        switch (key) {
            case 'AC':
                setExpression('');
                break;
            case '=':
                setExpression(eval(expression));
                break;
            case '÷':
                setExpression(expression + "/");
                break;
            case '×':
                setExpression(expression + "*");
                break;
            default:
                setExpression(expression + key);
                break;
        }
    }
    return (
        <div className='h-screen bg-slate-800 flex justify-center items-center'>
            <div className='container mx-auto sm:w-2/3 md:w-1/2 lg:w-1/3 px-6'>
                <div className="display mb-4">
                    <input type="text" value={expression} onChange={handleChange} className="p-2 border border-gray-300 rounded-md w-full" />
                </div>
                <div className="controls grid grid-cols-4 gap-2">
                    {keys.map((key, index) => (
                        <button key={index}
                            className={`text-white p-2 rounded-md ${getButtonColor(key)}`}
                            onClick={() => insertNumber(key)}
                        >
                            {key}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
