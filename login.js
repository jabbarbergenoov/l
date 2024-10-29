const get = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

get('http://localhost:3000/users').then(res => {
    console.log(res);
    const form = document.getElementById('form');

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        let validUser = null;

        res.forEach((user) => {
            if (user.email === username && user.password === password) {
                validUser = user;
            }
        });

        if (validUser) {
            location.href = "index.html";
        } else {
            const result = document.querySelector('.result');
            console.log(result);
            result.textContent = "Noto'g'ri email yoki parol.";
        }
    });
}).catch(error => {
    console.error('Xatolik yuz berdi:', error);
    const result = document.querySelector('.result');
    result.textContent = "Serverga ulanishda xatolik.";
});
