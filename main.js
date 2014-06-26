 window.onload = function () {



   // namespace for the banner
   window.icgbanner = {};

  //->>. gradientt ..<//
  //gradient code values 

  //x0  The x-coordinate of the starting circle of the gradient
  //y0  The y-coordinate of the starting circle of the gradient
  //r0  The radius of the starting circle
        
  //x1  The x-coordinate of the ending circle of the gradient
  //y1  The y-coordinate of the ending circle of the gradient
  //r1  The radius of the ending circle

 



    
        
       icgbanner.createGrad = function(x1,y1,x2,y2,r,ctx) {

          //console.log('redrawing gradient');

          //(x0,y0,r0,x1,y1,r1);
          icgbanner.gradient  =  ctx.createRadialGradient(x1,y1,3,x1,y1,r);
          icgbanner.gradient.addColorStop(0,"#FFFFFF");
          icgbanner.gradient.addColorStop(0.0584,"#FFFFFF");
          icgbanner.gradient.addColorStop(0.2341,"#00aeef");
          icgbanner.gradient.addColorStop(0.4476,"#004756");
          icgbanner.gradient.addColorStop(0.979,'rgba(6,0,0,1)');;
          icgbanner.gradient.addColorStop(1, 'rgba(0,0,0,1)');
          
         ctx.fillStyle = icgbanner.gradient;
         ctx.fillRect(0,0,1075,761);

          //another gradient gies here 
          /*var gradient2  = ctx.createRadialGradient(x2,y2,5,x2,y2,550);
          gradient2.addColorStop(0,"#FFFFFF");
          gradient2.addColorStop(0.0584,"#FFFFFF");
          gradient2.addColorStop(0.2341,"#00aeef");
          gradient2.addColorStop(0.4476,"#004756");
          gradient2.addColorStop(0.979,'rgba(6,0,0,0)');
          gradient2.addColorStop(1, 'rgba(0,0,0,0)'); */


          //ctx.fillStyle = gradient2;
          //ctx.fillRect(0,0,1075,761); 
          

        }

        //createGrad(x2,y2,gradient_context2)

      // the endo of gradient codd



      
      
      //initialising if the assets are loaded
     /* pattern_image3.onload = function() {


          // chrome caching hack

           var  decodeCanvas1 = document.createElement('canvas');
           var dectodeCtx1 = decodeCanvas1.getContext('2d');
           decodeCanvas1.width = pattern_image.width;
           decodeCanvas1.height = pattern_image.height;
           dectodeCtx1.drawImage(pattern_image, 0, 0);

           var  decodeCanvas2 = document.createElement('canvas');
           var dectodeCtx2 = decodeCanvas2.getContext('2d');
           decodeCanvas2.width = pattern_image2.width;
           decodeCanvas2.height = pattern_image2.height;
           dectodeCtx2.drawImage(pattern_image2, 0, 0);

           var  decodeCanvas3 = document.createElement('canvas');
           var dectodeCtx3 = decodeCanvas3.getContext('2d');
           decodeCanvas3.width = pattern_image3.width;
           decodeCanvas3.height = pattern_image3.height;
           dectodeCtx3.drawImage(pattern_image3, 0, 0);

  
 
      } */

       icgbanner.startIt = function() {
           icgbanner.slide1 =  icgbanner.drawIt(icgbanner.pattern_image,0,0,0,0);
           icgbanner.slide1.timeIt();
           icgbanner.t1offF(); 
      }

       icgbanner.loadImages = function(callback) {

          var loaded = false;
          var loadedNumber = 0;
            for (var i = 0; i <  icgbanner.im_array.length; ++i) {
                //console.log(im_array[i]);
                 icgbanner.im_array[i].onload = function () {
                  loadedNumber++;
                  if(loadedNumber== icgbanner.im_array.length) {
                    //all loaded now
                    callback();
                  }

                } //the end of onload function
            };//the end of loop


      }


       icgbanner.initialise  = function () {


         icgbanner.pattern_image = new Image();
         icgbanner.pattern_image2 = new Image();
         icgbanner.pattern_image3 = new Image();

         icgbanner.im_array = new Array();

         icgbanner.im_array.push ( icgbanner.pattern_image, icgbanner.pattern_image2,  icgbanner.pattern_image3);
        //pattern_image.src="ICG_pattern3.png";
         icgbanner.pattern_image.src="673x336_banner_A.png";
         icgbanner.pattern_image2.src="673x336_banner_B.png";
         icgbanner.pattern_image3.src="673x336_banner_C.png";


         icgbanner.activeTransition="";

         icgbanner.pattern_canvas = document.getElementById('pattern_canvas');
         icgbanner.pattern_context =  icgbanner.pattern_canvas.getContext('2d');

         icgbanner.gradient_canvas = document.getElementById('gradient_canvas');
         icgbanner.gradient_context =   icgbanner.gradient_canvas.getContext('2d');

         icgbanner.anim1 = document.getElementById("pattern_canvas");
         icgbanner.grad1 = document.getElementById("gradient_canvas");
         icgbanner.slide_copy1 = document.getElementById("banner-copy-wrap")
         icgbanner.cta1 = document.getElementById("banner-cta");


      //***-------------------------------***//
// handling the animation with tabs 

var ce = new Event('pokapoka');
document.addEventListener('pokapoka', function (e) {console.log("-- it becomes visible again --")},false);


var hidden, state, visibilityChange; 
if (typeof document.hidden !== "undefined") {
  hidden = "hidden";
  visibilityChange = "visibilitychange";
  state = "visibilityState";
} else if (typeof document.mozHidden !== "undefined") {
  hidden = "mozHidden";
  visibilityChange = "mozvisibilitychange";
  state = "mozVisibilityState";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
  state = "msVisibilityState";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
  state = "webkitVisibilityState";
 }

document.addEventListener(visibilityChange, function() {
  document.title = document[state];

  if (document[state]=="hidden") {
    
          document.title ="udih"
    
            // turning the transitioning off
            switch(icgbanner.activeTransition) {

              case "t1on": clearTimeout( icgbanner.t1on);
              break;

              case "t1off": clearTimeout( icgbanner.t1off);
              break;

              case "t2on": clearTimeout( icgbanner.t2on);
              break;

              case "t2off": clearTimeout( icgbanner.t2off);
              break;
              
              case "t3on": clearTimeout( icgbanner.t3on);
              break;

              case "t3off":clearTimeout( icgbanner.t3off);
              break;
            }


  } else if (document[state]!=="hidden") {

     // window.t1onF(); 

     //document.getElementById("anim-wrapper").style.display="none";

     // some sort of reset, or playing the animation from the 
     // plays the animaton from a given point in time 
          document.dispatchEvent(ce);

             switch(icgbanner.activeTransition) {

              case "t1on":  icgbanner.t1onF()
              break;

              case "t1off":  icgbanner.t1offF() 
              break;

              case "t2on":  icgbanner.t2onF();
              break;

              case "t2off":  icgbanner.t2offF();
              break;

              case "t3on":  icgbanner.t3onF();
              break;

              case "t3off":  icgbanner.t3offF();
              break;



            }
  }

}, false);


document.title = document[state];



  
      }


       // start everything happens here;

       if(window.utils.canvasSupport()==true) {
             icgbanner.initialise();
             icgbanner.loadImages(icgbanner.startIt);
        } else  {
          //no support for HTML5//
          document.getElementById("anim-wrapper").innerHTML="<img src=\"fallback.png\">";
        }

     


      



      // the main engine, pass the reference image which will be drawn on the canvas
  
       icgbanner.drawIt = function(img, xPoint, yPoint, angle, range) {
        
        //console.log("hey")
        
        this.name ="test name";
        this.req;
        //this.pimage = pattern_image;
        this.pimage = img;
        this.slide_draw_TO;

        this.xPos = xPoint;
        this.yPos = yPoint;

        this.xPos2 = 0;
        this.yPos2 = 0;

        this.angle = angle;
        this.range = range;
        this.r = 250;

        //console.log(this,"aaaaa", this.name);


        this.timeIt  =  function () {

            //console.log(this,"bbbbbb",this.name);

                        icgbanner.slide_draw_TO = setTimeout(function() {
                      
                        icgbanner.req =  window.requestAnimationFrame(icgbanner.timeIt,  icgbanner.pattern_canvas);
                        
                        
                         icgbanner.pattern_context.clearRect(0, 0,  icgbanner.pattern_canvas.width,  icgbanner.pattern_canvas.height);
                        
                        //drawing the image
                         icgbanner.pattern_context.drawImage( icgbanner.pimage, 0, 0);
                        
                         icgbanner.gradient_context.clearRect(0, 0,  icgbanner.pattern_canvas.width,  icgbanner.pattern_canvas.height);  
                          
                        
                        
                        /*> First gradient animation */
                        

                        icgbanner.xPos = icgbanner.xPos+0.63;
                        //vertical range of undulating
                        icgbanner.yPos = (336/2) + Math.cos(icgbanner.angle)*(80) + icgbanner.range;
                        //the bigger the angle increments the faster it happens
                        icgbanner.angle+=0.040;  

                        //console.log("updated xpos", xPos)
                        // undulating the radius of the gradient 
                        icgbanner.r = 180 + Math.cos(icgbanner.angle)*80 ;
                      
                        // if off the visible area 
                        if(icgbanner.xPos> 360) {
                          icgbanner.angle=0;
                          icgbanner.xPos= -25;

                        } 

                        /* calling the grad continuously */
                        icgbanner.createGrad(icgbanner.xPos,icgbanner.yPos,icgbanner.xPos2,icgbanner.yPos2,icgbanner.r, icgbanner.gradient_context);
                 

                    }, 1000/30);

        },
        // kills the animation process
        this.killIt = function () {
            //console.log("killing it");
            clearTimeout(icgbanner.slide_draw_TO);
            cancelAnimationFrame(icgbanner.req);
            icgbanner.req= null; icgbanner.slide_draw_TO = null;
            //console.log("trying to kill the process")
            //console.log(this.slide_draw_TO,this.req, this.name);


        }
       ,

        

        /*   test */
        this.fun1 = function () {

          alert("bum");
       

        } ,

        this.fun2 = function () {

        }

        return this

        
      }



     // TweenLite.to(foo, 2, {alpha:0});

     // TweenLite.to(anim1, 2, {alpha:0, delay:2});
   // TweenLite.to(grad1, 2, {alpha:0});
      //sinus undulating

      //drawFrame();
        
      //----------timers , 

    
    
// slide 1 on and off
    
     icgbanner.t1onF = function () {

         icgbanner.activeTransition="t1on";
         icgbanner.t1on = setTimeout ( function() {

         document.getElementById("banner3").style.display ="none";
          document.getElementById("banner1").style.display ="block";

          TweenLite.to(icgbanner.anim1, 1, {alpha:1, delay:0}); 
          TweenLite.to(icgbanner.grad1, 1, {alpha:1, delay:0.3});
          TweenLite.to(icgbanner.slide_copy1,1 ,{alpha:1, delay:0})
          //TweenLite.to(cta1,1, {alpha:1,delay:0})

             //x1= 50, y1 = 0; angle =0;

          //drawFrame();
           //window.slide1 = drawIt(pattern_image) ;
          icgbanner.slide1 = icgbanner.drawIt(icgbanner.pattern_image,0,0,0,0);
          icgbanner.slide1.timeIt();
           //window.slide1().fun1();
           icgbanner.t1offF();
        } , 1000)


     
  } 

     icgbanner.t1offF =  function () {


           icgbanner.activeTransition="t1off";
           icgbanner.t1off = setTimeout ( function() {

            //console.log("finish the first Slide1");
            
            TweenLite.to( icgbanner.anim1, 1, {alpha:0, delay:0.6}); 
            TweenLite.to( icgbanner.grad1, 1, {alpha:0, delay:0});
            TweenLite.to( icgbanner.slide_copy1,1 ,{alpha:0, delay:0})
            //TweenLite.to(cta1,1, {alpha:0,delay:0})
            


            //clearTimeout(slide1_draw_TO);
            //cancelAnimationFrame( window.req1 );
             icgbanner.slide1.killIt();
             icgbanner.slide1 = null;
             icgbanner.t2onF();
          } , 6000)
    
    }

//


// slide 2 on and off
        icgbanner.t2onF = function () {


         icgbanner.activeTransition="t2on";
       icgbanner.t2on = setTimeout ( function() {

        document.getElementById("banner1").style.display ="none";
        document.getElementById("banner2").style.display ="block";
        
        TweenLite.to( icgbanner.anim1, 1, {alpha:1, delay:0}); 
        TweenLite.to( icgbanner.grad1, 1, {alpha:1, delay:0.3});
        TweenLite.to( icgbanner.slide_copy1,1 ,{alpha:1, delay:0})
        //TweenLite.to(cta1,1, {alpha:1,delay:0})

        //x1= 100, y1 = 0; angle =0;
       // window.xPos = 0;
       //xPos = 0;
         //yPos = (0) + Math.sin(angle)*(80) + range;
      // console.log(xPos, "x Position")
          
         // slide2 = drawIt(pattern_image2) 
        //drawFrame2();
        
         icgbanner.slide2 = icgbanner.drawIt( icgbanner.pattern_image2,100,0,0,40);
         icgbanner.slide2.timeIt();
       
         icgbanner.t2offF();
         // t1offF();
        } , 1000)
      } 

          icgbanner.t2offF =  function () {


            icgbanner.activeTransition="t2off";
            icgbanner.t2off = setTimeout ( function() {

            //console.log("finish the first Slide1");
            
            TweenLite.to( icgbanner.anim1, 1, {alpha:0, delay:0.6}); 
            TweenLite.to( icgbanner.grad1, 1, {alpha:0, delay:0});
            TweenLite.to( icgbanner.slide_copy1,1 ,{alpha:0, delay:0})
            //TweenLite.to(cta1,1, {alpha:0,delay:0})
            
            //clearTimeout(slide2_draw_TO);
            //cancelAnimationFrame( window.req2 );
            
             icgbanner.slide2.killIt();
             icgbanner.slide2 = null;

             icgbanner.t3onF();
          } , 6000)
    
    }

    

        icgbanner.t3onF = function () {


          window.activeTransition="t3on";
        window.t3on = setTimeout ( function() {


        document.getElementById("banner2").style.display ="none";
        document.getElementById("banner3").style.display ="block";

          TweenLite.to( icgbanner.anim1, 1, {alpha:1, delay:0}); 
          TweenLite.to( icgbanner.grad1, 1, {alpha:1, delay:0.3});
          TweenLite.to( icgbanner.slide_copy1,1 ,{alpha:1, delay:0})
          //TweenLite.to(cta1,1, {alpha:1,delay:0})

           //x1= 50, y1 = 0; angle =0;
           xPos =0;
         
          //drawFrame3();
           icgbanner.slide3 = icgbanner.drawIt(icgbanner.pattern_image3,0,0,0,0);
           icgbanner.slide3.timeIt();
           icgbanner.t3offF();
        } , 1000)
      } 


       icgbanner.t3offF =  function () {


          icgbanner.activeTransition="t3off";
          icgbanner.t3off = setTimeout ( function() {

            //console.log("finish the first Slide1");
            
            TweenLite.to( icgbanner.anim1, 1, {alpha:0, delay:0.6}); 
            TweenLite.to( icgbanner.grad1, 1, {alpha:0, delay:0});
            TweenLite.to( icgbanner.slide_copy1,1 ,{alpha:0, delay:0})
            //TweenLite.to(cta1,1, {alpha:0,delay:0})
            

            icgbanner.slide3.killIt();
            icgbanner.slide3 = null;
            //clearTimeout(slide3_draw_TO);
            //cancelAnimationFrame( window.req3 );
           
           icgbanner.t1onF();
          } , 6000)
    
    }





    



}; //the end of window.onload function 



  /*  (function() {
    var hidden = "hidden";

    // Standards:
    if (hidden in document)
        document.addEventListener("visibilitychange", onchange);
    else if ((hidden = "mozHidden") in document)
        document.addEventListener("mozvisibilitychange", onchange);
    else if ((hidden = "webkitHidden") in document)
        document.addEventListener("webkitvisibilitychange", onchange);
    else if ((hidden = "msHidden") in document)
        document.addEventListener("msvisibilitychange", onchange);
    // IE 9 and lower:
    else if ('onfocusin' in document)
        document.onfocusin = document.onfocusout = onchange;
    // All others:
    else
        window.onpageshow = window.onpagehide 
            = window.onfocus = window.onblur = onchange;

    function onchange (evt) {
        var v = 'visible', h = 'hidden',
            evtMap = { 
                focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h 
            };

        evt = evt || window.event;
        if (evt.type in evtMap) {
            document.body.className = evtMap[evt.type]; window.viz = evtMap[evt.type];
          }
        else {        
            document.body.className = this[hidden] ? "hidden" : "visible";
          }
    }
})(); */