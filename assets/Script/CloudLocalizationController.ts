/**
 * CloudLocalizationController to get Data from Crowdin 
 */

import CrowdinOtaClient from "./Libs/CrowdinOtaClient";


export default class CloudLocalizationController{

    private crowdinOtaClient: CrowdinOtaClient = null;
    private crowdinDistributionKey : string = "db1c1861ea3734cf1fa39d9k8nm"

    constructor() {
        this.crowdinOtaClient = new CrowdinOtaClient(this.crowdinDistributionKey);
    }

    getLocalizationContent(){
        this.crowdinOtaClient.getStrings().then(res => console.warn(res)).catch(error => console.error(error));
        console.warn(`CloudLocalizationController : getLocalizationContent Method`);
    }
}
