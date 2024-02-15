//package com.v1.BackendV1.Config;
//
//import com.v1.BackendV1.Classes.Patient;
//import com.v1.BackendV1.Repository.PatientRepository;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import java.time.LocalDate;
//import java.util.List;
//
//@Configuration
//public class PatientConfig {
//    @Bean
//    CommandLineRunner commandLineRunnerPatient(PatientRepository patientRepository) {
//        return args -> {
//            Patient p1 = new Patient(1,
//                    "John",
//                    "Doe",
//                    LocalDate.of(1990, 5, 15),
//                    "Male",
//                    "1234567890",
//                    "9876543210",
//                    "john.doe@example.com",
//                    "US",
//                    "123 Main St, City, Country",
//                    "ABC123XYZ",
//                    "P123456",
//                    "Single",
//                    "Software Developer",
//                    "None",
//                    "No medications",
//                    "Dr. Smith",
//                    "john_doe",
//                    "password123",
//                    75.5,
//                    180.0,
//                    "O+",
//                    "General",
//                    "Additional info"
//            );
//            Patient p2 = new Patient(
//                    "Alice",
//                    "Johnson",
//                    LocalDate.of(1985, 8, 25),
//                    "Female",
//                    "9876543210",
//                    "8765432109",
//                    "alice.johnson@example.com",
//                    "CA",
//                    "456 Oak St, Town, Country",
//                    "XYZ987ABC",
//                    "P987654",
//                    "Married",
//                    "Doctor",
//                    "Hypertension",
//                    "Prescription medication",
//                    "Dr. Miller",
//                    "alice_j",
//                    "securepass",
//                    62.0,
//                    165.0,
//                    "A-",
//                    "Specialist",
//                    "Additional info for Alice"
//            );
//
//// Example 2
//            Patient p3 = new Patient(
//                    "Bob",
//                    "Smith",
//                    LocalDate.of(1975, 3, 10),
//                    "Male",
//                    "5551112222",
//                    "1112223333",
//                    "bob.smith@example.com",
//                    "UK",
//                    "789 Pine St, Village, Country",
//                    "DEF456GHI",
//                    "P654321",
//                    "Divorced",
//                    "Engineer",
//                    "Asthma",
//                    "None",
//                    "Dr. Anderson",
//                    "bob_smith",
//                    "secret123",
//                    80.5,
//                    175.0,
//                    "B+",
//                    "General",
//                    "Additional info for Bob"
//            );
//            patientRepository.saveAll(List.of(p1, p2, p3));
//        };
//    }
//}
