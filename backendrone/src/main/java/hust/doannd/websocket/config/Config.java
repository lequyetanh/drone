package hust.doannd.websocket.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
// @EnableWebSocketMessageBroker annotation được dùng để kích hoạt xử lý các message trong WebSocket được hỗ trợ bởi một message broker.
@EnableWebSocketMessageBroker
@CrossOrigin(origins = "http://localhost:4200")
public class Config implements WebSocketMessageBrokerConfigurer {
    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        // đường dẫn gửi từ server về cho client
        registry.enableSimpleBroker("/chat");
        // đường dẫn gửi từ client lên server
        registry.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // đường dẫn kết nối socket với client
        registry.addEndpoint("/chat-websocket").setAllowedOrigins("*").withSockJS();
    }
}

// khởi tạo socket