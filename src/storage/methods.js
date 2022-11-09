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
    const newCards = cards.filter(c => c.id !== id);
    localStorage.setItem("cards", JSON.stringify(newCards));
}

export const updateCard = (id, newCard) => {
    const cards = getCards();
    const newCards = cards.filter(c => c.id !== id);
    localStorage.setItem("cards", JSON.stringify([...newCards, newCard]));
}

export const id = () => (new Date()).getTime();