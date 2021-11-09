import React, { useContext } from "react";
import { TranslateContext } from "../Context/translateContext";
import { Select } from "antd";

const DropdownLanguage = () => {
    const { Option } = Select;
    const {fromLang, setFromLang, toLang, setToLang, languageList} = useContext(TranslateContext);

    const langList = () => {
        return (
            <>
                {languageList.map((item) => <Option value={item.code} key={item.code}>{item.name}</Option> )}
            </>
        )
    }

    return (
        <>
            <Select
                showSearch
                placeholder="Translate From Language"
                optionFilterProp="children"
                onChange={(value) => {
                    setFromLang(value);
                }}
                defaultValue={fromLang}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                style={{width:'200px', position:'absolute', left:20}}
            >
                {langList()}
            </Select>

            <Select
                showSearch
                placeholder="Translate To Language"
                optionFilterProp="children"
                onChange={(value) => {
                    setToLang(value);
                }}
                defaultValue={toLang}
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                style={{width:'200px', position:'absolute', right:20}}
            >
                {langList()}
            </Select>     
        </>
    )
}

export default DropdownLanguage;