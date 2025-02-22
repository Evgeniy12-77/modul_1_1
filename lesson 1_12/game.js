'use strict';

'use strict';

window.start = (() => {
    const gameRus = ['камень', 'ножницы', 'бумага'];
    const gameEng = ['rock', 'scissors', 'paper'];

    // Функция для случайного выбора
    function getRandomIntInclusive_1(min, max) {
        min = Math.ceil(0);
        max = Math.floor(2);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let selectedLanguage; // Переменная для выбранного языка

    // Функция для выбора языка
    const chooseLanguage = () => {
        selectedLanguage = prompt('Выберите язык / Choose a language (1 - Русский / 2 - English)');
        if (selectedLanguage !== '1' && selectedLanguage !== '2') {
            alert('Неверный выбор, попробуйте снова. / Invalid choice, please try again.');
            return chooseLanguage();
        }
    };

    const playGame = () => {
        let num = getRandomIntInclusive_1(0, 2);
        let ansver = selectedLanguage === '1' ? gameRus : gameEng;

        const userAnswer = () => {
            let ansver_1 = prompt((selectedLanguage === '1' ? 'камень, ножницы, бумага?' : 'rock, scissors, paper?'));
            if (!ansver.includes(ansver_1)) {
                alert((selectedLanguage === '1' ? 'Неверный ввод, попробуйте снова.' : 'Invalid input, please try again.'));
                return userAnswer();
            }
            ansver_1 = ansver.indexOf(ansver_1);
            evaluateGame(num, ansver_1);
        };

        userAnswer();
    };

    const evaluateGame = (num, ansver_1) => {
        if (num === ansver_1) {
            alert(selectedLanguage === '1' ? 'Ничья' : 'It\'s a tie');
        } else if (num < ansver_1) {
            alert(selectedLanguage === '1' ? 'Вы проиграли' : 'You lost');
        } else {
            alert(selectedLanguage === '1' ? 'Вы выиграли' : 'You won');
        }
        playAgain();
    };

    const playAgain = () => {
        const again = prompt((selectedLanguage === '1' ? 'Хотите сыграть снова? (да/нет)' : 'Do you want to play again? (yes/no)')).toLowerCase();
        if ((selectedLanguage === '1' && again === 'да') || (selectedLanguage === '2' && again === 'yes')) {
            playGame();
        } else {
            alert(selectedLanguage === '1' ? 'Спасибо за игру!' : 'Thank you for playing!');
        }
    };

    chooseLanguage(); // Выбор языка перед началом игры
    playGame(); // Начать игру
});