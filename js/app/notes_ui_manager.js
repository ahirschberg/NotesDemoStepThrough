define(
    ['app/notes_storage_manager', 'app/add_note_ui'],
    function (notes_storage_mgr, add_note_ui) {
        "use strict";
        var ui_handlers = {
            note_add_input: add_note_ui,
            new_note: function (note_obj) {
                var index = notes_storage_mgr.add_note(note_obj);
            }
        };
        
        // Debug function to add a set amount of notes
        NOTESDEMO.add_notes = function (n) {
            for (var i = 1; i <= n; i++) {
                ui_handlers.new_note({
                    title: ('generated note ' + i),
                    body: ('I can do it! I can do it ' + i + ' times!')
                });
            }
        };

        return ui_handlers;
    }
);