package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Doctor;
import com.v1.BackendV1.Classes.Management;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ManagementRepository extends JpaRepository<Management, Integer> {
    Optional<Management> findById(Integer id);
    List<Management> findByManagementCategory(String managementCategory);
    Optional<Management> findByManagementUsernameAndManagementPassword(String managementUsername,String managementPassword);
    Optional<Management> findByManagementUsernameOrManagementEmail(String managementUsername,String managementEmail);

    @Query(value="select sum(management_salary) from management", nativeQuery=true)
    Integer findTotalManagementSalary();
}
