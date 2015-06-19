window.onload = function() {

  var visualizableArray = [];
  var arraySize = 50;
  var highestInput = 999;
  var interval = 10;
  // var newInterval = 1000;
  var updateQueue = [];

  //generate random array for sort visualization
  function generateArray() {

    visualizableArray = [];

    for(var i = 0; i < arraySize; i++) {

      visualizableArray.push(Math.floor(Math.random() *1000));
    }

    return visualizableArray;
  }


  // normalizes number to a 0-255 range
  function normalizeInputToRange(number, highestInput, highestOutput) {

    return ((number * highestOutput) / highestInput) + 20;
  }

  function transform(to,from) {

    //to.id = from.id;
    //to.value = from.value;
    to.style.maxWidth = from.style.maxWidth;
    to.style.backgroundColor = from.style.backgroundColor;
    to.innerHTML = from.innerHTML;
  }

  var interval_sort = function(array) {

    for(var i = 0; i < array.length; i++) {

      if((i + 1) === array.length) {

        console.log(array);

        clearInterval(intervalID);

      } else if(array[i] > array[(i+1)]) {

        var li1 = document.getElementById(i);
        var li2 = document.getElementById((i+1).toString());
        var temp = document.createElement('li');
        //temp.id = li1.id;

        transform(temp,li1);
        transform(li1,li2);
        transform(li2,temp);

        var tempVariable = array[i];
        array[i] = array[i+1];
        array[i+1] = tempVariable;



        // console.log(temp);
        // console.log(li1);
        // console.log(li2);
        // console.log(i);
        // console.log((i+1).toString());
        // console.log(visualizableArray);



        //return array;
        visualizableArray = array;
        return;
      }
    }

    //return array;
    visualizableArray = array;
  }

  // var recursive_sort = function(array,sorted) {

  //   while(!sorted) {

  //     for(var i = 0; i < array.length; i++) {

  //       if(i + 1 === array.length) {

  //         sorted = true;

  //       } else if(array[i] > array[i+1]) {

  //         var tempVariable = array[i];
  //         array[i] = array[i+1];
  //         array[i+1] = tempVariable;

  //         updateQueue.push({

  //           to: i,
  //           from: (i+1)
  //         });

  //         recursive_sort(array,sorted);
  //       }
  //     }
  //   }

  //   return array;
  // }

  // function dequeueToDisplay() {

  //   var intervalID = setInterval(function() {

  //     var action = updateQueue[0];

  //     if(!action) {

  //       clearInterval(intervalID);

  //     } else {

  //       var li1 = document.getElementById(action.to.toString());
  //       var li2 = document.getElementById(action.from.toString());
  //       var temp = document.createElement('li');

  //       console.log(action);
  //       console.log(li1);
  //       console.log(li2);

  //       transform(temp,li1);
  //       transform(li1,li2);
  //       transform(li2,temp);

  //       updateQueue.splice(0,1);
  //     }


  //   }, interval)
  // }

  visualizableArray = generateArray();

  var orderedList = document.createElement('ol');
  orderedList.style.listStyle = "none";
  orderedList.style.fontFamily = "Arial";
  orderedList.style.fontSize = "12px";

  for(var i = 0; i < visualizableArray.length; i++) {

    var colorValue = Math.floor(normalizeInputToRange(visualizableArray[i],highestInput,255));
    var widthValue = Math.floor(normalizeInputToRange(visualizableArray[i],highestInput,1000));

    var arrayItem = document.createElement('li');
    arrayItem.id = i;
    arrayItem.value = i;
    arrayItem.style.height = "5px";
    arrayItem.style.maxWidth = widthValue + "px";
    arrayItem.style.backgroundColor = "rgb("+colorValue+","+colorValue+","+colorValue+")";
    //arrayItem.style.border = "1px solid";
    //arrayItem.style.color = "MediumBlue";
    //arrayItem.value = i;
    //arrayItem.innerHTML = visualizableArray[i];

    orderedList.appendChild(arrayItem)
  }

  document.body.appendChild(orderedList);

  //visualizableArray = generateArray();

  //console.log(visualizableArray);

  var intervalID = setInterval(interval_sort(visualizableArray), interval);

  // recursive_sort(visualizableArray,false);

  // dequeueToDisplay();
}