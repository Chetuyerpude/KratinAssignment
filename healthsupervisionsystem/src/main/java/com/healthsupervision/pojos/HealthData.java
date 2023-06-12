package com.healthsupervision.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity
@Table(name = "health_data")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@JsonIgnoreProperties(("user"))
public class HealthData extends BaseClass {

	@Column(name = "age", length = 10)
	private String age;
	@Column(name = "weight", length = 10, nullable = false)
	private String weight;
	@Column(name = "blood_sugar", length = 10, nullable = false)
	private String bloodsugar;
	@Column(name = "blood_group", length = 20, nullable = false)
	private String bloodgroup;
	@Column(name = "blood_pressure", length = 20, nullable = false)
	private String bp;
	@Column(name = "steps", length = 20, nullable = false)
	private String steps;
	@OneToOne @JoinColumn(name="user_id")
	private User user;
}
