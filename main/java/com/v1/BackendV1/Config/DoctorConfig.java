//package com.v1.BackendV1.Config;
//
//import com.v1.BackendV1.Classes.Doctor;
//import com.v1.BackendV1.Repository.DoctorRepository;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import java.time.LocalDate;
//import java.util.List;
//
//@Configuration
//public class DoctorConfig {
//    @Bean
//    CommandLineRunner commandLineRunnerDoctor(DoctorRepository doctorRepository) {
//        return args -> {
//            Doctor d1 = new Doctor(
//                    "John",
//                    "Smith",
//                    LocalDate.of(1980, 10, 5),
//                    "Male",
//                    "9876543210",
//                    "8765432109",
//                    "john.smith@example.com",
//                    "US",
//                    "456 Oak St, City, Country",
//                    "ABC123XYZ",
//                    "P987654",
//                    "Single",
//                    "MD",
//                    "Cardiology",
//                    "Senior Consultant",
//                    "Cardiologist",
//                    15,
//                    "Monday to Friday",
//                    2,
//                    120000.0,
//                    1500,
//                    "/images/two.jpg",
//                    "john_smith",
//                    "securepassword",
//                    LocalDate.of(2010, 8, 15),
//                    "Additional info for John Smith"
//            );
//            Doctor d2 = new Doctor(
//                    "Alice",
//                    "Johnson",
//                    LocalDate.of(1975, 7, 20),
//                    "Female",
//                    "5551112222",
//                    "1112223333",
//                    "alice.johnson@example.com",
//                    "UK",
//                    "789 Pine St, Town, Country",
//                    "XYZ987ABC",
//                    "P654321",
//                    "Married",
//                    "PhD",
//                    "Pediatrics",
//                    "Senior Pediatrician",
//                    "General Pediatrics",
//                    20,
//                    "Monday, Wednesday, Friday",
//                    3,
//                    130000.0,
//                    1800,
//                    "/images/one.jpg",
//                    "alice_j",
//                    "password123",
//                    LocalDate.of(2015, 4, 10),
//                    "Additional info for Alice Johnson"
//            );
//
//            Doctor d3 = new Doctor(
//                    "Bob",
//                    "Miller",
//                    LocalDate.of(1988, 3, 15),
//                    "Male",
//                    "1234567890",
//                    "9998887777",
//                    "bob.miller@example.com",
//                    "CA",
//                    "123 Maple St, Village, Country",
//                    "DEF456GHI",
//                    "P789012",
//                    "Single",
//                    "MS",
//                    "Orthopedics",
//                    "Orthopedic Surgeon",
//                    "Sports Medicine",
//                    10,
//                    "Tuesday, Thursday",
//                    2,
//                    150000.0,
//                    2000,
//                    "/images/three.jpg",
//                    "bob_miller",
//                    "securepass123",
//                    LocalDate.of(2018, 6, 25),
//                    "Additional info for Bob Miller"
//            );
//            Doctor d4 = new Doctor(
//                    "Emma",
//                    "Garcia",
//                    LocalDate.of(1992, 12, 8),
//                    "Female",
//                    "7778889999",
//                    "3334445555",
//                    "emma.garcia@example.com",
//                    "Spain",
//                    "321 Cedar St, Town, Country",
//                    "GHI789JKL",
//                    "P321987",
//                    "Married",
//                    "MBBS",
//                    "Dermatology",
//                    "Dermatologist",
//                    "Cosmetic Dermatology",
//                    8,
//                    "Wednesday, Friday",
//                    2,
//                    110000.0,
//                    1700,
//                    "/images/OIP.jpg",
//                    "emma_garcia",
//                    "emma_pass",
//                    LocalDate.of(2016, 5, 20),
//                    "Additional info for Emma Garcia"
//            );
//
//            Doctor d5 = new Doctor(
//                    "Michael",
//                    "Lee",
//                    LocalDate.of(1985, 6, 18),
//                    "Male",
//                    "1112223333",
//                    "4445556666",
//                    "michael.lee@example.com",
//                    "Canada",
//                    "987 Birch St, City, Country",
//                    "MNO123PQR",
//                    "P111222",
//                    "Single",
//                    "MD",
//                    "Neurology",
//                    "Neurologist",
//                    "Movement Disorders",
//                    25,
//                    "Monday, Thursday",
//                    2,
//                    140000.0,
//                    1900,
//                    "/images/six.jpg",
//                    "michael_lee",
//                    "michaelpass",
//                    LocalDate.of(2012, 9, 12),
//                    "Additional info for Michael Lee"
//            );
//            doctorRepository.saveAll(List.of(d1, d2, d3,d4,d5));
//        };
//    }
//}
