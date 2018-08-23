
function generateItemHtml(itemName) {
    return `<li>
        < span class = "shopping-item" > ${itemName}< /span>
        <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
        </div>
    </li>`;
}

function handleShoppingCart() {

    let shoppingList = $('.shopping-list');

    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        let itemName = $('.js-shopping-list-entry').val();
        shoppingList.append(generateItemHtml(itemName));
    });
}

$(handleShoppingCart);