package com.miola.api.orderservicev2.common;

import com.miola.api.orderservicev2.entity.Order;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransactionRequest {
    private Order order;
    private Payment payment;
}
