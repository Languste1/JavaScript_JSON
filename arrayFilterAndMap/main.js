function main1(){

    //filter
    let numbers = [1,2,3,4,5,6,7,324,89,23]

    let smallNumbers = numbers.filter(n=> {
        return n < 10
    });

    console.log(smallNumbers);

    //map
    let doubledNumbers = numbers.map(n => n * 2);
    console.log(doubledNumbers);


}