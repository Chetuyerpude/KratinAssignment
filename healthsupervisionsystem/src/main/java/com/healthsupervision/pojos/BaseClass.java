package com.healthsupervision.pojos;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@MappedSuperclass
public class BaseClass {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
}
