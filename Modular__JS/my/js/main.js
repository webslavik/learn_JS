var people = [],
		template = '<li><span></span><i class="del material-icons">delete</li>';


$('#peopleModule').find('button').on('click', function() {

	var val = $('#peopleModule').find('input').val();

	people.push(val);


	$('#peopleModule').find('ul').append(template);

});


$('#peopleModule').find('ul').on('click', '.del', function(e) {

	var $remove = $(e.target).closest('li');
	var i = $('#peopleModule').find('ul').find('li').index($remove);

	$remove.remove();

	people.splice(i, 1);

	// console.log(i);

});

