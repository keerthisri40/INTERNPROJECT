let age = () => {
    let input = document.getElementById("in").value;
    let dob = new Date(input);
    let currdate = new Date();
    let res = document.getElementById("p1");

    let ageyr = currdate.getFullYear() - dob.getFullYear();
    let agemon = currdate.getMonth() - dob.getMonth();
    let agedate = currdate.getDate() - dob.getDate();

    if (agedate < 0) {
        let lastmon = new Date(currdate.getFullYear(), currdate.getMonth(), 0);
        agedate += lastmon.getDate();
        agemon--;
    }
    if (agemon < 0) {
        agemon += 12;
        ageyr--;
    }
    res.textContent = `You are ${ageyr} years, ${agemon} months, ${agedate} days old.`;
}