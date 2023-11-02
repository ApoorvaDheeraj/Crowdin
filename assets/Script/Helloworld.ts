const {ccclass, property} = cc._decorator;

import phoneNumberValid from 'google-libphonenumber'


@ccclass
export default class Helloworld extends cc.Component {

  

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start () {
        // init logic
        this.label.string = this.text;
        const phoneValue = phoneNumberValid.Pho
    }
}
