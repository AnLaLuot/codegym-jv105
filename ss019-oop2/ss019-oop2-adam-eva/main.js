class Apple {

    constructor() {
        this.weight = 10;
    }

    decrease() {

        if (this.weight > 0) {
            this.weight--;
        }
    }

    isEmpty() {
        return this.weight <= 0;
    }

    getWeight() {
        return this.weight;
    }
}

class Human {

    constructor(name, gender, weight) {

        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        return this.gender;
    }

    say(message) {
        return this.name + ": " + message;
    }

    eat(apple) {

        if (!apple.isEmpty()) {

            apple.decrease();

            this.weight++;

            return this.name + " ăn 1 miếng táo";
        }

        return "Táo đã hết";
    }

    checkApple(apple) {
        return apple.getWeight();
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }
}

function start() {

    let apple = new Apple();

    let adam = new Human("Adam", true, 70);

    let eva = new Human("Eva", false, 50);

    let result = "";

    while (!apple.isEmpty()) {

        result += adam.eat(apple) + "\n";

        result += "Khối lượng táo: "
            + apple.getWeight() + "\n";

        result += "Cân nặng Adam: "
            + adam.getWeight() + "\n\n";

        if (apple.isEmpty()) {
            break;
        }

        result += eva.eat(apple) + "\n";

        result += "Khối lượng táo: "
            + apple.getWeight() + "\n";

        result += "Cân nặng Eva: "
            + eva.getWeight() + "\n\n";
    }

    document.getElementById("result").innerText = result;
}
