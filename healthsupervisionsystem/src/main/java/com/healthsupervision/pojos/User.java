package com.healthsupervision.pojos;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseClass {
	@Column(name = "title", length = 10)
	private String title;
	@Column(name = "first_name", length = 20, nullable = false)
	private String firstName;
	@Column(name = "middle_name", length = 20, nullable = false)
	private String middleName;
	@Column(name = "last_name", length = 20, nullable = false)
	private String lastName;
	@Column(name = "dob", nullable = false)
	private LocalDate dob;
	@Column(name = "password", nullable = false)
	private String password;
	@Column(name = "gender", length = 20, nullable = false)
	private String gender;
	@Column(name = "email", length = 40, nullable = false, unique = true)
	private String email;
	@Column(name = "mobile_number", length = 14, nullable = false)
	private String mobileNumber;
	
	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	
	private List<HealthData>  healthdata;

}
