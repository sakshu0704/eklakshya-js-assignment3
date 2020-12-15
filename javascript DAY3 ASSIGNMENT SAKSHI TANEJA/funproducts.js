
var Product = function(name,price){
    this.name =name;
    this.price =price;
    this.printDetails= function(){
        console.log('ABC store',this.name,'from',this.price);

    }
}
var product= new Product('Soap','1200');
product.printDetails();
var product1 = new Product('Tea','1500');
product1.printDetails();

Product.prototype.brand="Nivea";
Product.prototype.discountedPrice = function(){
    console.log('Brand is',this.brand);
}
Product.prototype.newprice="900";
Product.prototype.discountedPrice = function(){
    console.log('newprice is',this.newprice);
}

console.log(product.brand)
product.discountedPrice();
product1.brand="Tajmahal";
console.log(product1.brand)
product1.discountedPrice();

console.log(product.newprice)
product.discountedPrice();
product1.brand="800";
console.log(product1.newprice)
product1.discountedPrice();
