package com.v1.BackendV1.Config;

import com.v1.BackendV1.Classes.Doctor;
import com.v1.BackendV1.Classes.Management;
import com.v1.BackendV1.Repository.DoctorRepository;
import com.v1.BackendV1.Repository.ManagementRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class ManagementConfig {
    @Bean
    CommandLineRunner commandLineRunnerManagement(ManagementRepository managementRepository) {
        return args -> {
            Management m1 = new Management(
                    "Mayuresh08",
                    "mayu@123",
                    "Admin"
            );
            Management m2 = new Management(
                    "Sandesh07",
                    "sandy#07",
                    "Accountant"
            );

            Management m3 = new Management(
                    "MrunaliB",
                    "m@runali",
                    "Receptionist"
            );
            Management m4 = new Management(
                    "1Mayur1",
                    "1@mayur",
                    "Accountant"
            );

            Management m5 = new Management(
                    "TSainath",
                    "s@in@th",
                    "Receptionist"
            );
            managementRepository.saveAll(List.of(m1,m2,m3,m4,m5));
        };
    }
}
