package com.miola.api.orderservicev2.repository;

import com.miola.api.orderservicev2.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order,Integer> {
}
