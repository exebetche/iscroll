
iScroll.prototype._initProbe = function () {
	if ( this.options.probeType == 3 ) {
		this.options.useTransition = false;
	}
	
	// Shifts for virtual list
	this.widthShift = 0;
	this.heightShift = 0;
};
