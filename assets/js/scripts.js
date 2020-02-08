jQuery(document).ready(function($) {
	$(".clickable-row").click(function() {
		window.location = $(this).data("href");
	});

	$("#sortTable").DataTable();
	$("#sortTableModal").DataTable({
		paging: false,
		searching: false
	});
	$(".dataTables_length").addClass("bs-select");
});
