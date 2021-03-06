# Casio fx-991EX QR code
Reverse engerneeing the Casio QR code. Here is a self made Web [Demo](https://page-david.github.io/fx991ex-QR/web/).

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
|       S-401410101010101E1010B0000C41       | relative with current SETUP |
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
| 21 | ![e][nature_e] |
| 22 | ![pi][pi] |
| 2D | ![x10][x10] |
| 2E | ![.][.] |

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
| CA1D1Axx（degree of root)1B1Axx(radicand)1B1E | ![sqrt_any][sqrt_any] |
| 681Axx1B | ![abs][abs] |
| C81D1Axx(numerator)1B1Axx(denominator)1B1E | ![frag][frag] |
| 181F1D1Axx(integer)1B1Axx(numerator)1B1Axx(denominator)1B1E | ![mix_num][mix_num] |
| D7 | ![%][perc] |
| D8 | ![factorial][factorial] |
| 60 | ![left_brace][left_brace] |
| D0 | ![right_brace][right_brace] |
| C0 | ![(-)][neg] |
| xx(base)C91Axx(power)1B | ![power][power] |
| 721Axx(power)1B | ![e_power][e_power] |
| 731Axx(power)1B | ![10_power][10_power] |
| 75 | ![ln][ln] |
| 7D | ![log_10][log_10] |
| 7D1Axx(base)1Cxx(proper)1B | ![log][log] |

Note: `xx` is placeholder, for example, ![sqrt6][sqrt6] should be 741A*36*1B

### Trigonometric function
| key | value |
|:-----:|:-------:|
| 77 | ![sin(][sin] |
| 78 | ![cos(][cos] |
| 79 | ![tan(][tan] |
| 7A | ![sin-1][sin-1] |
| 7B | ![cos-1][cos-1] |
| 7C | ![tan-1][tan-1] |

### Engineer Symbol
| key | value |
|:-----:|:-------:|
| DD | ![es_E][es_E] |
| DE | ![es_P][es_P] |
| DF | ![es_T][es_T] |
| E0 | ![es_G][es_G] |
| E1 | ![es_M][es_M] |
| E2 | ![es_k][es_k] |
| E3 | ![es_m][es_mm] |
| E4 | ![es_u][es_u] |
| E5 | ![es_n][es_n] |
| E6 | ![es_p][es_p] |
| E7 | ![es_f][es_f] |

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
[A]: http://latex.codecogs.com/gif.latex?{\color{Red}A}
[B]: http://latex.codecogs.com/gif.latex?{\color{Red}B}
[C]: http://latex.codecogs.com/gif.latex?{\color{Red}C}
[D]: http://latex.codecogs.com/gif.latex?{\color{Red}D}
[E]: http://latex.codecogs.com/gif.latex?{\color{Red}E}
[F]: http://latex.codecogs.com/gif.latex?{\color{Red}F}
[x]: http://latex.codecogs.com/gif.latex?{\color{Red}x}
[y]: http://latex.codecogs.com/gif.latex?{\color{Red}y}
[M]: http://latex.codecogs.com/gif.latex?{\color{Red}M}
[plus]: http://latex.codecogs.com/gif.latex?+
[minus]: http://latex.codecogs.com/gif.latex?-
[multiply]: http://latex.codecogs.com/gif.latex?{\times}
[divition]: http://latex.codecogs.com/gif.latex?{\div}
[sqrt]: http://latex.codecogs.com/gif.latex?\sqrt{\hspace{1em}}
[sqrt_any]: http://latex.codecogs.com/gif.latex?^{\fbox{\phantom{\tiny1}}}\sqrt{\hspace{1em}}
[sqrt6]: http://latex.codecogs.com/gif.latex?\sqrt{6}
[abs]: http://latex.codecogs.com/gif.latex?\left|\hspace{1em}\right|
[frag]: http://latex.codecogs.com/gif.latex?\frac{\framebox{\phantom{1}}}{\fbox{\phantom{1}}}
[perc]: http://latex.codecogs.com/gif.latex?{\\%}
[factorial]: http://latex.codecogs.com/gif.latex?!
[mix_num]: http://latex.codecogs.com/gif.latex?\framebox{\phantom{1}}\frac{\framebox{\phantom{1}}}{\fbox{\phantom{1}}}
[x10]: http://latex.codecogs.com/gif.latex?{\times}10^x
[neg]: http://latex.codecogs.com/gif.latex?(\text{-})
[power]: http://latex.codecogs.com/gif.latex?\large&space;x^{\\;\fbox{\phantom{\tiny1}}}
[e_power]: http://latex.codecogs.com/gif.latex?\large&space;{\mathrm{e}}^{\\;\fbox{\phantom{\tiny1}}}
[10_power]: http://latex.codecogs.com/gif.latex?\tiny10^{\\;\fbox{\phantom{\tiny1}}}
[sin]: http://latex.codecogs.com/gif.latex?\sin(
[cos]: http://latex.codecogs.com/gif.latex?\cos(
[tan]: http://latex.codecogs.com/gif.latex?\tan(
[sin-1]: http://latex.codecogs.com/gif.latex?\sin^{-1}(
[cos-1]: http://latex.codecogs.com/gif.latex?\cos^{-1}(
[tan-1]: http://latex.codecogs.com/gif.latex?\tan^{-1}(
[log_10]: http://latex.codecogs.com/gif.latex?log(
[ln]: http://latex.codecogs.com/gif.latex?ln(
[log]: http://latex.codecogs.com/gif.latex?log{_{\fbox{\phantom{\tiny1}}}}\\,{\fbox{\phantom{1}}}
[es_E]: http://latex.codecogs.com/gif.latex?\textbf{E}
[es_P]: http://latex.codecogs.com/gif.latex?\textbf{P}
[es_T]: http://latex.codecogs.com/gif.latex?\textbf{T}
[es_G]: http://latex.codecogs.com/gif.latex?\textbf{G}
[es_M]: http://latex.codecogs.com/gif.latex?\textbf{M}
[es_k]: http://latex.codecogs.com/gif.latex?\textbf{k}
[es_mm]: http://latex.codecogs.com/gif.latex?\textbf{m}
[es_u]: http://latex.codecogs.com/gif.latex?\mu
[es_n]: http://latex.codecogs.com/gif.latex?\textbf{n}
[es_p]: http://latex.codecogs.com/gif.latex?\textbf{p}
[es_f]: http://latex.codecogs.com/gif.latex?\textbf{f}
[left_brace]: http://latex.codecogs.com/gif.latex?\(
[right_brace]: http://latex.codecogs.com/gif.latex?\)
