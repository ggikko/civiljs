
// you should multyply 10^9 for deflection value
// you should multyply 10^6 for angle value
// y value for singleLoad
var singleY = function(length, singLoad,singleLoadPosition, x, elasticity, inertia){

	var singleShear;
	var singlemoment;
	var singleLeftLoad;
	var singleDeflection;
	var singleAngle;

//singleload left support value 
singleLeftLoad = singLoad * (length - singleLoadPosition);
//shear, moment
	if(x >= 0 && x<= singleLoadPosition){
		singleShear = -singleLeftLoad;
		singleMoment = singleLeftLoad * x;
	} 
	else {
		singleShear = -singleLeftLoad + singLoad;
		singleMoment = singleLeftLoad * x - singLoad * (x - singleLoadPosition);
	}
	//deflection, angle
	if ( x>=0 && x<==singleLoadPosition){
		singleDeflection = (-singLoad * (1- singleLoadPosition)*x) / (6*length*elasticity*inertia)*(length*length -(length- singleLoadPosition)*(length- singleLoadPosition) - x*x);
		singleAngle = (-singLoad * (length - singleLoadPosition))/(6*length*elasticity*inertia)*(length*length-(length - singleLoadPosition)*(lengh - singleLoadPosition)-3*x*x);
	}
	else {
		singleDeflection = (-singLoad * singleLoadPosition * (length - x)) / (6*length*elasticity*inertia)*(length*length- singleLoadPosition*singleLoadPosition -((length-x)*(length-x)));
		singleAngle = (-singLoad * singleLoadPosition) /(6*length*elasticity*inertia)*(length*length-(singleLoadPosition*singleLoadPosition)-3*(length-x)*(length-x));
	}

}

// y value for moment
var momentY = function(lenght, moment, momentPosition, x, elasticity, inertia){

var momentLeftLoad;
var momentShear;
var momentMoment;
var momentDeflection;
var momentAngle;

//moment left support value
momentLeftLoad = moment / length;
//shear , moment
	if(x >= 0 && x < momentPosition){
		momentShear = momentLeftLoad;
		momentMoment = -momentLeftLoad*x;
	}else{
		momentShear = momentLeftLoad;
		momentMoment = -momentLeftLoad*x - moment;
	}

	//deflection, angle
	if(x>=0 && x<= momentPosition){
		momentDeflection = (-moment*x)/(6*length*elasticity*inertia)*(6*momentPosition*length-3*momentPosition*momentPosition -2*length*length-x*x);
		momentAngle = (-moment)/(6*length*elasticity*inertia)*(6*momentPosition*length)*(6*momentPosition*length-3*momentPosition*momentPosition-2*length*length-3*x*x);	
	}else{
		momentDeflection = (-moment*(length-x))/(6*length*elasticity*inertia)*(6*(length - momentPosition)*length -3*(length- momentPosition)*(length- momentPosition)-2*length*length-3*(length-x)*(length - x));
		momentAngle = (-moment)/(6*length*elasticity*inertia)*(6*(length- momentPosition)*length -3*(length- momentPosition)*(length- momentPosition)-2*length*length - 3*(length-x)*(length-x));
	}
}


// y value for distributed singLoad

var distributedY = function(length, distributedLoad, x1, x2, x, elasticity, inertia){

var distributedLeftLoad;
var distributedShear;
var distributedMoment;
var distributedDeflection2;
var distributedDeflection1;
var distributedAngle2;
var distributedAngle1;

//distributedload left support value
distributedLeftLoad = ((distributedLoad) * (qx2 - qx1) * (length - (qx1 + qx2) / 2)) / length; // calculate
//shear , moment
if (x >= 0 && x <= x1) { 
			distributedShear = -distributedLeftLoad;
			distributedMoment = distributedLeftLoad * x;
		}
		if (x > x1 && x <= x2) { 
			distributedShear = -distributedLeftLoad + distributedLoad * (x - x1);
			distributedMoment = distributedLeftLoad * x + (-distributedLoad) * (x - x1) * (x - (x + x1) / 2);
		} else { 
			distributedShear = -distributedLeftLoad + distributedLoad * (x2 - x1);
			distributedMoment = distributedLeftLoad * x + (-distributedLoad) * (x2 - x1) * (x - (x2 + x1) / 2);
		}
		if (x >= 0 && x <= x2) {
			distributedDeflection2 = (distributedLoad * x)/ (24 * length * elasticity * inertia)
					* (x2 * x2 * x2 * x2 - 4 * x2 * x2 * x2 * length + 4
							* x2 * x2 * length * length + 2 * x2 * x2 * x * x - 4
							* x2 * length * x * x + length * x * x * x);

			distributedAngle2 = (-distributedLoad)/ (24 * length * elasticity * inertia)
					* (x2 * x2 * x2 * x2 - 4 * x2 * x2 * x2 * length + 4
							* x2 * x2 * length * length + 6 * x2 * x2 * x * x - 12
							* x2 * length * x * x + 4 * length * x * x * x);

		} else {
		

			distributedDeflection2 = (distributedLoad * x2 * x2)/ (24 * length * elasticity * inertia)
					* (-x2 * x2 * length + 4 * length * length * x + x2 * x2 * x - 6 * length
							* x * x + 2 * x * x * x);
			distributedAngle2 = (-distributedLoad * x2 * x2) / (24 * length * elasticity * inertia)
					* (4 * length * length + x2 * x2 - 12 * length * x + 6 * x * x);

		}
//deflection, angle
		if (x >= 0 && x <= x1) {
			distributedDeflection1 = (distributedLoad * x)/ (24 * length * elasticity * inertia)
					* (x1 * x1 * x1 * x1 - 4 * x1 * x1 * x1 * length + 4
							* x1 * x1 * length * length + 2 * x1 * x1 * x * x - 4
							* x1 * length * x * x + length * x * x * x);

			distributedAngle1 = (-distributedLoad)/ (24 * length * elasticity * inertia)
					* (x1 * x1 * x1 * x1 - 4 * x1 * x1 * x1 * length + 4
							* x1 * x1 * length * length + 6 * x1 * x1 * x * x - 12
							* x1 * length * x * x + 4 * length * x * x * x);

		} else {
	

			distributedDeflection1 = (distributedLoad * x1 * x1)/ (24 * length * elasticity * inertia)
					* (-x1 * x1 * length + 4 * length * length * x + x1 * x1 * x - 6 * length
							* x * x + 2 * x * x * x);
			distributedAngle1 =(-distributedLoad * x1 * x1) / (24 * length * elasticity * inertia)
					* (4 * length * length + x1 * x1 - 12 * length * x + 6 * x * x);

		}


}

