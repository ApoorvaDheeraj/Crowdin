import OtaClient from "@crowdin/ota-client";

const {ccclass, property} = cc._decorator;



@ccclass
export default class Helloworld extends cc.Component {

  

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start () {
        // init logic
        this.label.string = this.text;
        const client = new OtaClient('e51f15f25060624ff98eb89k8nm');
    }
}
