package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {
    Optional<Feedback> findById(Integer id);

    List<Feedback> findByAppointmentId(Integer appointmentId);
}
