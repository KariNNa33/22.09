import { useState } from "react";
import "./App.scss";

function App() {
  const str1 = "text1";
  const str2 = "text1";
  const name = "user";
  const age = "30";
  const arr = [1, 2, 3, 4, 5];
  const obj = { name: "john", surname: "smit" };
  const attr = "block";
  const li1 = <li>text1</li>;
	const li2 = <li>text2</li>;
	const li3 = <li>text3</li>;
  const items = <><li>text1</li><li>text2</li><li>text3</li></>;

  const num1 = 3;
	const num2 = 2;
  const name1 = 'john';
	const surname = 'smit';
  const num = 4;

  let text;
	const isAdult = false;
	if (isAdult) {
		text = '18';
	} else {
		text = '14';
	}


  let text1;
  const isAdmin = true;
  if (isAdmin) {
		text1 =<><p>crttv</p><p>re</p></>;
	} else {
		text1 = false;
	}

  const age1 = 45;

  const isAuth = false;

  const isAuth1 = false;

  return (
    <>
      <div id={attr}>

        {/* 7 */}
        <p className="text_1">kappa</p>
        <p className="text_2">kappa</p>


        {/* 8 */}
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
        </ul>


        {/* 10 */}
        <ul>
          <li>text1</li>
          <li>text2</li>
          <li>text3</li>
        </ul>
        <ul>
          <li>text1</li>
          <li>text2</li>
          <li>text3</li>
        </ul>
        <ul>
          <li>text1</li>
          <li>text2</li>
          <li>text3</li>
        </ul>


        {/* 12 */}
        <input />
        <input />
        <input />


        {/* 13 */}
        <p>{str1}</p>
        <p>{str2}</p>


        {/* 14 */}
        <p>name:{name}</p>
        <p> age:{age}</p>


        {/* 15 */}
        <ul>
          <li>{arr[0]}</li>
          <li>{arr[1]}</li>
          <li>{arr[2]}</li>
          <li>{arr[3]}</li>
          <li>{arr[4]}</li>
        </ul>


        {/* 16 */}
        <p>
          name:<span>{obj.name}</span> <br /> surname:<span>{obj.surname}</span>
        </p>


        {/* 19 */}
        <ul>
          <li>{li1}</li>
          <li>{li2}</li>
          <li>{li3}</li>
        </ul>


        {/* 20 */}
        <p>{items}</p>


        {/* 22 */}
        <input /><br/>
        <input /><br/>
        <input />


        {/* 23 */}
        <table>
		<tbody>
			<tr>
				<td>1</td>
				<td>2</td>
        <td>3</td>
			</tr>
			<tr>
				<td>4</td>
				<td>5</td>
        <td>6</td>
			</tr>
      <tr>
				<td>7</td>
				<td>8</td>
        <td>9</td>
			</tr>
		</tbody>
	</table>


  {/* 24 */}
  result: {num1 ** num2}
  <br/>
  result: {name1 + ' ' + surname}
  <br/>
  result: {Math.sqrt(num)}


  {/* 26 */}
  {text}


  {/* 27 */}
  {text1}


  {/* 28 */}
  {age1 <18? <p>text1</p> : <p>text2</p>}


{/* 29 */}
  {isAuth ? <p>вы авторизованы</p> : <p></p>}


  {/* 30 */}
  {!isAuth1 && <p>пожалуйста, авторизуйтесь</p>}
      </div>
    </>
  );
}

export default App;
