 //document.body.style.backgroundImage="url('image1.jpg')";
var arr=["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg","image6.jpg"];
var i=1;



   function test(){
        if(i>5){
            i=0;
        }
        document.body.style.backgroundImage='url('+arr[i]+')';
i++;
    }
   // setInterval("test()",3000);