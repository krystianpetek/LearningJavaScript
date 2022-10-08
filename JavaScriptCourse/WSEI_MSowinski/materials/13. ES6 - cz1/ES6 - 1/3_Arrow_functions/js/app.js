import zadanie00 from './zadanie00.js';

// task 1
{
    const function1 = () => console.log('Hello world!');
    function1();
}

// task 2
{
    const function2 = (number = 5) => number * 2;
    console.log(function2(11));
    console.log(function2());
}

// task 3
{
    const function3 = (param1, param2) => param1 > param2 ? param1 : param2;
    console.log(function3(6, 34));
    console.log(function3(612, 4));
}

// task 04
{
    const getSecondMaxNumber = (array) => array.filter((a, b, c) => c.indexOf(a) === b).sort((a, b) => b - a)[1];

    const array = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9];
    console.log(getSecondMaxNumber(array));
}

// task 05
{
    const function5 = ((param) => (param))('passed parameter');
    console.log(function5);
}

//task 06
{
    const function6 = (number = 6) => {
        if (number > 10 || number < 1)
            throw (error);

        if (number !== 10) {
            const interval = setInterval(() => {
                if (number >= 10)
                    clearInterval(interval);
                console.log('Hello ', number++);
            }, 1000);
        }
    };

    function6(4);
}