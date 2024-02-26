import CloudLocalizationController from "./CloudLocalizationController";

export interface MapOfPlaceholderStrings {
  [key: string]: string;
}

export class LocalizationController {
  private static instance: LocalizationController;

  private cloudLocalizationCont: CloudLocalizationController;

  static getInstance(): LocalizationController {
    if (!LocalizationController.instance) {
      LocalizationController.instance = new LocalizationController();
    }
    return LocalizationController.instance;
  }

  private constructor() {
    this.cloudLocalizationCont = new CloudLocalizationController();

    // Get Localization Content
    this.cloudLocalizationCont.getLocalizationContent();
  }

  private replacePlaceHolder(text: string, placeholderMap: MapOfPlaceholderStrings): string {
    // Regular expression to match placeholders starting with ${} in the string
    const placeholderRegex = /\$\{([^{}]+)\}/g;

    // Replace each placeholder in the text with the corresponding value from replacements
    return text.replace(placeholderRegex, (match, key) => {
      // Check if the key exists in replacements
      if (key in placeholderMap) {
        return placeholderMap[key];
      }
      // If key does not exist in replacements, return the original placeholder
      return match;
    });
  }

  private replacePlaceHolderInStringArray(text: string[], placeholderMap: MapOfPlaceholderStrings): string[] {
    // Function to replace placeholders in each string of the array
    const replaceInArray = (arr: string[]): string[] => {
      return arr.map((str) => this.replacePlaceHolder(str, placeholderMap));
    };

    return replaceInArray(text);
  }
}
