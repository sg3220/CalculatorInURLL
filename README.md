# Calculator-In-URL <BR>
Hello, Welcome To The Official Documentation Of My Calculator-In-URL. <BR>
## Back-End <BR>
-  **Language/Environment/Library/Framework Used:** Javascript, NodeJS, ExpressJS <BR>
- [Click To Visit](https://calculator-in-url.onrender.com) <BR>

## API <BR>

> **# Home Page:**
> **GET:** `/` <BR>

> **# Get History Of 20 Last Calculations:**
>**GET:** `/History` 
>JSON Received:
>`Last 20 Transcations JSON`

> **# Bitwise Operations Route:**
>**GET:** `/BitwiseOperations` 

> **# Supported Mathematical Operators:** 
>- Plus(+)
>- Minus(-)
>- Into(*)
>- By(/)
>- Remainder(%)
>- RaisedTo(**)

> **# Supported Bitwise Operators:** 
>- AND(&)
>- OR(/)
>- XOR(^)

> **# Examples To Understand Working:** 
>>**GET:** `/2/Plus/3`
>JSON Received:
>`{`
	`"Expression":"2+3",`
	`"Answer":"5",`
`}`
>>**GET:** `/2.3/Into/3.5`
>JSON Received:
>`{`
	`"Expression":"2.3*3.5",`
	`"Answer":"8.05",`
`}`
>>**GET:** `/2/By/2/Minus/11`
>JSON Received:
>`{`
	`"Expression":"2/2-11",`
	`"Answer":"-10",`
`}`
>>**GET:** `/LeftBracket/2.2/Plus/3.3/RightBracket/Into/5.5`
>JSON Received:
>`{`
	`"Expression":"(2.2+3.3)*5.5",`
	`"Answer":"30.25",`
`}`
>>**GET:** `/5/AND/1`
>JSON Received:
>`{`
	`"Expression":"5&1",`
	`"Answer":"1",`
`}`
>>**GET:** `/5/AND/1/XOR/5`
>JSON Received:
>`{`
	`"Expression":"5&1^5",`
	`"Answer":"4",`
`}`
