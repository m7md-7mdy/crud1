
var nameInput = document.getElementById('nameInput');
var PriceInput = document.getElementById('PriceInput');
var CatgoryInput = document.getElementById('CatgoryInput');
var DesInput = document.getElementById('DesInput');
var ProductList = [];
var searchInbut = document.getElementById('searchInbut')
var Updete = document.getElementById('btnUpdete')
var Updete1 = 0
var p1 = document.querySelector('#p1')

if (localStorage.getItem('Productdata') != null) {
    ProductList = JSON.parse(localStorage.getItem('Productdata'))
    nav(ProductList)
}
function Product() {

     if(valdiateProductName()){
        if (Updete.innerHTML === "Updete") {
            addUpdete()
        }
        else {
            var ProductAdd = {
                name: nameInput.value,
                Price: PriceInput.value,
                Catgory: CatgoryInput.value,
                Des: DesInput.value,
            }
            ProductList.push(ProductAdd);
            var x = JSON.stringify(ProductList)
            localStorage.setItem('Productdata', x)
            showdata()
            clearForm();
        }
     }
 else {
    alert('Must Start With Captial Char !!')
 }
}

function clearForm() {
    nameInput.value = '';
    PriceInput.value = '';
    CatgoryInput.value = '';
    DesInput.value = '';
}

function nav(list) {
    var sum1 = '';
    for (var i = 0; i < list.length; i++) {
        sum1 += `
    <tr class="">
    <td scope="row">${i + 1}</td>
    <td>${list[i].name}</td>
    <td>${list[i].Price}</td>
    <td>${list[i].Catgory}</td>
    <td>${list[i].Des}</td>
    <td><button class="btn btn-outline-warning" onclick= "updete(${i})" >  <i class="fa-solid fa-pen-to-square"></i></button></td>
    <td><button class=" btn btn-outline-danger" onclick="deleteProduct(${i})">   <i class="fa-solid fa-trash"></i></button></td>
    </tr>
    `
    }
    document.getElementById('tbody').innerHTML = sum1;
}

function showdata() {
    var sum1 = '';
    var listIndx = ProductList.length - 1;
    sum1 =
        `
    <tr class="">
    <td scope="row">${listIndx + 1}</td>
    <td>${ProductList[listIndx].name}</td>
    <td>${ProductList[listIndx].Price}</td>
    <td>${ProductList[listIndx].Catgory}</td>
    <td>${ProductList[listIndx].Des}</td>
    <td><button class="btn btn-outline-warning" onclick= "updete(${listIndx})">  <i class="fa-solid fa-pen-to-square"></i></button></td>
    <td><button class=" btn btn-outline-danger" onclick="deleteProduct(${listIndx})">   <i class="fa-solid fa-trash"></i></button></td>
    </tr>
    `
    document.getElementById('tbody').innerHTML += sum1
}

function search() {
    var searchProduct = []

    for (var i = 0; i < ProductList.length; i++) {
        if (ProductList[i].name.toLowerCase().includes(searchInbut.value.toLowerCase())) {
            searchProduct.push(ProductList[i])
        }
        else if (ProductList[i].Catgory.toLowerCase().includes(searchInbut.value.toLowerCase())) {
            searchProduct.push(ProductList[i])
        }
        else if (ProductList[i].Price.toLowerCase().includes(searchInbut.value.toLowerCase())) {
            searchProduct.push(ProductList[i])
        }
        else if (ProductList[i].Des.toLowerCase().includes(searchInbut.value.toLowerCase())) {
            searchProduct.push(ProductList[i])
        }
    }
    nav(searchProduct)
}

function deleteProduct(index) {
    ProductList.splice(index, 1)
    localStorage.setItem('Productdata', JSON.stringify(ProductList))
    nav(ProductList)
}

function updete(index) {
    Updete1 = index
    nameInput.value = ProductList[index].name
    PriceInput.value = ProductList[index].parse
    CatgoryInput.value = ProductList[index].Catgory
    DesInput.value = ProductList[index].Des
    Updete.innerHTML = "Updete"
}

function addUpdete(index) {
    ProductList[Updete1].name = nameInput.value
    ProductList[Updete1].parse = PriceInput.value
    ProductList[Updete1].Catgory = CatgoryInput.value
    ProductList[Updete1].Des = DesInput.value
    clearForm()
    localStorage.setItem('Productdata', JSON.stringify(ProductList))
    nav(ProductList)
    Updete.innerHTML = "add Product "
}

function valdiateProductName(){
    var regex = /^[A-Z][a-z]{3,8}$/
    var x = regex.test(nameInput.value)
if (x){
    p1.classList.add('d-none')
  nameInput.classList.add('is-valid')
  nameInput.classList.remove('is-invalid')

}
else
{
    p1.classList.remove('d-none')
    nameInput.classList.add('is-invalid')
    nameInput.classList.remove('is-valid')
}
return x
}
nameInput.addEventListener('blur',function(){
    valdiateProductName()
    
})



















