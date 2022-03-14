$(function() {
	
	$('#alertMe').click(function(e) {
		
		e.preventDefault();
		
		$('#successAlert').slideDown();
		
	});
	
	$('a.pop').click(function(e) {
	
		e.preventDefault();
	});
	
	$('a.pop').popover();
	
	$('[rel="tooltip"]').tooltip();
	
});

$('a.external').on('click', function(e) {
        e.preventDefault();
        var url = $(this).attr('href');
        $(".modal-body").html('<iframe width="100%" height="100%" frameborder="0" scrolling="yes" allowtransparency="true" src="'+url+'"></iframe>');
 
    });
 
    $('#myModal').on('show.bs.modal', function () {
 
        $(this).find('.modal-dialog').css({
                  width:'40%x', //choose your width
                  height:'75%', 
                  'padding':'0'
           });
         $(this).find('.modal-content').css({
                  height:'100%', 
                  'border-radius':'0',
                  'padding':'0'
           });
         $(this).find('.modal-body').css({
                  width:'auto',
                  height:'100%', 
                  'padding':'0'
           });
	})