package com.dool.userservice.db.repository;

import com.dool.userservice.db.domain.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class UserRepository{

    private final EntityManager em;

    public User get(String id){
        User user = em.find(User.class, id);

        return user;
    }

    public void create(User user){
        em.persist(user);
    }

    public void delete(String id){
        User user = em.find(User.class, id);
        em.remove(user);
    }

}
