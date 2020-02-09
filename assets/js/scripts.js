jQuery(document).ready(function($) {
	moment.locale("ru");
	$(".clickable-row").click(function() {
		window.location = $(this).data("href");
	});
	$("#sortTable").DataTable();
	$("#sortTableModal").DataTable({
		paging: false,
		searching: false
	});
	$(".dataTables_length").addClass("bs-select");
	myCustomTime();
	setInterval(() => {
		myCustomTime();
	}, 1000);
});

// const myCustomTime = () => {
// 	$(".custom-time").html(moment().format("LT"));
// 	$(".custom-date").html(moment().format("LL"));
// };
function myCustomTime() {
	$(".custom-time").html(moment().format("LT"));
	$(".custom-date").html(moment().format("LL"));
}
