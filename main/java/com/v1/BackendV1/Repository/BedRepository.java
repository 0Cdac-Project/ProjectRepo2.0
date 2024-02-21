package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Bed;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BedRepository extends JpaRepository<Bed, Integer> {
    Optional<Bed> findById(Integer id);

    @Query("select sum(b.wardBedCharge) from Bed b")
    Integer findTotalBedCharge();

    @Query("select b from Bed b where b.wardBedAvailability = true and b.wardID in (select w.wardID from Ward w where w.wardCategory = :wardCategory)")
    List<Bed> findByAvailibility(@Param("wardCategory") String wardCategory);

}
