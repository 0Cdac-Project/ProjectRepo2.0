package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.Feedback;
import com.v1.BackendV1.Service.AccountantService;
import com.v1.BackendV1.Service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
    @RequestMapping(path = "api/v1/feedback")
public class FeedbackController {
    private final FeedbackService feedbackService;

    @Autowired
    public FeedbackController(FeedbackService feedbackService) {
        this.feedbackService = feedbackService;
    }

    @GetMapping
    public List<Feedback> getFeedbacks() {
        return feedbackService.getFeedbacks();
    }

    @PostMapping
    public void addNewAccountant(@RequestBody Feedback feedback) {
        feedbackService.addFeedbacks(feedback);
    }
}
