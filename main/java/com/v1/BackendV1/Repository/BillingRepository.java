package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.Billing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BillingRepository extends JpaRepository<Billing, Integer> {
    @Query("SELECT p FROM Billing p WHERE p.billID = :id")
    Optional<Billing> findById(@Param("id") Integer id);
}
