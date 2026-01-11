const theList = [
    'Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']
];

theList.pop();
theList.shift();
theList.unshift('FIRST');
theList[3] = 'hello world';
theList[2] = 'MIDDLE';
theList[theList.length - 1] = 'LAST';

console.log(theList)