package com.v1.BackendV1.Config;

import com.v1.BackendV1.Classes.Admin;
import com.v1.BackendV1.Repository.AdminRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

//@Configuration
public class ZAdminConfig {
    @Bean
    CommandLineRunner commandLineRunnerAdmin(AdminRepository adminRepository) {
        return args -> {
            Admin a1 = new Admin(
                    1,
                    "John",
                    "Doe",
                    LocalDate.of(1990, 5, 15),
                    "Male",
                    "1234567890",
                    "john.doe@example.com",
                    "123 Main St",
                    "ABC123",
                    "P123456",
                    50000,
                    "MBA",
                    LocalDate.of(2020, 8, 10),
                    "Additional Info"
            );
            Admin a2 = new Admin(
                    2,
                    "Jane",
                    "Smith",
                    LocalDate.of(1985, 7, 20),
                    "Female",
                    "9876543210",
                    "jane.smith@example.com",
                    "456 Oak St",
                    "XYZ789",
                    "P654321",
                    60000,
                    "PhD",
                    LocalDate.of(2018, 6, 5),
                    "Additional Information"
            );

            Admin a3 = new Admin(
                    3,
                    "Robert",
                    "Johnson",
                    LocalDate.of(1982, 3, 8),
                    "Male",
                    "5558889999",
                    "robert.johnson@example.com",
                    "789 Pine St",
                    "DEF456",
                    "P789012",
                    55000,
                    "B.Sc.",
                    LocalDate.of(2015, 9, 15),
                    "Extra Details"
            );

            adminRepository.saveAll(List.of(a1,a2,a3));
        };
    }
}
