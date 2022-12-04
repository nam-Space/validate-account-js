const validate = (value) => {
    const check = /^[_a-z0-9]{6,}$/;
    if (check.test(value)) {
        console.log("Success");
    } else {
        console.log("Fail");
    }
};
