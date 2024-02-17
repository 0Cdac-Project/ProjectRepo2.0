package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Bed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BedRepository extends JpaRepository<Bed, Integer> {
    Optional<Bed> findById(Integer id);
}
