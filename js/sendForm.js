// const sendForm = () => {
//     const form = document.querySelector('.modal');

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const text = form.querySelector('input[type=text]');
//         const tel = form.querySelector('input[type=tel]');
//         const email = form.querySelector('input[type=email]');

//         const sendObj = {
//             name: text.value,
//             phone: tel.value,
//             email: email.value,
//         }
//         fetch('https://jsonplaceholder.typicode.com/posts', {
//                 method: 'POST',
//                 body: JSON.stringify(sendObj),
//                 headers: {
//                     'Content-type': 'application/json; charset=UTF-8',
//                 },
//             })
//             .then((response) => response.json())
//             .then((json) => console.log(json))
//             .finally(() => {
//                 console.log('The form is cleared');

//             })
//     });
// };

// sendForm();

const sendForm = () => {
    const form = document.querySelector('.modal');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Сбор данных формы через FormData
        const formData = new FormData(form);
        const sendObj = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
        };

        // Дополнительная проверка на пустые поля (на случай, если required не сработал)
        if (!sendObj.name || !sendObj.phone || !sendObj.email) {
            alert('Пожалуйста, заполните все обязательные поля.');
            return;
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(sendObj),
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Ошибка сети: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log('Успешный ответ:', data);
                alert('Ваша заявка успешно отправлена!');
                form.reset(); // Очищаем форму
            })
            .catch((error) => {
                console.error('Ошибка при отправке:', error);
                alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
            });
    });
};

sendForm();