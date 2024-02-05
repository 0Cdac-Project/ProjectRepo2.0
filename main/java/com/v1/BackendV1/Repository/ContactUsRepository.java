package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.ContactUs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ContactUsRepository extends JpaRepository<ContactUs, Integer> {
    @Query("SELECT p FROM ContactUs p WHERE p.contactId = :id")
    Optional<ContactUs> findById(@Param("id") Integer id);
}
