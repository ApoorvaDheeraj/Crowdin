/**
 * CloudLocalizationController to get Data from Crowdin 
 */

import CrowdinOtaClient from "./Libs/Crowdin/CrowdinOtaClient";



export default class CloudLocalizationController{

    private crowdinOtaClient: CrowdinOtaClient = null;
    private crowdinDistributionKey : string = "7c8308103ad135f1cec0ce9k8nm"

    private static instance: CloudLocalizationController;

    static getInstance(): CloudLocalizationController {
        if (!CloudLocalizationController.instance) {
          CloudLocalizationController.instance = new CloudLocalizationController();
        }
        return CloudLocalizationController.instance;
      }

    private constructor() {
        this.crowdinOtaClient = new CrowdinOtaClient(this.crowdinDistributionKey);
        this.crowdinOtaClient.getStrings().then(res => console.warn(res)).catch(error => console.error(error));
        console.warn(JSON.stringify(this.crowdinOtaClient));
        // this.getLocalizationContent();
    }

    getLocalizationContent(){
        this.crowdinOtaClient.getStrings().then(res => console.warn(res)).catch(error => console.error(error));
        console.warn(`CloudLocalizationController : getLocalizationContent Method`);
    }
}
