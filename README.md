# _Pizza Pizza_

#### _An application allows a user to order a pizza from Pizza My Heart pizza shop, November 2, 2018_

#### By _**Maly Phongsavanh**_

## Description

_This application will allow a user to input their name and address for delivery from a pizza shop. The user will also be able to select 1 size along with multiple protein and vegetable toppings for the pizza. The application will then show the user their order along with the total cost of the pizza ordered. The user will also see where their pizza will be delivered to._

## Specifications
* _User inputs a name and address( street, city, state ), otherwise a window will tell the user to fill in all fields._
  * **Input:** Name: Bob // Street: -empty- // City: Portland // State: OR
  * **Output:** "Please make sure all fields are filled out"

* _Start Price of any pizza is $5_
  * **Input:** Pizza: no selection
  * **Output:** Pizza: $5 + no selection

* _User selects a pizza size, each size has their own price.._
  * **Input:** Small // Medium // Large // Family Size
  * **Output:** $8 // $12 // $15 // $18

* _User can select multiple proteins. Proteins have a start amount of $2 with an additional $1 per select_
  * **Input:** Selects Chicken & Ham
  * **Output:** Price is $2 + $1(Chicken) + $1(Ham) = $4 total

* _User can select multiple vegetable toppings. Toppings have a start amount of $0 with an additional $1 per select_
  * **Input:** Selects Onions, Mushrooms, & Pineapple
  * **Output:** Price is $1 + $1 + $1 = $3 total

* _Application with spit out a total for the pizza ordered_
  * **Input:** Selects [Small] [Chicken, Ham] [Pineapple]
  * **Output:** $5(start) + $8(small) + $4($2, Chicken, Ham) + $1(Pineapple) = $18 total


## Setup/Installation

* _Clone from github [Pizza-Pizza repository](https://github.com/MalyPhong619/Pizza-Pizza.git)_


## Support and contact details

_If there are any questions or would like to contribute to the code, please feel free to email [Maly Phongsavanh](mailto:phongsavanh619@icloud.com)_

## Technologies Used

* _ATOM -text editor-_
* _BOOTSTRAP_
* _JQUERY_

### License

*Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*

Copyright (c) 2018 **_Maly Phongsavanh_**
