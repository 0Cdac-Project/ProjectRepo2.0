package com.v1.BackendV1.Controller;

import com.v1.BackendV1.Classes.Feedback;
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

    @GetMapping("/findAll")
    public List<Feedback> getFeedbacks() {
        return feedbackService.getFeedbacks();
    }

    @PostMapping("/add1")
    public void addFeedback(@RequestBody Feedback feedback) {
        feedbackService.addFeedbacks(feedback);
    }

    @PostMapping("/add")
    public void addFeedbackByAppointment(@RequestBody Feedback feedback) {
        feedbackService.addFeedbacksByAppointmentId(feedback);
    }

    @GetMapping("/{id}")
    public Feedback getFeedbackById(@PathVariable Integer id) {
        return feedbackService.getFeedbackById(id);
    }

}
