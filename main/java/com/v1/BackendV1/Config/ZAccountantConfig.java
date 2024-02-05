package com.v1.BackendV1.Config;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Repository.AccountantRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

//@Configuration
public class ZAccountantConfig {
    @Bean
    CommandLineRunner commandLineRunnerAccountant(AccountantRepository accountantRepository) {
        return args -> {
            Accountant a1 = new Accountant(
                    "Michael",
                    "Williams",
                    LocalDate.of(1995, 4, 12),
                    "Male",
                    "3332221111",
                    "michael.williams@example.com",
                    "101 Pineapple St, City, Country",
                    "MNO123XYZ",
                    "P987654",
                    85000,
                    "Accounting Degree",
                    LocalDate.of(2016, 10, 15),
                    "Additional Data 5",
                    3
            );

// Creating an Accountant object with a Management reference
            Accountant a2 = new Accountant(
                    "Jane",
                    "Smith",
                    LocalDate.of(1990, 6, 15),
                    "Female",
                    "9876543210",
                    "jane.smith@example.com",
                    "456 Oak St, City, Country",
                    "XYZ789ABC",
                    "P654321",
                    75000,
                    "Finance Degree",
                    LocalDate.of(2018, 9, 5),
                    "Additional Data 2",
                    1 // Management ID
            );

// Creating another Accountant object with a different set of data
            Accountant a3 = new Accountant(
                    "Robert",
                    "Johnson",
                    LocalDate.of(1988, 3, 25),
                    "Male",
                    "8765432109",
                    "robert.johnson@example.com",
                    "789 Pine St, City, Country",
                    "DEF456UVW",
                    "P789012",
                    80000,
                    "Business Degree",
                    LocalDate.of(2019, 12, 3),
                    "More Data 3",
                    2 // Another Management ID
            );
            accountantRepository.saveAll(List.of(a1,a2,a3));
        };
    }
}
