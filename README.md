# Casio fx991 ex QR code

## Why we want to make out how QR code works?
The app or say the website Casio provides is awlful and must be online to use it. We can try to search out how the QR code works and make your own program to read data from the calculator.

## Summary
The QR code can be generated when there is result (to visulize results) or in mode select page (jump to a instruction). The QR code include a web URL which contains information, we can dig out how the URL related to our result and find out how to develop our own app finally.

## Basics
For example, an URL like http://wes.casio.com/math/index.php?q=I-255A+U-00030008EF6F+M-C10000AA00+S-401410101010101E1010B0000C41+R-0314159265358980010000000000000000000000+E-22 is combined with the following parts.

|                  URL parts                 |                description                 |
|--------------------------------------------|--------------------------------------------|
|    http://wes.casio.com/math/index.php?    | the domain where Casio store thier service |
|                  I-255A                    | UNKNOWN |
|              U-00030008EF6F                | UNKNOWN |
|              M-C10000AA00                  | UNKNOWN |
|       S-401410101010101E1010B0000C41       | UNKNOWN |
| R-0314159265358980010000000000000000000000 | relative with calculate result |
|                  E-22                      | the intput formula present by number pairs |

## KEY-VALUE relationship
As description in `Basics` we can find out what input is with number pairs after `E-` like `E-22` presents ![pi][pi]. Here is number list:

### numbers
| key | value |
|:-----:|:-------:|
| 30 | ![0][0] |
| 31 | ![1][1] |
| 32 | ![2][2] |
| 33 | ![3][3] |
| 34 | ![4][4] |
| 35 | ![5][5] |
| 36 | ![6][6] |
| 37 | ![7][7] |
| 38 | ![8][8] |
| 39 | ![9][9] |
| 2E | ![.][.] |
| 22 | ![pi][pi] |


[pi]: http://latex.codecogs.com/gif.latex?\pi
[0]: http://latex.codecogs.com/gif.latex?0
[1]: http://latex.codecogs.com/gif.latex?1
[2]: http://latex.codecogs.com/gif.latex?2
[3]: http://latex.codecogs.com/gif.latex?3
[4]: http://latex.codecogs.com/gif.latex?4
[5]: http://latex.codecogs.com/gif.latex?5
[6]: http://latex.codecogs.com/gif.latex?6
[7]: http://latex.codecogs.com/gif.latex?7
[8]: http://latex.codecogs.com/gif.latex?8
[9]: http://latex.codecogs.com/gif.latex?9
[.]: http://latex.codecogs.com/gif.latex?.
