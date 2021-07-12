/*
\' => single quote
\" => double quote
\\ => backslash
\n => newline
\r => carriage return
\t => tab
\b => backspace
\f => formfeed
*/

var str1 = 'Hello my boy'; // single quote
var str2 = "GG my boy";	// double quote

var str3 = "He said,"I am good.""; // (error)
/*
because there are multiple quotation, so program doesn't understand which will take as final quote.
program takes the closest quote as final quote 
*/

// to solve this problem, we can use (\)
var str3 = "He said,\"I am good.\""; // (\ will solve the problem)

//or
var str3 = 'He said, "I am good."';