function displayResult() {
	var result = eval($('#btn-display-result').text());
	$('#btn-display-result').text(result);
}

function restartResult() {
	$('#btn-display-result').empty();
}

$(function() {
	var i = 1;
	$('span').click(function() {
		if ($(this).text() === '=')
			displayResult($(this));
		else if ($(this).text() === 'C')
			restartResult($(this));
		else
			$('#btn-display-result').append($(this).text());
	});
});