import React, { useContext } from "react";
import DropdownLanguage from "./dropdownLanguage";
import { TranslateContext } from "../Context/translateContext";
import { Card, Row, Col, Input, Button } from "antd";
import 'antd/dist/antd.css';
import './content.css';

const Content = () => {
    const { TextArea } = Input;

    const {inputText, setInputText, translatedText, setTranslatedText, functions} = useContext(TranslateContext);
    const {performTranslate} = functions;

    const handleChange = (event) => {
        let value = event.target.value;
        setInputText(value)
    }

    const handleSubmit = () => {
        if (inputText !== "") {
            performTranslate();
        } else {
            setTranslatedText("");
        }
        
    }

    return (
        <>
            <div className="site-card-wrapper">
                <div style={{marginTop:'30px'}}>
                    <Row gutter={16} style={{justifyContent:'center', marginBottom:'10px'}}>
                    <Col span={16}>
                        <Card bordered={true} className="translate-card" style={{display:'flex', justifyContent:'center', boxSizing:'border-box', position:'relative', height:'80px', border:'1px solid #ccc'}}>
                            <DropdownLanguage/>
                        </Card>
                    </Col>
                    </Row>
                    <Row gutter={16} style={{justifyContent:'center'}}>
                    <Col span={8}>
                        <Card bordered={true} className="translate-card" style={{border:'1px solid #ccc'}}>
                            <TextArea bordered={false} autoSize={true} placeholder={"Type your text here"} onChange={handleChange} value={inputText} style={{resize:'none'}}/>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card bordered={true} className="translate-card" style={{border:'1px solid #ccc'}}>
                            <TextArea bordered={false} autoSize={true} placeholder={"Your Result Here"} value={translatedText} style={{resize:'none'}} style={{resize:'none'}}/>
                        </Card>
                    </Col>
                    </Row>
                    <Row gutter={16} style={{justifyContent:'center'}}>
                        <Col span={16} style={{justifyContent:'left'}}>
                            <Button onClick={handleSubmit} style={{margin:'20px auto'}}>Translate</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Content;