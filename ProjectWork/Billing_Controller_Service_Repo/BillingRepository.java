package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Billing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BillingRepository extends JpaRepository<Billing, Integer> {
    Optional<Billing> findById(Integer id);

    List<Billing> findByManagementId(Integer id);
}
