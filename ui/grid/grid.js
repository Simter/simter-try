jQuery(".st-grid > .table-data").on("scroll", function(){
	//e.stopPropagation();
	//e.preventDefault();
	var $this = $(this);
	var $head = $this.prev().children();
	var left = -$this.scrollLeft();
	var preLeft = $this.data("preLeft") || 0;
	//console.log("--preLeft=%d, left=%d", preLeft, left);
	if(preLeft != left){
		console.log("preLeft=%d, left=%d", preLeft, left);
		$head.css("left", left);
		$this.data("preLeft", left);
	}
});