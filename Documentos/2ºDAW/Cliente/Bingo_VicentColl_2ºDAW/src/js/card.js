function generateBingoCard() {
     let templateRow = [0, 1, 2, 3, 4, 5, 6, 7, 8];
     let cardMatrix = [[...templateRow], [...templateRow], [...templateRow]];
     //Transpose matrix to fullfill all cells with random numbers
     let transposedCardMatrix = transpose(cardMatrix);
     transposedCardMatrix.forEach((colCard, index) => {
          transposedCardMatrix[index] = getRandomArbitrary(index * 10, (index * 10) + 10, 3);
     });
     //Again transpose to get original shape
     cardMatrix = transpose(transposedCardMatrix);

     //Pass an array and we ramdomly pick only an array of 4 elements supposed to be blanks
     function getBlanks([...ai]) {
          let iterator = Array.apply(null, Array(ai.length - 4));
          iterator.forEach((el) => {
               ai.splice(Math.floor(Math.random() * ai.length), 1);
          });
          return ai.map((elem) => Math.floor(elem / 10))
     }
     /**
     * Returns count random numbers between min (inclusive) and max (exclusive)
     */
     function getRandomArbitrary(min, max, count) {
          let arr3 = []
          min = (min == 0) ? 1 : min
          max = (max == 90) ? 91 : max

          do {
               let randN = Math.floor(Math.random() * (max - min) + min);
               if (!arr3.includes(randN)) arr3.push(randN);
          } while (arr3.length != count)
          return arr3.sort();
     }

     let row1Blanks = getBlanks(cardMatrix[0]);//Get four empty cells
     let row2Blanks = getBlanks(cardMatrix[1]);//Get four empty cells
     //Pass two arrays eliminate numbers duplicates on both and from resulting array pick only an array of 4 elements
     let duplicatesNonSelectable = row1Blanks.filter(function (i) { return row2Blanks.indexOf(i) >= 0; });
     let templateRow1 = [...cardMatrix[2]];
     duplicatesNonSelectable.forEach((elem) => templateRow1[elem] = null);
     let row3Blanks = getBlanks(templateRow1.filter((elem) => elem != null));

     row1Blanks.forEach((elem) => cardMatrix[0][elem] = null);//Put a null in every empty picked cell row1
     row2Blanks.forEach((elem) => cardMatrix[1][elem] = null);//Put a null in every empty picked cell row2
     row3Blanks.forEach((elem) => cardMatrix[2][elem] = null);



     return cardMatrix;
}



function renderBingoCard(cardMatrix, copycard, extractedBalls) {

     // console.log(copycard)


     let out = "<table class='bingoCard'>"

     cardMatrix.forEach((row) => {

          // console.log(cardMatrix);
          row = (row.length == 10) ? row.splice(-1, 1) : row

          out += "<tr>"
          row.forEach((cellValue) => {
                       
               // console.log(cellValue)
               if (cellValue == null) {
                    out += "<th class='nulo'></th>";
               } else {
                    if (extractedBalls && extractedBalls.indexOf(cellValue) >= 0) {

                         let extracted_ball =(extractedBalls[extractedBalls.length -1])

                         out += "<th class='extracted'>" + cellValue + "</th>";

                         line_bingo(copycard, extracted_ball)

                    } else {
                         out += "<th>" + cellValue + "</th>";
                    }
               }
          });
          out += "</tr>";
     })
     out += "</table>";


     return out;

     line_bingo(copycard, extracted_ball)

}

//Transpose a matrix
function transpose(matrix) {
     return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

function line_bingo (copycard, extracted_ball) {
     copycard.forEach(row => {
          row.forEach(element => {
                if (element == extracted_ball) {
                     console.log(row)
                     let index=( row.indexOf(element));
                    console.log(index)
                     row.splice(index,1)
                     console.log(row)
                    //  alert(element)
                    let cont=0

                     if(row.length==0){

                         copycard.forEach(row => {
                              console.log(row)

                              if(row.length==0){
                                   cont=cont+1
                                   console.log(cont)


                              }

                         })
                         if(cont==1) {
                              alert("LINEA!!!!")
     
                          }
                          if(cont==3) {
                              alert("bingo!!!!")
     
                          }
                     }


                }
          })
     })
     
}

export { generateBingoCard, renderBingoCard };