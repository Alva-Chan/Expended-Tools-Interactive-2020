

// const droppable = new Draggable.Droppable(document.querySelectorAll('.container'), {
//   draggable: '.item',
//   dropzone: '.dropzone'
// });

// droppable.on('droppable:dropped', () => console.log('droppable:dropped'));
// droppable.on('droppable:returned', () => console.log('droppable:returned'));




// const droppable = new Draggable.Droppable(document.querySelectorAll('.container'), {
//   draggable: '.item',
//   dropzone: '.dropzone'
// });

// droppable.on('droppable:dropped', () => console.log('droppable:dropped'));
// droppable.on('droppable:returned', () => console.log('droppable:returned'));











;(function($,undefined){
    // set up background images
    // $('.item').each(function(i,o){
    //     $(o).css('background-image', 'url(' + $(o).data('src') + ')');
    // });
    
    
    $('.character').draggable({
        cancel: "a.ui-icon", // clicking an icon won't initiate dragging
        //revert: "invalid", // when not dropped, the item will revert back to its initial position
        revert: true, // bounce back when dropped
        helper: "clone", // create "copy" with original properties, but not a true clone
        cursor: "move", 
        revertDuration: 0 // immediate snap
    });
    
    var $container
    $('.container').droppable({
        accept: "#character-holder .character",
        activeClass: "ui-state-highlight",
        drop: function( event, ui ) {
            // clone item to retain in original "list"
            var $item = ui.draggable.clone();

            $(this).addClass('has-drop').html($item);

        }
    });
})(jQuery);