let name = {
    firstname : "Hello",
    lastname : "world",
    fullname : function (){
        console.log(`Hi my name is ${this.firstname} ${this.lastname}`);
    }
}
