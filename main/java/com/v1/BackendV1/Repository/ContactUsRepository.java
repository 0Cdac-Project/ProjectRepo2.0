package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.ContactUs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ContactUsRepository extends JpaRepository<ContactUs, Integer> {
    Optional<ContactUs> findById(Integer id);
}
