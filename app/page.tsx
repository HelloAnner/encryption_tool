"use client";
import "./globals.css";
import { SetStateAction, useState } from "react";

export default function Home() {
    const [text, setText] = useState("");
    const handleTextChange = (event: {
        target: {
            value: SetStateAction<string>;
        };
    }) => {
        setText(event.target.value);
    };

    const encryptText = (inputText: string) => {
        return inputText.split("").reverse().join("");
    };

    const handleEncryptionClick = () => {
        const encryptedText = encryptText(text);
        setText(encryptedText);
    };

    const handleDecryptionClick = () => {
        const encryptedText = encryptText(text);
        setText(encryptedText);
    };
    return (
        <div className="input-with-buttons-container">
            <div>
                <textarea
                    className="input-area"
                    placeholder="请输入文本..."
                    rows={12}
                    value={text}
                    onChange={handleTextChange}
                ></textarea>
            </div>
            <div className="button-container">
                <button
                    className="encrypt-button"
                    onClick={handleEncryptionClick}
                >
                    加密
                </button>
                <button
                    className="decrypt-button"
                    onClick={handleDecryptionClick}
                >
                    解密
                </button>
            </div>
        </div>
    );
}
