package com.v1.BackendV1.Config;

import com.v1.BackendV1.Classes.ContactUs;
import com.v1.BackendV1.Classes.Doctor;
import com.v1.BackendV1.Repository.ContactUsRepository;
import com.v1.BackendV1.Repository.DoctorRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Configuration
public class ContactUsConfig {
    @Bean
    CommandLineRunner commandLineRunnerContact(ContactUsRepository contactUsRepository) {
        return args -> {
            ContactUs c1 = new ContactUs(
                    1,
                    "John",
                    "Doe",
                    "john.doe@example.com",
                    "123-456-7890",
                    "This is a sample message for the contact us form.",
                    LocalDateTime.parse("2023-12-30T00:00:00")
            );
            ContactUs c2 = new ContactUs(
                    2,
                    "Jane",
                    "Smith",
                    "jane.smith@example.com",
                    "987-654-3210",
                    "Another sample message for the contact us form.",
                    LocalDateTime.parse("2023-12-31T12:30:00")
            );

            ContactUs c3 = new ContactUs(
                    3,
                    "Robert",
                    "Johnson",
                    "robert.johnson@example.com",
                    "555-123-4567",
                    "Yet another sample message for the contact us form.",
                    LocalDateTime.parse("2024-01-01T08:45:00")
            );
            contactUsRepository.saveAll(List.of(c1, c2, c3));
        };
    }
}
