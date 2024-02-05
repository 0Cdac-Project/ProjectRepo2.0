package com.v1.BackendV1.Service;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.Feedback;
import com.v1.BackendV1.Repository.AccountantRepository;
import com.v1.BackendV1.Repository.FeedbackRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {
    private final FeedbackRepository feedbackRepository;

    @Autowired
    public FeedbackService(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    public List<Feedback> getFeedbacks() {
        return feedbackRepository.findAll();
    }

    public void addFeedbacks(Feedback feedback) {
        Optional<Feedback> optionalPatient = feedbackRepository.findById(feedback.getFeedbackID());
        if (optionalPatient.isPresent()) {
            throw new IllegalStateException("Duplicate Entry");
        }
        feedbackRepository.save(feedback);
    }
}
