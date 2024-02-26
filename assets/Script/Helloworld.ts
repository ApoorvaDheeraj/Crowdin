import CloudLocalizationController from "./CloudLocalizationController";

const {ccclass, property} = cc._decorator;


@ccclass
export default class Helloworld extends cc.Component {
    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    onLoad () {
        // init logic
        this.label.string = this.text;
        CloudLocalizationController.getInstance();
    }
}
