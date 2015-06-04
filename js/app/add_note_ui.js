define(['jquery'], function ($) {
    "use strict";
    var selectors = {
        input_toggle_btn: '.toggle_note_input',
        input_section: '.note_input_section'
    };
    var toggle_note_input = function () {
        var $input_area = $(selectors.input_section);
        $input_area.toggle();
        update_new_note_button($input_area.css('display') != 'none');
    };
    var update_new_note_button = function (visible) {
        var menu_open_state = 'fa-plus-circle',
            menu_closed_state = 'fa-minus-circle';
        
        if (visible) {
            $(selectors.input_toggle_btn + ' .fa').removeClass(menu_open_state);
            $(selectors.input_toggle_btn + ' .fa').addClass(menu_closed_state);
        } else {
            $(selectors.input_toggle_btn + ' .fa').removeClass(menu_closed_state);
            $(selectors.input_toggle_btn + ' .fa').addClass(menu_open_state);
        }
    };
    
    // set up element click events
    $(selectors.input_toggle_btn).click(toggle_note_input);
});