let books=[
		{id:1,price:80,thate:'2020-07-01',count:1,name:'java从入门到放弃'},
		{id:2,price:90,thate:'2020-07-02',count:1,name:'Vue从入门到放弃'},
		{id:3,price:100.01,thate:'2020-07-03',count:1,name:'mysql从入门到放弃'},
		{id:4,price:70.00,thate:'2020-07-04',count:1,name:'什么从入门到放弃'},
	]
console.log(books);
let table=document.getElementById("table");

let thead=document.createElement("thead");
let tr=document.createElement("tr");
thead.appendChild(tr);

let th=document.createElement("th");
th.innerText="";
tr.appendChild(th);
th=document.createElement("th");
th.innerText="ID";
tr.appendChild(th);

th=document.createElement("th");
th.innerText="名称";
tr.appendChild(th);

th=document.createElement("th");
th.innerText="时间";
tr.appendChild(th);

th=document.createElement("th");
th.innerText="价格";
tr.appendChild(th);

th=document.createElement("th");
th.innerText="数量";
tr.appendChild(th);

th=document.createElement("th");
th.innerText="操作";
tr.appendChild(th);

table.appendChild(thead);

let tbody=document.createElement("tbody");
table.appendChild(tbody);


for(let item of books){
	let tr=document.createElement("tr");
	tbody.appendChild(tr);
	let td=document.createElement("td");
	td.innerText="";
	tr.appendChild(td)
	
	td=document.createElement("td");
	td.innerText=item.id;
	tr.appendChild(td)
	
	td=document.createElement("td");
	td.innerText=item.name;
	tr.appendChild(td)
	
	td=document.createElement("td");
	td.innerText=item.tdate;
	tr.appendChild(td)
	
	td=document.createElement("td");
	td.innerText=item.price;
	tr.appendChild(td)
	
	td=document.createElement("td");
	td.innerHTML+="<button type='button'>-</button>"
	td.innerHTML+=item.count;
	td.innerHTML+="<button type='button'>+</button>"
	tr.appendChild(td)
	
	td=document.createElement("td");
	td.innerHTML="<button type='button'>移除</button>"
	tr.appendChild(td)
}
let h2=document.getElementById()
