import React, { createContext, useState } from "react"
import translate from "translate";
import languageData from '../languageData.json';

export const TranslateContext = createContext();

export const TranslateProvider = props => {
    const [inputText, setInputText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [fromLang, setFromLang] = useState('id');
    const [toLang, setToLang] = useState('en');
    const [languageList] = useState(languageData);

    const performTranslate = async () => {
        // set configuration translate engine
        translate.engine = "google";
        translate.key = process.env.GOOGLE_KEY;
        
        // split multiple sentence
        let splitStr = inputText.split(".");

        let text = ""
        for (let sentence of splitStr) {
            if (sentence.length > 0) {
                const result = await translate(sentence.trim(), {to:toLang, from: fromLang});
                text += `${result}${(result[result.length-1] === /A-z/) ? "" : ". "}`;
            }
        }

        setTranslatedText(text);
    }

    return (
        <TranslateContext.Provider value={{
            inputText, setInputText,
            translatedText, setTranslatedText,
            fromLang, setFromLang,
            toLang, setToLang,
            languageList,
            functions: {
                performTranslate
            }
        }}>
            {props.children}
        </TranslateContext.Provider>
    )
}