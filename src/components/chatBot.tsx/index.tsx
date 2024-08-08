import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";

const ChatBot: React.FC = () => {
    return (
        <>
            <Script
                src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
                strategy="afterInteractive"
            />
            <df-messenger
                intent="WELCOME"
                chat-title="cozystayduy"
                agent-id="8473b85b-3e0e-4935-a107-b161f9e84962"
                language-code="vi"
            ></df-messenger>
        </>
    );
}
export default ChatBot;