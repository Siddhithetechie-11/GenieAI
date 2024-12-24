package com.ai.SpringAiDemo;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final ChatModel chatModel;

    public EmailService(ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    private String buildEmailPrompt(String recipientName, String reasonForContact, String subjectDetails) {
        return "Write a professional email that includes the following:\n\n"
                + "1. Greeting: Start with 'Dear " + recipientName + ",'\n"
                + "2. Introduction: Mention that you are reaching out regarding " + reasonForContact + ".\n"
                + "3. Body: Provide clear and concise details about " + subjectDetails + ".\n"
                + "4. Closing: Add a polite closing statement, offering help or inviting further communication.\n"
                + "5. Signature: Close with 'Best regards,' followed by the sender's name."
                + "6. After every full stop start from new line.";
    }

    public String generateEmail(
            String recipentName,
            String reasonForContact,
            String subjectDetails
    ){
        var template = buildEmailPrompt(recipentName, reasonForContact, subjectDetails);
        PromptTemplate promptTemplate = new PromptTemplate(template);
        Prompt prompt =  promptTemplate.create();
        return chatModel.call(prompt).getResult().getOutput().getContent();
    }
}
