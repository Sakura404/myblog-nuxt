s = document.querySelector("#Datagrid1 > tbody:nth-child(1)")
var total = 0
for (var i = 1; i < s.children.length; i++)
    total += parseFloat(s.children[i].children[8].innerText)
console.log(total)
console.log(total/i)
let a=new Date().pt-sm-6