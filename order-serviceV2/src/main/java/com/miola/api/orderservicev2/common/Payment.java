package com.miola.api.orderservicev2.common;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;





@AllArgsConstructor
@NoArgsConstructor
public class Payment {


    private int paymentId;
    private String paymentStatus;
    private String transactionId;
    private int orderId;
    private double amount;

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public int getPaymentId() {
        return paymentId;
    }

    public String getTransactionId() {
        return transactionId;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public int getOrderId() {
        return orderId;
    }

    public double getAmount() {
        return amount;
    }


}
