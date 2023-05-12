package xyz.hajin.practice;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

import jakarta.persistence.Id;
import lombok.Setter;
import lombok.Getter;
@Getter
@Setter
@Entity
public class InfoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) private Long id;

    private String name;
    private String email;
    //rivate InfoEntity() {}
    public InfoEntity(String name,String email){
        this.name=name;
        this.email=email;
    }
}
