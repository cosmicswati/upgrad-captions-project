const express = require( 'express') |

const cookieParser = require( cookie-parser');

const app
=
express ()
5
6
7
*// connect to db
require('•/db/connection'
8
9
10
•11
app-use (express. json())
app. use (express. urlencoded ({ extended: false })) app-use (cookieParser())
12
13
14
const port = process.env.PORT || 8000;
15
16
app-get (°/', (req, res) → 1 res- send ("Hello World");
17
18
19
20
* app. Listen (port, ()= {
21
22
console. log ('Server is running");