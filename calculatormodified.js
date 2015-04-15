	var b;
	var h;
	var inertia =b*h*h*h/12;
	// you should multyply 10^9 for deflection value
// you should multyply 10^6 for angle value
// y value for singleLoad
//singleShear(10,10,3,2,200,13333.3333)
function singleShear(length, singLoad,singleLoadPosition, x, elasticity, inertia){
	var singleShear;
	var singleLeftLoad;

	singleLeftLoad = (singLoad * (length - singleLoadPosition))/length;

	if(x >= 0 && x<= singleLoadPosition){
		singleShear = -singleLeftLoad;
	} 
	else {
		singleShear = -singleLeftLoad + singLoad;
	}
	document.write(singleLeftLoad);
	document.write(singleShear);
}
//singleMoment(10,10,3,2,200,13333.3333)
function singleMoment(length, singLoad,singleLoadPosition, x, elasticity, inertia){
	var singlemoment;
	var singleLeftLoad;

	singleLeftLoad =  (singLoad * (length - singleLoadPosition))/length;

	if(x >= 0 && x<= singleLoadPosition){
		singleMoment = singleLeftLoad * x;
	} 
	else 
	{
		singleMoment = singleLeftLoad * x - singLoad * (x - singleLoadPosition);
	}
	document.write(singleMoment);
}

//singleDeflection(10,10,3,2,200,13333.3333)
function singleDeflection(length, singLoad,singleLoadPosition, x, elasticity, inertia){
	var singleDeflection;

	if ( x>=0 && x<=singleLoadPosition){
		singleDeflection = (-singLoad * (1- singleLoadPosition)*x) / (6*length*elasticity*inertia)*(length*length -(length- singleLoadPosition)*(length- singleLoadPosition) - x*x);	
	}
	else {
		singleDeflection = (-singLoad * singleLoadPosition * (length - x)) / (6*length*elasticity*inertia)*(length*length- singleLoadPosition*singleLoadPosition -((length-x)*(length-x)));
	}
	document.write(singleDeflection);

}

function singleAngle(length, singLoad,singleLoadPosition, x, elasticity, inertia){
	var singleAngle;

	if ( x>=0 && x<=singleLoadPosition){
		singleAngle = (-singLoad * (length - singleLoadPosition))/(6*length*elasticity*inertia)*(length*length-(length - singleLoadPosition)*(lengh - singleLoadPosition)-3*x*x);
	}
	else {
		singleAngle = (-singLoad * singleLoadPosition) /(6*length*elasticity*inertia)*(length*length-(singleLoadPosition*singleLoadPosition)-3*(length-x)*(length-x));
	}

}


function momentShear(lenght, moment, momentPosition, x, elasticity, inertia){
	var momentLeftLoad;
	var momentShear;

	momentLeftLoad = moment / length;
//shear , moment
	if(x >= 0 && x < momentPosition){
		momentShear = momentLeftLoad;
	}else{
		momentShear = momentLeftLoad;
	}
}

function momentMoment(lenght, moment, momentPosition, x, elasticity, inertia){
	var momentLeftLoad;
	var momentMoment;
	
	momentLeftLoad = moment / length;
//shear , moment
	if(x >= 0 && x < momentPosition){
		momentMoment = -momentLeftLoad*x;
	}else{
		momentMoment = -momentLeftLoad*x - moment;
	}
}

function momentDeflection(lenght, moment, momentPosition, x, elasticity, inertia){
	var momentDeflection;
		if(x>=0 && x<= momentPosition){
		momentDeflection = (-moment*x)/(6*length*elasticity*inertia)*(6*momentPosition*length-3*momentPosition*momentPosition -2*length*length-x*x);
	}else{
		momentDeflection = (-moment*(length-x))/(6*length*elasticity*inertia)*(6*(length - momentPosition)*length -3*(length- momentPosition)*(length- momentPosition)-2*length*length-3*(length-x)*(length - x));
	}
}


function momentAngle(lenght, moment, momentPosition, x, elasticity, inertia){
	var momentAngle;
		if(x>=0 && x<= momentPosition){
		momentAngle = (-moment)/(6*length*elasticity*inertia)*(6*momentPosition*length)*(6*momentPosition*length-3*momentPosition*momentPosition-2*length*length-3*x*x);
	}else{
		momentAngle = (-moment)/(6*length*elasticity*inertia)*(6*(length- momentPosition)*length -3*(length- momentPosition)*(length- momentPosition)-2*length*length - 3*(length-x)*(length-x));
	}
}

function distributedShear(length, distributedLoad, x1, x2, x, elasticity, inertia){
	var distributedLeftLoad;
	var distributedShear;
distributedLeftLoad = ((distributedLoad) * (qx2 - qx1) * (length - (qx1 + qx2) / 2)) / length; // calculate
		if (x >= 0 && x <= x1) { 
			distributedShear = -distributedLeftLoad;
		}
		else if (x > x1 && x <= x2) { 
			distributedShear = -distributedLeftLoad + distributedLoad * (x - x1);
		} else { 
			distributedShear = -distributedLeftLoad + distributedLoad * (x2 - x1);
		}
}


function distributedMoment(length, distributedLoad, x1, x2, x, elasticity, inertia){
	var distributedLeftLoad;
	var distributedShear;
distributedLeftLoad = ((distributedLoad) * (qx2 - qx1) * (length - (qx1 + qx2) / 2)) / length; // calculate
		if (x >= 0 && x <= x1) { 
			distributedMoment = distributedLeftLoad * x;
		}
		else if (x > x1 && x <= x2) { 
			distributedMoment = distributedLeftLoad * x + (-distributedLoad) * (x - x1) * (x - (x + x1) / 2);
		} else { 
			distributedMoment = distributedLeftLoad * x + (-distributedLoad) * (x2 - x1) * (x - (x2 + x1) / 2);
		}
}

function distributedDeflection2(length, distributedLoad, x1, x2, x, elasticity, inertia){
	var distributedDeflection2;
		if (x >= 0 && x <= x2) {
			distributedDeflection2 = (distributedLoad * x)/ (24 * length * elasticity * inertia) * (x2 * x2 * x2 * x2 - 4 * x2 * x2 * x2 * length + 4 * x2 * x2 * length * length + 2 * x2 * x2 * x * x - 4 * x2 * length * x * x + length * x * x * x);
		} else {
			distributedDeflection2 = (distributedLoad * x2 * x2)/ (24 * length * elasticity * inertia)
					* (-x2 * x2 * length + 4 * length * length * x + x2 * x2 * x - 6 * length
							* x * x + 2 * x * x * x);
		}
}

function distributedDeflection1(length, distributedLoad, x1, x2, x, elasticity, inertia){
	var distributedDeflection1;
		if (x >= 0 && x <= x2) {
			distributedDeflection1 =(distributedLoad * x)/ (24 * length * elasticity * inertia)
					* (x1 * x1 * x1 * x1 - 4 * x1 * x1 * x1 * length + 4
							* x1 * x1 * length * length + 2 * x1 * x1 * x * x - 4
							* x1 * length * x * x + length * x * x * x);
		} else {
			distributedDeflection1 = (-distributedLoad)/ (24 * length * elasticity * inertia)
					* (x1 * x1 * x1 * x1 - 4 * x1 * x1 * x1 * length + 4
							* x1 * x1 * length * length + 6 * x1 * x1 * x * x - 12
							* x1 * length * x * x + 4 * length * x * x * x);
		}
}

function distributedAngle2(length, distributedLoad, x1, x2, x, elasticity, inertia){

	var distributedAngle2;

		if (x >= 0 && x <= x2) {

		distributedAngle2 = (-distributedLoad)/ (24 * length * elasticity * inertia)
					* (x2 * x2 * x2 * x2 - 4 * x2 * x2 * x2 * length + 4
							* x2 * x2 * length * length + 6 * x2 * x2 * x * x - 12
							* x2 * length * x * x + 4 * length * x * x * x);

		} else {
			distributedAngle2 = (-distributedLoad * x2 * x2) / (24 * length * elasticity * inertia)
					* (4 * length * length + x2 * x2 - 12 * length * x + 6 * x * x);
		}
}

function distributedAngle1(length, distributedLoad, x1, x2, x, elasticity, inertia){

	var distributedAngle1;

		if (x >= 0 && x <= x1) {
			distributedAngle1 = (-distributedLoad)/ (24 * length * elasticity * inertia)
					* (x1 * x1 * x1 * x1 - 4 * x1 * x1 * x1 * length + 4
							* x1 * x1 * length * length + 6 * x1 * x1 * x * x - 12
							* x1 * length * x * x + 4 * length * x * x * x);

		} else {
			distributedAngle1 =(-distributedLoad * x1 * x1) / (24 * length * elasticity * inertia)
					* (4 * length * length + x1 * x1 - 12 * length * x + 6 * x * x);

		}
}






