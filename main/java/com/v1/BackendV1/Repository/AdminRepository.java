package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
    @Query("SELECT p FROM Admin p WHERE p.adminid = :id")
    Optional<Admin> findById(@Param("id") Integer id);
}
