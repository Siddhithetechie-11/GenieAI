package com.ai.SpringAiDemo;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class ParaphraseService {
    private final ChatModel chatModel;

    public ParaphraseService(ChatModel chatModel) {
        this.chatModel = chatModel;
    }

    public String paraphraseText(
            String input,
            String instructions
    ){
        var template = """
                task : paraphrase,
                input : {input},
                instructions : {instructions}
                """;
        PromptTemplate promptTemplate  = new PromptTemplate(template);
        Map<String, Object> params = Map.of(
                "input", input,
                "instructions", instructions
        );
        Prompt prompt = promptTemplate.create(params);
        return chatModel.call(prompt).getResult().getOutput().getContent();
    }


}
