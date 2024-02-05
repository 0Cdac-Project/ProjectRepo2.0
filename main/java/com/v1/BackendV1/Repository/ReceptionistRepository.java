package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Admin;
import com.v1.BackendV1.Classes.Receptionist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReceptionistRepository extends JpaRepository<Receptionist, Integer> {
    @Query("SELECT p FROM Receptionist p WHERE p.receptionID = :id")
    Optional<Receptionist> findById(@Param("id") Integer id);
}
