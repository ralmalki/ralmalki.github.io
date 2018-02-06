var bubbleObj, selected = -1, arrRandom = {keys: [], values: []}
// selected is for highlighting the bar 

function setup(){
    //this function is called exactly one time when the sketch starts
    //creates a drawing area, 500px X 500 px
    bubbleObj = new BubbleSort(1300, 600);
    bubbleObj.play.mousePressed(()=>{
        BubbleSort.executePlay(bubbleObj);
    });
	bubbleObj.pause.mousePressed(()=>{
        BubbleSort.executePause(bubbleObj);
    });
    frameRate(20);
	

}

function draw(){
    //this function is called 60 times per second
    //draws a white background (this effectively erases the previous frame)
    background(255,255,255);
    //BubbleSort.eventBars([4,1,3,5, 6, 9]);
    BubbleSort.draw(bubbleObj);
    //this next lines draws an ellipse

}


class BubbleSort {
    constructor(height, width){
        this.canvas = createCanvas(height, width);
		this.canvas.parent('sketch-holder');
        this.play   = createButton("play");
		this.pause  = createButton("pause");
        this.i = 0;
        this.j = 0;
        this.arr = [14,1,5,12,22,17,23,13,32,30,29,3,36,16,20,38,31,9,4,39,7,34,26,35,15,25,19,33,18,11,37,2,28,24,27,8,10,6,21];
		//this.arr = [14,1,5,12,22];
		this.isPaused = false;
		this.isPlayed = false;
        this.text = "hello world!";
    }

    static bubble(obj) {
      var len = obj.arr.length;
      var arr = obj.arr.slice();

      for (var i = 0; i < len ; i++) {
        for(var j = 0; j < len - i - 1; j++) {

          if (arr[j] > arr[j + 1]) {
            arrRandom.values.unshift(arr[j]);
            arrRandom.keys.unshift(j);
            // arrRandom.values.unshift(arr[j+1]);
            // arrRandom.keys.unshift(j+1);
            BubbleSort.swap(j, arr);
            // swap
            // var temp = arr[j];
            // arr[j] = arr[j+1];
            // arr[j + 1] = temp;
          }
        }
      }
      return arr;
    }

    static swap(j, arr) {
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
    }

    static executePlay(obj){
		if(!obj.isPlayed) {
			obj.isPlayed = true;
			obj.isPaused = false;
			//selected = 1;
			console.log(obj.i++);
			//BubbleSort.bubble(obj)
			console.log(BubbleSort.bubble(obj));
		}
    }
	
	static executePause(obj) {
		obj.isPlayed = false;
		obj.isPaused = true;
		console.log("OBJ ARR: " + obj.arr);
		arrRandom = {keys: [], values: []};
	}

    static draw(obj){
		
		BubbleSort.eventBars(obj.arr);
		var myarr = obj.arr;

		if (obj.i != 0){
			console.log("changed!");
		}
		
		if(!obj.isPaused) {
			console.log(arrRandom);
			if (arrRandom.keys != 0){
				selected = arrRandom.values.pop();
				var key = arrRandom.keys.pop();
				console.log("SWAPPING: " + selected + " KEY: " + key);
				BubbleSort.swap(key, myarr);
			}
			else
			{
				selected = -1;
			}
		} // if isPaused - end
    }

    static colorTrigger(x){

    }

    static eventBars(list) {
        var posX = 0, posY = 20, width = 20, height = 10;
        var c;
		// checking in the array, if the current selected is found in array,
		// change color to yellow and leave unselected as black
        function myfunc(x) {
            if (selected != x){
                c = color(65); // Update 'c' with grayscale value
                fill(c); // Use updated 'c' as fill color
            }
            else {
                c = color(255, 204, 0); // Define color 'c'
                fill(c); // Use color variable 'c' as fill color
                noStroke(); // Don't draw a stroke around shapes
            }

            posX = posX + 30;
            rect(posX, 500, width, -1*(height*x));
        }
        return list.map(myfunc);
    }
}
