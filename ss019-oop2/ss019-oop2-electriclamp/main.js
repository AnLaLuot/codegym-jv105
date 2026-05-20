class ElectricLamp {

    constructor() {
        this.status = false;
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }
}

class SwitchButton {

    constructor() {
        this.status = false;
        this.lamp = null;
    }

    connectToLamp(lamp) {
        this.lamp = lamp;
    }

    switchOn() {

        this.status = true;

        this.lamp.turnOn();

        return "Đèn đang bật";
    }

    switchOff() {

        this.status = false;

        this.lamp.turnOff();

        return "Đèn đang tắt";
    }
}

function start() {

    let lamp = new ElectricLamp();

    let switchButton = new SwitchButton();

    switchButton.connectToLamp(lamp);

    let result = "";

    for (let i = 1; i <= 10; i++) {

        result += "Lần " + i + "\n";

        result += switchButton.switchOn() + "\n";

        result += switchButton.switchOff() + "\n\n";
    }

    document.getElementById("result").innerText = result;
}
