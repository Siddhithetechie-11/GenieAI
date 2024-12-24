package com.ai.SpringAiDemo;

import org.springframework.ai.image.ImageResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class GenAIController {
    private final ChatService chatService;
    private final ImageService imageService;

    private final RecipeService recipeService;

    private final ParaphraseService paraphraseService;

    private final EmailService emailService;

    public GenAIController(ChatService chatService, ImageService imageService, RecipeService recipeService, ParaphraseService paraphraseService, EmailService emailService){
        this.chatService = chatService;
        this.imageService = imageService;
        this.recipeService = recipeService;
        this.paraphraseService = paraphraseService;
        this.emailService = emailService;
    }

    @GetMapping("ask-ai")
    public String getResponse(@RequestParam String prompt){
        return chatService.getResponse(prompt);
    }

    @GetMapping("ask-ai-option")
    public String getResponseOption(@RequestParam String prompt){
        return chatService.getResponseOptions(prompt);
    }

//    @GetMapping("Generate-image")
//    public void generateImages(HttpServletResponse response, @RequestParam String prompt) throws IOException {
//        ImageResponse imageResponse = imageService.generateImage(prompt);
//        String imageUrl = imageResponse.getResult().getOutput().getUrl();
//        response.sendRedirect(imageUrl);
//    }

    @GetMapping("Generate-image")
    public List<String> generateImages(
            @RequestParam String prompt,
            @RequestParam(defaultValue = "hd") String quality,
            @RequestParam(defaultValue = "1") int n,
            @RequestParam(defaultValue = "1024") int width,
            @RequestParam(defaultValue = "1024") int height
    ){
        ImageResponse imageResponse = imageService.generateImage(prompt, quality, n, width, height);
        List<String> urls = imageResponse.getResults().stream()
                .map(result -> result.getOutput().getUrl())
                .toList();
        return urls;
    }

    @GetMapping("recipe-creator")
    public String recipeCreator(
            @RequestParam String ingredients,
            @RequestParam(defaultValue = "any") String cuisine,
            @RequestParam(defaultValue = "") String dietaryRestriction
    ){
        return recipeService.createRecipe(ingredients, cuisine, dietaryRestriction);
    }

    @GetMapping("paraphrase")
    public String paraphraseText(
            @RequestParam String input,
            @RequestParam String instructions
    ){
        return paraphraseService.paraphraseText(input, instructions);
    }
    @GetMapping("generate-email")
    public String generateEmail(
            @RequestParam String recipentName,
            @RequestParam String reasonForContact,
            @RequestParam String subjectDetails
    ){
        return emailService.generateEmail(recipentName, reasonForContact, subjectDetails);
    }
}
