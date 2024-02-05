package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.Management;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountantRepository extends JpaRepository<Accountant, Integer> {
    @Query("SELECT p FROM Accountant p WHERE p.accountantID = :id")
    Optional<Accountant> findById(@Param("id") Integer id);
}
