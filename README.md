# Cocos Creator 2.4.6 Integration with Crowdin OTA Client

This repository demonstrates the integration of Cocos Creator version 2.4.6 with the Crowdin Over-the-Air (OTA) Client for streamlined localization processes.

## Overview

[Cocos Creator](https://www.cocos.com/en/creator) is a popular game development engine, and [Crowdin](https://crowdin.com/) is a cloud-based localization platform. This integration allows for efficient and automated content translation workflows directly within the Cocos Creator environment.

## Getting Started

Follow these steps to integrate Cocos Creator 2.4.6 with Crowdin OTA Client:

1.  **Install Cocos Creator Dashboard:**
   Refer to [Cocos Creator 2.x](https://www.cocos.com/en/creator-download) and install the 2.4.6 Version from Dashboard.

2. **Clone the Repository:**
   ```bash
   git clone https://github.com/ApoorvaDheeraj/Crowdin
   ```

3. **Configuration:**
   - Install Crowdin OTA npm package by running npm install.

   
4. **Build and Run:**
   - Build and run your Cocos Creator project to see issues.
  
## Editor Issue

*I'm accessing OTA client by code can be seen [here](https://github.com/ApoorvaDheeraj/Crowdin/blob/main/assets/Script/Helloworld.ts) in the code*

```javascript
        const client = new OtaClient('e51f15f25060624ff98eb89k8nm');
        console.log(`Current Locale => ${client.getCurrentLocale()}`);
```



![](https://github.com/ApoorvaDheeraj/Crowdin/assets/13048633/2b13c7b6-e6df-4cde-8392-4fd28be4970e)


**Chrome Console issue after running the project**

![Screenshot 2023-11-24 at 11 46 55 AM](https://github.com/ApoorvaDheeraj/Crowdin/assets/13048633/71c5ea44-8ec3-4751-b5d6-9c751dbcf31d)




## Issues and Support

If you encounter any issues or have questions, please open an issue on the [GitHub Issues](https://github.com/ApoorvaDheeraj/Crowdin/issues) page.

