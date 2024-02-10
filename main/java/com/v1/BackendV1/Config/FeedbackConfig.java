package com.v1.BackendV1.Config;

import com.v1.BackendV1.Classes.ContactUs;
import com.v1.BackendV1.Classes.Feedback;
import com.v1.BackendV1.Repository.ContactUsRepository;
import com.v1.BackendV1.Repository.FeedbackRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDateTime;
import java.util.List;

//@Configuration
public class FeedbackConfig {
    @Bean
    CommandLineRunner commandLineRunnerFeedback(FeedbackRepository feedbackRepository) {
        return args -> {
            Feedback f1 = new Feedback(
                    "Excellent service!",
                    5,
                    1
            );

            Feedback f2 = new Feedback(
                    "Great experience with the doctor.",
                    4,
                    2
            );

            Feedback f3 = new Feedback(
                    "Satisfied with the appointment.",
                    3,
                    3
            );
            feedbackRepository.saveAll(List.of(f1, f2, f3));
        };
    }
}
