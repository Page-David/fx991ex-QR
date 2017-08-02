# Casio fx-991EX QR code
Reverse engerneeing the Casio QR code.

## Why we want to make out how QR code works?
The app or say the website Casio provided is awlful and must be online to use it. We can try to search out how the QR code works and make your own program to read data from the calculator.

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
As description in Basics we can find out what input is with number pairs after `E-` like `E-22` presents ![pi][pi]. Here is number list:

### Numbers
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
| 21 | ![e][nature_e] |

### Variables
| key | value |
|:-----:|:-------:|
| 42 | ![A][A] |
| 43 | ![B][B] |
| 44 | ![C][C] |
| 45 | ![D][D] |
| 46 | ![E][E] |
| 47 | ![F][F] |
| 48 | ![x][x] |
| 49 | ![y][y] |
| 40 | ![M][M] |

### Elementary Mathematics
| key | value |
|:-----:|:-------:|
| A6 | ![plus][plus] |
| A7 | ![minus][minus] |
| A8 | ![multiply][multiply] |
| A9 | ![divition][divition] |
| 741Axx1B | ![sqrt][sqrt] |
| 681Axx1B | ![abs][abs] |
| C81D1Axx(numerator)1B1Axx(denominator)1B1E | ![frag][frag] |
| D7 | ![perc][perc] |

Note: `xx` is placeholder, for example, ![sqrt6][sqrt6] should be 741A*36*1B


[pi]: http://latex.codecogs.com/gif.latex?\pi
[nature_e]: http://latex.codecogs.com/gif.latex?{\color{Red}\mathrm{e}}
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
[A]:http://latex.codecogs.com/gif.latex?{\color{Red}A}
[B]:http://latex.codecogs.com/gif.latex?{\color{Red}B}
[C]:http://latex.codecogs.com/gif.latex?{\color{Red}C}
[D]:http://latex.codecogs.com/gif.latex?{\color{Red}D}
[E]:http://latex.codecogs.com/gif.latex?{\color{Red}E}
[F]:http://latex.codecogs.com/gif.latex?{\color{Red}F}
[x]:http://latex.codecogs.com/gif.latex?{\color{Red}x}
[y]:http://latex.codecogs.com/gif.latex?{\color{Red}y}
[M]:http://latex.codecogs.com/gif.latex?{\color{Red}M}
[plus]: http://latex.codecogs.com/gif.latex?+
[minus]: http://latex.codecogs.com/gif.latex?-
[multiply]: http://latex.codecogs.com/gif.latex?*
[divition]: http://latex.codecogs.com/gif.latex?/
[sqrt]: http://latex.codecogs.com/gif.latex?\sqrt{\hspace{1em}}
[sqrt6]: http://latex.codecogs.com/gif.latex?\sqrt{6}
[abs]: http://latex.codecogs.com/gif.latex?\left|\hspace{1em}\right|
[frag]: http://latex.codecogs.com/gif.latex?\frac{\framebox{\phantom{1}}}{\fbox{\phantom{1}}}
[perc]: http://latex.codecogs.com/gif.latex?{\\%}
