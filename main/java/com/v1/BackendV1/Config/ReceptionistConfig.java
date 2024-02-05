package com.v1.BackendV1.Config;

import com.v1.BackendV1.Classes.Admin;
import com.v1.BackendV1.Classes.Receptionist;
import com.v1.BackendV1.Repository.AdminRepository;
import com.v1.BackendV1.Repository.ReceptionistRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

//@Configuration
public class ReceptionistConfig {
    @Bean
    CommandLineRunner commandLineRunnerReceptionist(ReceptionistRepository receptionistRepository) {
        return args -> {
            Receptionist r1 = new Receptionist(
                    1,
                    "receptionUsername1",
                    "receptionPassword1",
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
                    "Qualification1",
                    LocalDate.of(2020, 8, 10),
                    "Additional Info 1",
                    1  // Management I
            );
            Receptionist r2 = new Receptionist(
                    2,
                    "receptionUsername2",
                    "receptionPassword2",
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
                    "Qualification2",
                    LocalDate.of(2018, 6, 5),
                    "Additional Info 2",
                    2
            );

            Receptionist r3 = new Receptionist(
                    3,
                    "receptionUsername3",
                    "receptionPassword3",
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
                    "Qualification3",
                    LocalDate.of(2015, 9, 15),
                    "Additional Info 3",
                    1
            );
            receptionistRepository.saveAll(List.of(r1,r2,r3));
        };
    }
}
