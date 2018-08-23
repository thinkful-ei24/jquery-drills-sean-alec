
function generateItemHtml(itemName) {
    return `<li>
        <span class="shopping-item">${itemName}</span>
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

     $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        console.log('event ran');
        let item = $().parent().find('.shopping-item');
        console.log(item);
        item.addClass('shopping-item__checked');
     });

    // console.log($("shopping-item-toggle").parent().find('.shopping-item'));
}

$(handleShoppingCart);