function calculation() {
    const dobValue = document.getElementById("dob").value;
    if (dobValue === '') {
        alert("Please enter your date of birth.");
        return;
    }
    const dob = new Date(dobValue);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    document.getElementById("result").innerText = `Your age is: ${age} years`;
}