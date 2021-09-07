package com.miola.api.orderservicev2.common;

import com.miola.api.orderservicev2.entity.Order;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransactionResponse {
    private Order order;
    private String transactionId;
    private double amount;
    private String message;


    public TransactionResponse(Order order, double amount, String transactionId, String response) {
        this.order=order;
        this.amount=amount;
        this.transactionId=transactionId;
        this.message=response;
    }
}
