import OtaClient from "./Libs/Crowdin/OtaClient";

const {ccclass, property} = cc._decorator;



@ccclass
export default class Helloworld extends cc.Component {

    private crowdinOtaClient: OtaClient = null;
    private crowdinDistributionKey : string = "db1c1861ea3734cf1fa39d9k8nm"


    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    onLoad () {
        // init logic
        this.label.string = this.text;
        this.crowdinOtaClient = new OtaClient(this.crowdinDistributionKey);
        console.warn(`Current Locale => ${JSON.stringify(this.crowdinOtaClient)}`);

        this.getLocalizationContent();
    }

    getLocalizationContent(){
        this.crowdinOtaClient?.getStrings().then(res => console.warn(res)).catch(error => console.error(error));
        console.warn(`CloudLocalizationController : getLocalizationContent Method`);
    }
}
