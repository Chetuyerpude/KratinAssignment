package com.healthsupervision.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.healthsupervision.pojos.User;
import java.lang.String;
import java.util.List;
@Repository
public interface UserRepo extends JpaRepository<User,Long> {
	@Query("select u from User u where u.email =em and u.password =ps")
	public User AuthenticateUser( @Param("em") String email,@Param("ps") String password);
	
	public User findByEmail(String email);
}
