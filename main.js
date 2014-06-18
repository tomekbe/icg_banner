 window.onload = function () {


   
   window.banner = {};
   window.banner.obrazy  = new Array ("a","b","c");
   
   var pattern_canvas = document.getElementById('pattern_canvas'),
          pattern_context = pattern_canvas.getContext('2d');

   var gradient_canvas = document.getElementById('gradient_canvas'),
          gradient_context =  gradient_canvas.getContext('2d');

    /*  var gradient_canvas2 = document.getElementById('gradient_canvas2'),
       gradient_context2  = gradient_canvas2.getContext('2d'); */




        //->>. gradientt ..<//
        //gradient code values 

        //x0  The x-coordinate of the starting circle of the gradient
        //y0  The y-coordinate of the starting circle of the gradient
        //r0  The radius of the starting circle
        
        //x1  The x-coordinate of the ending circle of the gradient
        //y1  The y-coordinate of the ending circle of the gradient
        //r1  The radius of the ending circle

 



        /*
          two gradients undulating;

          x1, y1 =   coordinates for 
        */
        
        function createGrad(x1,y1,x2,y2,r,ctx) {

          //console.log('redrawing gradient');

          //(x0,y0,r0,x1,y1,r1);
          var gradient  = ctx.createRadialGradient(x1,y1,3,x1,y1,r);
          gradient.addColorStop(0,"#FFFFFF");
          gradient.addColorStop(0.0584,"#FFFFFF");
          gradient.addColorStop(0.2341,"#00aeef");
          gradient.addColorStop(0.4476,"#004756");
          gradient.addColorStop(0.979,'rgba(6,0,0,1)');;
          gradient.addColorStop(1, 'rgba(0,0,0,1)');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(0,0,1075,761);

          //another gradient gies here 
          var gradient2  = ctx.createRadialGradient(x2,y2,5,x2,y2,550);
          gradient2.addColorStop(0,"#FFFFFF");
          gradient2.addColorStop(0.0584,"#FFFFFF");
          gradient2.addColorStop(0.2341,"#00aeef");
          gradient2.addColorStop(0.4476,"#004756");
          gradient2.addColorStop(0.979,'rgba(6,0,0,0)');
          gradient2.addColorStop(1, 'rgba(0,0,0,0)');


          //ctx.fillStyle = gradient2;
          //ctx.fillRect(0,0,1075,761); 
          

        }

        //createGrad(x2,y2,gradient_context2)

      // the endo of gradient codd



      var pattern_image = new Image();
      var pattern_image2 = new Image();
      var pattern_image3 = new Image();

      var im_array = new Array();

      im_array.push (pattern_image,pattern_image2, pattern_image3);
      //pattern_image.src="ICG_pattern3.png";
      pattern_image.src="673x336_banner_A.png";
      pattern_image2.src="673x336_banner_B.png";
      pattern_image3.src="673x336_banner_C.png";


      window.activeTransition="";
      
      
      //initialising if the assets are loaded
      pattern_image3.onload = function() {


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

       // start everything happens here;
        //drawFrame(); 
       window.slide1 = drawIt(pattern_image);
       //console.log("--------", slide1.name);
       window.slide1.timeIt();
        
      }

      



      // the main engine, pass the reference image which will be drawn on the canvas
  
      window.drawIt = function(img) {
        
        //console.log("hey")
        this.name ="test name";
        this.req;
        //this.pimage = pattern_image;
        this.pimage = img;
        this.slide_draw_TO;

        this.xPos = 50;
        this.yPos = 0;

        this.xPos2 = 0;
        this.yPos2 = 0;

        this.angle =0;
        this.range =0;
        this.r = 550;


        this.timeIt  =  function () {

             this.slide_draw_TO = setTimeout(function() {
                      
                       req =  window.requestAnimationFrame(timeIt, pattern_canvas);
                        
                        //console.log("tik tok");
                        pattern_context.clearRect(0, 0, pattern_canvas.width, pattern_canvas.height);
                        
                        pattern_context.drawImage(pimage, 0, 0);      //console.log("ticking away");
                        
                        gradient_context.clearRect(0, 0, pattern_canvas.width, pattern_canvas.height);  
                          
                        
                        
                        /*> First gradient animation */
                        

                        xPos = xPos+0.83;
                        //vertical range of undulating
                        yPos = (336/2) + Math.cos(angle)*(80) + range;
                        //the bigger the angle increments the faster it happens
                        angle+=0.040;  

                        // undulating the radius of the gradient 
                        var r = 60 + Math.sin(angle)*50 + 25;
                      
                        // if off the visible area 
                        if(xPos> 370) {
                          angle=0;
                          xPos= -25;

                        } 

                        /* calling the grad continuously */
                        createGrad(xPos,yPos,xPos2,yPos2,r,gradient_context);
                 

                    }, 1000/30);

        },
        // kills the animation process
        this.killIt = function () {

            clearTimeout(this.slide_draw_TO);
            cancelAnimationFrame(this.req);
            this.req= null; this.slide_draw_TO = null;
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


      window.anim1 = document.getElementById("pattern_canvas");
      window.grad1 = document.getElementById("gradient_canvas");
      window.slide_copy1 = document.getElementById("banner-copy-wrap")
      window.cta1 = document.getElementById("banner-cta");
     // TweenLite.to(foo, 2, {alpha:0});

     // TweenLite.to(anim1, 2, {alpha:0, delay:2});
   // TweenLite.to(grad1, 2, {alpha:0});
      //sinus undulating

      //drawFrame();
        
      //----------timers , 

    
    
// slide 1 on and off
    
    window.t1onF = function () {

        window.activeTransition="t1on";
        window.t1on = setTimeout ( function() {

          //console.log("start the first Slide1");
          //pattern_context.clearRect(0, 0, pattern_canvas.width, pattern_canvas.height);
          //pattern_context.drawImage(pattern_image, 0, 0);

          document.getElementById("banner-h1").innerHTML=" Slide 1 <br/> hey"
          document.getElementById("banner-h1").style.color = "#003745";
          document.getElementById("banner-cap").style.color ="#003745";
          document.getElementById("banner-cta").style.left="430px";
          document.getElementById("banner-copy-wrap").style.left="430px";
          
          TweenLite.to(anim1, 1, {alpha:1, delay:0}); 
          TweenLite.to(grad1, 1, {alpha:1, delay:0.3});
          TweenLite.to(slide_copy1,1 ,{alpha:1, delay:0})
          TweenLite.to(cta1,1, {alpha:1,delay:0})

              x1= 50, y1 = 0; angle =0;

          //drawFrame();
           //window.slide1 = drawIt(pattern_image) ;
           window.slide1 = drawIt(pattern_image);
           window.slide1.timeIt();
           //window.slide1().fun1();
          t1offF();
        } , 1000)


     
  } 

    window.t1offF =  function () {


          window.activeTransition="t1off";
          window.t1off = setTimeout ( function() {

            //console.log("finish the first Slide1");
            
            TweenLite.to(anim1, 1, {alpha:0, delay:0.6}); 
            TweenLite.to(grad1, 1, {alpha:0, delay:0});
            TweenLite.to(slide_copy1,1 ,{alpha:0, delay:0})
            TweenLite.to(cta1,1, {alpha:0,delay:0})
            


            //clearTimeout(slide1_draw_TO);
            //cancelAnimationFrame( window.req1 );
            window.slide1.killIt();
            window.slide1 = null;
           t2onF();
          } , 6000)
    
    }

//


// slide 2 on and off
       window.t2onF = function () {


        window.activeTransition="t2on";
        window.t2on = setTimeout ( function() {

          //console.log("start the first Slide2");
          
          //pattern_context.clearRect(0, 0, pattern_canvas.width, pattern_canvas.height);
          //pattern_context.drawImage(pattern_image2, 0, 0);
          document.getElementById("banner-h1").innerHTML=" Lorem ipsum <br/> hey"
          document.getElementById("banner-h1").style.color = "#FFFFFF";
          document.getElementById("banner-cap").style.color ="#FFFFFF";
          document.getElementById("banner-cta").style.left="400px";
          document.getElementById("banner-copy-wrap").style.left="400px";

        TweenLite.to(anim1, 1, {alpha:1, delay:0}); 
        TweenLite.to(grad1, 1, {alpha:1, delay:0.3});
        TweenLite.to(slide_copy1,1 ,{alpha:1, delay:0})
        TweenLite.to(cta1,1, {alpha:1,delay:0})

        x1= 100, y1 = 0; angle =0;
          
         // slide2 = drawIt(pattern_image2) 
        //drawFrame2();
        
        window.slide2 = drawIt(pattern_image2);
        window.slide2.timeIt();
       
       t2offF();
         // t1offF();
        } , 1000)
      } 

          window.t2offF =  function () {


            window.activeTransition="t2off";
            window.t2off = setTimeout ( function() {

            //console.log("finish the first Slide1");
            
            TweenLite.to(anim1, 1, {alpha:0, delay:0.6}); 
            TweenLite.to(grad1, 1, {alpha:0, delay:0});
            TweenLite.to(slide_copy1,1 ,{alpha:0, delay:0})
            TweenLite.to(cta1,1, {alpha:0,delay:0})
            
            //clearTimeout(slide2_draw_TO);
            //cancelAnimationFrame( window.req2 );
            
            slide2.killIt();
            window.slide2 = null;

            t3onF();
          } , 6000)
    
    }

    

       window.t3onF = function () {


          window.activeTransition="t3on";
        window.t3on = setTimeout ( function() {

          //console.log("start the slide 3");
          
          //pattern_context.clearRect(0, 0, pattern_canvas.width, pattern_canvas.height);
          //pattern_context.drawImage(pattern_image3, 0, 0);
          document.getElementById("banner-h1").innerHTML=" Slide 3 <br/> hey"
          document.getElementById("banner-h1").style.color = "#003745";
          document.getElementById("banner-cap").style.color ="#003745";
          document.getElementById("banner-cta").style.left="400px";
          document.getElementById("banner-copy-wrap").style.left="400px";

          TweenLite.to(anim1, 1, {alpha:1, delay:0}); 
          TweenLite.to(grad1, 1, {alpha:1, delay:0.3});
          TweenLite.to(slide_copy1,1 ,{alpha:1, delay:0})
          TweenLite.to(cta1,1, {alpha:1,delay:0})

           x1= 50, y1 = 0; angle =0;
         
          //drawFrame3();
           window.slide3 = drawIt(pattern_image3);
           window.slide3.timeIt();
         t3offF();
        } , 1000)
      } 


       window.t3offF =  function () {


          window.activeTransition="t3off";
          window.t3off = setTimeout ( function() {

            //console.log("finish the first Slide1");
            
            TweenLite.to(anim1, 1, {alpha:0, delay:0.6}); 
            TweenLite.to(grad1, 1, {alpha:0, delay:0});
            TweenLite.to(slide_copy1,1 ,{alpha:0, delay:0})
            TweenLite.to(cta1,1, {alpha:0,delay:0})
            

            slide3.killIt();
            slide3 = null;
            //clearTimeout(slide3_draw_TO);
            //cancelAnimationFrame( window.req3 );
           
           t1onF();
          } , 6000)
    
    }




    

  t1offF();

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
            switch(window.activeTransition) {

              case "t1on": clearTimeout(window.t1on);
              break;

              case "t1off": clearTimeout(window.t1off);
              break;

              case "t2on": clearTimeout(window.t2on);
              break;

              case "t2off": clearTimeout(window.t2off);
              break;
              
              case "t3on": clearTimeout(window.t3on);
              break;

              case "t3off":clearTimeout(window.t3off);
              break;
            }


  } else if (document[state]!=="hidden") {

     // window.t1onF(); 

     //document.getElementById("anim-wrapper").style.display="none";

     // some sort of reset, or playing the animation from the 
     // plays the animaton from a given point in time 
          document.dispatchEvent(ce);

             switch(window.activeTransition) {

              case "t1on": t1onF()
              break;

              case "t1off": t1offF() 
              break;

              case "t2on": t2onF();
              break;

              case "t2off": t2offF();
              break;

              case "t3on": t3onF();
              break;

              case "t3off": t3offF();
              break;



            }
  }

}, false);


document.title = document[state];


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