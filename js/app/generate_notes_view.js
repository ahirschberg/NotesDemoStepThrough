define(
    ['jquery', 'app/notes_storage_manager'],
    function ($, notes_storage_mgr) {
        "use strict";
        var disp_ui_obj = {};

        var trash_click_fn = function () {
            var $note_element = $(this).parent();
            var note_index = notes_storage_mgr.get_index_from_id($note_element.attr('id'));

            console.log('deleting note with index ' + note_index);
            notes_storage_mgr.delete_note(note_index);
            $note_element.fadeOut("fast", function () {
                $(this).remove();
            });
        };
        
        var $generate_note_data_element = function (note_obj) {
            var $note_data = $('<div class="note_data"></div>');
            $note_data.append(
                '<h2 class="note_title">' +
                (note_obj.title || '') +
                '</h2>');
            $note_data.append(
                '<p class="note_body">' +
                (note_obj.body || '') +
                '</p>');
            return $note_data;
        };
        
        var edit_click_fn = undefined; // later...
        disp_ui_obj.append_note_to_list = function (note_obj, index) {
            var $li = $('<li/>', {
                class: 'note_listing',
                id: ('note_' + index)
            });

            // append trash button
            $('<div/>', {
                class: 'notes_button notes_trash_button',
                html: '<i class="fa fa-trash"></i>', // put a font-awesome icon inside the trash div
                click: trash_click_fn
            }).appendTo($li);

            // append edit button
            $('<div/>', {
                class: 'notes_button notes_edit_button',
                html: '<i class="fa fa-pencil"></i>',
                click: edit_click_fn
            }).appendTo($li);

            $li.append(
                $generate_note_data_element(note_obj)
            );

            // add to the DOM inside the notes list
            $li.prependTo('.notes_container');
            console.log('Appended note with index ' + index);
        };

        return disp_ui_obj;
    }
);