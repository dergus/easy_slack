document.addEventListener('click', function(e) {
    var elem = e.target.closest('ts-message');
    if (elem) {
        var action;
        if (e.ctrlKey) {
            action = elem.querySelector('[data-action="reply"]')
        }

        if (e.shiftKey) {
            action = elem.querySelector('[data-action="actions_menu"]')
        }

        if (e.altKey) {
            action = elem.querySelector('[data-action="reaction"]')
        }

        if (action) {
            action.click();
        }
    }
});
