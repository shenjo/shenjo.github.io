Some base shapes by raw css


1.square
````
#square {
	width: 100px;
	height: 100px;
	background: red;
}
````

2.rectangle
````
#rectangle {
	width: 200px;
	height: 100px;
	background: red;
}
````

3.circle
````
#circle {
	width: 100px;
	height: 100px;
	background: red;
	-moz-border-radius: 50px;
	-webkit-border-radius: 50px;
	border-radius: 50px;
}
````
4.oval
````
#oval {
	width: 200px;
	height: 100px;
	background: red;
	-moz-border-radius: 100px / 50px;
	-webkit-border-radius: 100px / 50px;
	border-radius: 100px / 50px;
}
````
5.triangle-up
````
#triangle-up {
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 100px solid red;
}
````

6.riangle-down
````
#triangle-down {
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-top: 100px solid red;
}
````

7.triangle-left
````
#triangle-left {
	width: 0;
	height: 0;
	border-top: 50px solid transparent;
	border-right: 100px solid red;
	border-bottom: 50px solid transparent;
}
````

8.triangle-right
````
#triangle-right {
	width: 0;
	height: 0;
	border-top: 50px solid transparent;
	border-left: 100px solid red;
	border-bottom: 50px solid transparent;
}
````
9.triangle-topleft
````
#triangle-topleft {
	width: 0;
	height: 0;
	border-top: 100px solid red;
	border-right: 100px solid transparent;
}
````

10.triangle-topright
````
#triangle-topright {
	width: 0;
	height: 0;
	border-top: 100px solid red;
	border-left: 100px solid transparent;

}
````

11.triangle-bottomleft
````
#triangle-bottomleft {
	width: 0;
	height: 0;
	border-bottom: 100px solid red;
	border-right: 100px solid transparent;
}
````

12.riangle-bottomright
````
#triangle-bottomright {
	width: 0;
	height: 0;
	border-bottom: 100px solid red;
	border-left: 100px solid transparent;
}
````


13.curvedarrow
````
#curvedarrow {
  position: relative;
  width: 0;
  height: 0;
  border-top: 9px solid transparent;
  border-right: 9px solid red;
  -webkit-transform: rotate(10deg);
  -moz-transform: rotate(10deg);
  -ms-transform: rotate(10deg);
  -o-transform: rotate(10deg);
}
````

14.curvedarrow
````
#curvedarrow:after {
  content: "";
  position: absolute;
  border: 0 solid transparent;
  border-top: 3px solid red;
  border-radius: 20px 0 0 0;
  top: -12px;
  left: -9px;
  width: 12px;
  height: 12px;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -o-transform: rotate(45deg);
}
````

15.trapezoid
````
#trapezoid {
	border-bottom: 100px solid red;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	height: 0;
	width: 100px;
}
````

16.parallelogram
````
#parallelogram {
	width: 150px;
	height: 100px;
	-webkit-transform: skew(20deg);
	   -moz-transform: skew(20deg);
	     -o-transform: skew(20deg);
	background: red;
}
````

17.star-six
````
#star-six {
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 100px solid red;
	position: relative;
}

#star-six:after {
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-top: 100px solid red;
	position: absolute;
	content: "";
	top: 30px;
	left: -50px;
}
````

18.star-five
````
#star-five {
   margin: 50px 0;
   position: relative;
   display: block;
   color: red;
   width: 0px;
   height: 0px;
   border-right:  100px solid transparent;
   border-bottom: 70px  solid red;
   border-left:   100px solid transparent;
   -moz-transform:    rotate(35deg);
   -webkit-transform: rotate(35deg);
   -ms-transform:     rotate(35deg);
   -o-transform:      rotate(35deg);
}

#star-five:before {
   border-bottom: 80px solid red;
   border-left: 30px solid transparent;
   border-right: 30px solid transparent;
   position: absolute;
   height: 0;
   width: 0;
   top: -45px;
   left: -65px;
   display: block;
   content: '';
   -webkit-transform: rotate(-35deg);
   -moz-transform:    rotate(-35deg);
   -ms-transform:     rotate(-35deg);
   -o-transform:      rotate(-35deg);

}

#star-five:after {
   position: absolute;
   display: block;
   color: red;
   top: 3px;
   left: -105px;
   width: 0px;
   height: 0px;
   border-right: 100px solid transparent;
   border-bottom: 70px solid red;
   border-left: 100px solid transparent;
   -webkit-transform: rotate(-70deg);
   -moz-transform:    rotate(-70deg);
   -ms-transform:     rotate(-70deg);
   -o-transform:      rotate(-70deg);
   content: '';
}
````

19.pentagon
````
#pentagon {
    position: relative;
    width: 54px;
    border-width: 50px 18px 0;
    border-style: solid;
    border-color: red transparent;
}

#pentagon:before {
    content: "";
    position: absolute;
    height: 0;
    width: 0;
    top: -85px;
    left: -18px;
    border-width: 0 45px 35px;
    border-style: solid;
    border-color: transparent transparent red;
}
````

20.hexagon
````
#hexagon {
	width: 100px;
	height: 55px;
	background: red;
	position: relative;
}

#hexagon:before {
	content: "";
	position: absolute;
	top: -25px;
	left: 0;
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 25px solid red;
}

#hexagon:after {
	content: "";
	position: absolute;
	bottom: -25px;
	left: 0;
	width: 0;
	height: 0;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-top: 25px solid red;
}
````

21.octagon
````
#octagon {
	width: 100px;
	height: 100px;
	background: red;
	position: relative;
}

#octagon:before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	border-bottom: 29px solid
	 red;````
	border-left: 29px solid #e
	ee;````
	border-right: 29px solid #eee;
	width: 42px;
	height: 0;
}

#octagon:after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	border-top: 29px solid re
	d;````
	border-left: 29px solid #e
	ee;````
	border-right: 29px solid #eee;
	width: 42px;
	height: 0;
}
````

22.heart
````
#heart {
    position: relative;
    width: 100px;
    height: 90px;
}

#heart:before,
#heart:after {
    position: absolute;
    content: "";
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: red;
    -moz-border-radius: 50px 50px 0 0;
    border-radius: 50px 50px 0 0;
    -webkit-transform: rotate(-45deg);
       -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
         -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
       -moz-transform-origin: 0 100%;
        -ms-transform-origin: 0 100%;
         -o-transform-origin: 0 100%;
            transform-origin: 0 100%;
}

#heart:after {
    left: 0;
    -webkit-transform: rotate(45deg);
       -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
         -o-transform: rotate(45deg);
            transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
       -moz-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
         -o-transform-origin: 100% 100%;
            transform-origin :100% 100%;
}
````

23.infinity
````
#infinity {
    position: relative;
    width: 212px;
    height: 100px;
}

#infinity:before,
#infinity:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 60px;
    height: 60px;
    border: 20px solid red;
    -moz-border-radius: 50px 50px 0 50px;
         border-radius: 50px 50px 0 50px;
    -webkit-transform: rotate(-45deg);
       -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
         -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
}

#infinity:after {
    left: auto;
    right: 0;
    -moz-border-radius: 50px 50px 50px 0;
         border-radius: 50px 50px 50px 0;
    -webkit-transform: rotate(45deg);
       -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
         -o-transform: rotate(45deg);
            transform: rotate(45deg);
}
````

to see the full list of all the shapes and demo,please visit [my jsFiddle](https://jsfiddle.net/joey_shen/7gndkftc/).