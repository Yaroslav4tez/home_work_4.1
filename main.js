let nam = prompt("ім'я користувача");

if (nam && /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ']+$/.test(nam)) {
    alert(`Hello, ${nam}! How are you?`);
} else {
    alert("Please only string and with out numbers and symbols");
}