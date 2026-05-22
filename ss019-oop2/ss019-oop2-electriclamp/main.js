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

    changeStatus(status) {

        this.status = status;

        if (status) {

            this.lamp.turnOn();

            return "Đèn đang bật";
        }

        this.lamp.turnOff();

        return "Đèn đang tắt";
    }

    switchOn() {
        return this.changeStatus(true);
    }

    switchOff() {
        return this.changeStatus(false);
    }
}

function start() {

    let lamp = new ElectricLamp();

    let switchButton = new SwitchButton();

    switchButton.connectToLamp(lamp);

    let result = "";

    const SWITCH_COUNT = 10;
    for (let i = 1; i <= SWITCH_COUNT; i++) {

        result += "Lần " + i + "\n";

        result += switchButton.switchOn() + "\n";

        result += switchButton.switchOff() + "\n\n";
    }

    document.getElementById("result").innerText = result;
}
