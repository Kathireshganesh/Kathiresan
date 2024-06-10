<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INVENTORY</title>
</head>
<body>
    <script>
        const inventory = {
    products: [],
    addProduct(name, price, quantity) {
      const product = { name, price, quantity };
      this.products.push(product);
      alert(name+" added to inventory");
    },
    displayProducts() {
      this.products.forEach((product, index) => {
        var pro=index+1;
        var Name= product.name;
        var price=product.price;
        var quantity=product.quantity;
        alert("Product:"+pro+"\n"+"Name:"+Name+"\n"+"Price;"+price+"\n"+"Quantity:"+quantity);
      });
    }
  };
let len=parseFloat(prompt("Enter the length of the inventory:"));
for(let i=0;i<len;i++){
    var element=prompt("Enter continue or exit to proceed:")
    if(element==="Exit"||element==="exit"){
        break;
    }
    else{
        let element1=prompt("Enter the name:");
        let element2=prompt("Enter the price:");
        let element3=prompt("Enter the quantity:");
        inventory.addProduct(element1,element2,element3);
    }
}
inventory.displayProducts();
    </script>
</body>
</html>
