define(
    ['app/notes_storage_manager', 'app/add_note_ui'],
    function (notes_storage_mgr, add_note_ui) {
        "use strict";
        var ui_handlers = {
            note_add_input: add_note_ui,
        };

        return ui_handlers;
    }
);