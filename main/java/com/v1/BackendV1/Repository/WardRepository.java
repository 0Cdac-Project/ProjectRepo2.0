package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Ward;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WardRepository extends JpaRepository<Ward, Integer> {
    Optional<Ward> findById(Integer id);
}
