export const getCards = () => {
    return localStorage.getItem("cards") == null ? [] : JSON.parse(localStorage.getItem("cards"));
}

export const addCard = (newCard) => {
    return getCards() === []
    ? localStorage.setItem("cards", JSON.stringify([newCard]))
    : localStorage.setItem("cards", JSON.stringify([...getCards(), newCard]));
}

export const deleteCard = (id) => {
    const cards = getCards();
    cards.filter(c => c.id !== id);
}

export const id = () => (new Date()).getTime();