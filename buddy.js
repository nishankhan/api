//secrch link=random user api

const loadBuddy = () => {
    fetch(' https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => buddyCode(data))
}
const buddyCode = (data) => {
    // console.log(data);
    const dix = data.results;
    const buddyDiv = document.getElementById('buddys')
    for (const buddy of dix) {
        const p = document.createElement('p')
        p.innerText = `name : ${buddy.name.first} ${buddy.name.last} email : ${buddy.email}`
        buddyDiv.appendChild(p)
    }

}