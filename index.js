const join_card = document.getElementById("join");
const books_card = document.getElementById("books");
const about_card = document.getElementById("about");
const faq_card = document.getElementById("faq");

const small_cards = [join_card, books_card, about_card, faq_card];

const join_expanded_card = document.getElementById("join-expanded-container");
const books_expanded_card = document.getElementById("books-expanded-container");
const about_expanded_card = document.getElementById("about-expanded-container");
const faq_expanded_card = document.getElementById("faq-expanded-container");

const big_cards = [join_expanded_card, books_expanded_card, about_expanded_card, faq_expanded_card];

const shrink_bars = Array.from(document.getElementsByClassName("card-shrink-bar"));


function onClickSmallCard(e) {

    small_cards.forEach(card => card.style.prev_display = card.style.display);
    small_cards.forEach(card => card.style.display = "none");

    big_cards.forEach(card => card.style.prev_display = card.style.display);
    big_cards.forEach(card => card.style.display = "initial");
    
    console.log(this);
    console.log(small_cards[0]);

    const index = small_cards.indexOf(this);
    if (typeof index !== -1) {
        // Jump to the corresponding expanded card    
        big_cards[index].scrollIntoView();
    }
}

function onClickShrinkBar(e) {
    small_cards.forEach(card => card.style.display = card.style.prev_display);
    big_cards.forEach(card => card.style.display = card.style.prev_display);
}

small_cards.forEach(elem => elem.addEventListener("click", onClickSmallCard, { capture: true }));
shrink_bars.forEach(elem => elem.addEventListener("click", onClickShrinkBar, { capture: true }));
