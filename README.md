# Calculator-In-URL <BR>
Hello, Welcome To The Official Documentation Of My Calculator-In-URL. <BR>
## Back-End <BR>
-  **Language/Framework Used:** Javascript, NodeJS, ExpressJS <BR>
- [Click To Visit](https://calculator-in-url.onrender.com) <BR>

## API <BR>

> **# Home Page:** <BR>
> **GET:** `/` <BR>

> **# Get History Of 20 Last Calculations:** <BR>
>**GET:** `/History` <BR>
>JSON Received: <BR>
>`Last 20 Transcations JSON` <BR>

> **# Bitwise Operations Route:** <BR>
>**GET:** `/BitwiseOperations` <BR>

> **# Supported Mathematical Operators:** <BR>
>- Plus(+)
>- Minus(-)
>- Into(*)
>- By(/)
>- Remainder(%)
>- RaisedTo(**)

> **# Supported Bitwise Operators:** <BR>
>- AND(&)
>- OR(/)
>- XOR(^)

> **# Examples To Understand Working:** <BR>
>>**GET:** `/2/Plus/3` <BR>
>JSON Received: <BR>
>`{` <BR>
	`"Expression":"2+3",` <BR>
	`"Answer":"5",` <BR>
`}` <BR>

>>**GET:** `/2.3/Into/3.5` <BR>
>JSON Received: <BR>
>`{` <BR>
	`"Expression":"2.3*3.5",` <BR>
	`"Answer":"8.05",` <BR>
`}` <BR> <BR>
>>**GET:** `/2/By/2/Minus/11` <BR>
>JSON Received: <BR>
>`{` <BR>
	`"Expression":"2/2-11",` <BR>
	`"Answer":"-10",` <BR>
`}` <BR> <BR>
>>**GET:** `/LeftBracket/2.2/Plus/3.3/RightBracket/Into/5.5` <BR>
>JSON Received: <BR>
>`{` <BR>
	`"Expression":"(2.2+3.3)*5.5",` <BR>
	`"Answer":"30.25",` <BR>
`}` <BR> <BR>
>>**GET:** `/5/AND/1` <BR>
>JSON Received: <BR>
>`{` <BR>
	`"Expression":"5&1",` <BR>
	`"Answer":"1",` <BR>
`}` <BR> <BR>
>>**GET:** `/5/AND/1/XOR/5` <BR>
>JSON Received: <BR>
>`{` <BR>
	`"Expression":"5&1^5",` <BR>
	`"Answer":"4",` <BR>
`}` <BR>
