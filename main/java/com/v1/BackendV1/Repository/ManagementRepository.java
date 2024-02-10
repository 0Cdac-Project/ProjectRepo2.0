package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Doctor;
import com.v1.BackendV1.Classes.Management;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ManagementRepository extends JpaRepository<Management, Integer> {
    Optional<Management> findById(Integer id);
    Optional<Management> findByManagementUsernameAndManagementPassword(String managementUsername,String managementPassword);
}
