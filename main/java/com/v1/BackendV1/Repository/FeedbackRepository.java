package com.v1.BackendV1.Repository;

import com.v1.BackendV1.Classes.Accountant;
import com.v1.BackendV1.Classes.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {
    @Query("SELECT p FROM Feedback p WHERE p.feedbackID = :id")
    Optional<Feedback> findById(@Param("id") Integer id);
}
