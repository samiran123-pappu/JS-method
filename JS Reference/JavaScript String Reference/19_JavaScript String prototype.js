{
    {
        console.log("\n\n\n\n1---------------------------");
        String.prototype.sayHello = function () {
            return "Hello " + this;
        };

        const name = "Samir";
        console.log(name.sayHello());
    }{
        console.log("\n\n\n\n2---------------------------");
        String.prototype.firstLetter = function () {
            return this.charAt(0);
        };

        const text = "JavaScript";
        console.log(text.firstLetter());
    }
}
