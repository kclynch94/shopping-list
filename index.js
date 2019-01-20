$ (function() {
    $('#js-shopping-list-form').on('submit', event =>{
        console.log('event',event);
        // stop the default form submission behavior
        event.preventDefault();

        const item = $(event.currentTarget).find(
            'input[name="shopping-list-entry"]').val();
        
        $('.js-shopping-list').append(`<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
    })
})

$(function() {
    $('ul').on('click', '.shopping-item-toggle', function (event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    })
})

$(function() {
    $('ul').on('click', '.shopping-item-delete', function (event) {
        $(this).closest('li').remove();
    })
})

